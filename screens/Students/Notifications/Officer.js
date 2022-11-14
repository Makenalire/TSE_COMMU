import { where } from "firebase/firestore";
import React, { useState, useRef, useCallback } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { firebaseService } from "../../../services/chatDatabase";
import ChatView from "../../../components/ChatView";

const image = require("../../../assets/Background.jpg");

export default function Officer() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const allChats = useRef();
  const chatMessages = useRef();
  const msgCreator = useRef();
  const user = "78910";

  useFocusEffect(
    useCallback(() => {
        setLoading(true);
        chatView(user)
          .then(() => {
            return;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setLoading(false);
          });
      return () => {};
    }, [])
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
  };
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!isLoading ? (
          <>
            <ChatView
              msgData={chatMessages.current}
              reader={user}
              msgCreator={msgCreator.current}
              onBackFunct={() => navigation.navigate("Notification")}
            />
          </>
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
});
