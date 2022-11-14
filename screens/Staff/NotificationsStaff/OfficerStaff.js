import { where } from "firebase/firestore";
import React, { useState, useCallback, useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { firebaseService } from "../../../services/ChatDB";
import ChatList from "../../../components/ChatList";
import ChatView from "../../../components/ChatView";

const image = require("../../../assets/Background.jpg");

export default function Officer() {
  const navigation = useNavigation();
  const [isViewAllChat, setViewAllChat] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const allChats = useRef();
  const chatMessages = useRef();
  const msgCreator = useRef();
  const isChatEmpty = useRef(false);
  const user = "Kusanali";

  useFocusEffect(
    useCallback(() => {
      refreshScreen();
      return () => {};
    }, [])
  );

  const refreshScreen = () => {
    setLoading(true);
    getAllChat()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          text: "Delete",
          onPress: async () => {
            await firebaseService.deletedbDoc(
              firebaseService.docData(firebaseService.db, "chats", uid)
            );
            await firebaseService.deletedbDoc(
              firebaseService.docData(firebaseService.db, "messages", uid)
            );
            refreshScreen()
          },
        },
      ],
      {
        cancelable: true,
      }
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
    if (allChats.current.length === 0) {
      isChatEmpty.current = true;
    } else {
      isChatEmpty.current = false;
    }
    setViewAllChat(true);
  };
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!isLoading ? (
          isViewAllChat ? (
            !isChatEmpty.current ? (
              <>
                <View style={styles.buttonBackChatListView}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("NotificationStaff")}
                    style={styles.buttonBackChatList}
                  >
                    <Text style={styles.buttonBackChatListText}>{"< Back"}</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Chats</Text>
                  <View style={{ flex: 1 }}></View>
                </View>
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
                />
              </>
            ) : (
              <View style={styles.chatEmptyView}>
                <Text style={styles.chatEmptyText}>
                  No message has been sent to you right now.
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("NotificationStaff")}
                  style={styles.buttonBack}
                >
                  <Text style={styles.buttonBackText}>BACK</Text>
                </TouchableOpacity>
              </View>
            )
          ) : (
            <>
              <ChatView
                msgData={chatMessages.current}
                reader={user}
                msgCreator={msgCreator.current}
                onBackFunct={() => refreshScreen()}
              />
            </>
          )
        ) : (
          <View>
            <Text style={styles.loadingText}>Loading...</Text>
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
    flex: 1,
    paddingVertical: 8,
    color: "black",
    textAlign: "center",
    fontSize: 35,
    fontFamily: "AbhayaLibre-Bold",
  },
  loadingText: {
    fontFamily: "AbhayaLibre-Regular",
    textAlign: "center",
  },
  chatEmptyView: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  chatEmptyText: {
    fontSize: 20,
    fontFamily: "AbhayaLibre-Regular",
  },
  buttonBack: {
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    backgroundColor: "#FFBD59",
    borderRadius: 10,
  },
  buttonBackText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "AbhayaLibre-Bold",
  },
  buttonBackChatListView: {
    flexDirection: "row",
  },
  buttonBackChatList: {
    flex: 1,
    paddingStart: 10,
  },
  buttonBackChatListText: {
    fontSize: 20,
    fontFamily: "AbhayaLibre-Bold",
    textAlign:'left'
  },
});
