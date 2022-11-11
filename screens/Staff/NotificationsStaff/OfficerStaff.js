import { where } from "firebase/firestore";
import React, { useState, useCallback, useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { firebaseService } from "../../../services/ChatDB";
import ChatList from "../../../components/ChatList";
import ChatView from "../../../components/ChatView";

const image = require("../../../assets/Background.jpg");

export default function Officer() {
  const [isViewAllChat, setViewAllChat] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const allChats = useRef();
  const chatMessages = useRef();
  const msgCreator = useRef();
  const user = "Kusanali";

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getAllChat()
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
      return () => {};
    }, [])
  );

  const createTwoButtonAlert = (name, uid) =>
    Alert.alert(
      "Delete Confirmation",
      `Chat history will be deleted. This will also affect on ${name}'s chat too.`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await firebaseService.deletedbDoc(
              firebaseService.docData(firebaseService.db, "chats", uid)
            );
            await firebaseService.deletedbDoc(
              firebaseService.docData(firebaseService.db, "messages", uid)
            );
            setLoading(true);
            getAllChat()
              .then(() => {
                setLoading(false);
              })
              .catch((error) => {
                console.error(error);
              });
          },
        },
      ]
    );

  const chatView = async (uid) => {
    const msgRef = firebaseService.docCollection(
      firebaseService.db,
      "messages"
    );
    const q = firebaseService.dbQuery(msgRef, where("uid", "==", uid));
    const msgQuerySnapshot = await firebaseService.getdbDocs(q);
    chatMessages.current = [
      {
        id: 0,
        msg: "",
        createdAt: new Date(0),
        sender: "",
      },
    ];

    const msgDB = msgQuerySnapshot.docs.map((doc) => doc.get("msgdata"))[0];
    msgCreator.current = msgQuerySnapshot.docs.map((doc) => doc.get("uid"))[0];
    chatMessages.current =
      typeof msgDB === "undefined"
        ? chatMessages.current
        : chatMessages.current.concat(
            msgDB.map((obj, index) => ({ ...obj, id: index + 1 }))
          );
    setViewAllChat(false);
  };

  const getAllChat = async () => {
    const chatQuerySnapshot = await firebaseService.getdbDocs(
      firebaseService.docCollection(firebaseService.db, "chats")
    );
    const allChatDB = chatQuerySnapshot.docs.map((doc) => doc.data());
    allChats.current = allChatDB.map((obj, index) => ({ ...obj, id: index }));
    setViewAllChat(true);
  };
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!isLoading ? (
          isViewAllChat ? (
            <>
              <Text style={styles.text}>Chats</Text>
              <FlatList
                data={allChats.current}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ChatList
                    title={item.username}
                    detail={item.recentmsg}
                    onClickFunction={() => {
                      chatView(item.uid);
                    }}
                    onDelFunction={() => {
                      createTwoButtonAlert(item.username, item.uid);
                    }}
                  ></ChatList>
                )}
              ></FlatList>
            </>
          ) : (
            <>
              <ChatView
                msgData={chatMessages.current}
                reader={user}
                msgCreator={msgCreator.current}
              ></ChatView>
            </>
          )
        ) : (
          <View>
            <Text style={{ textAlign: "center" }}>Loading...</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
  },
  text: {
    color: "black",
    alignSelf: "center",
    fontSize: 30,
  },
});
