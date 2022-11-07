import { where } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { firebaseService } from "../../../services/chatDB";
import ChatList from "../../../components/ChatList";
import ChatView from "../../../components/ChatView";

const image = require("../../../assets/Background.jpg");

export default function Officer() {
  const [isViewAllChat, setViewAllChat] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const allChats = useRef();
  const chatMessages = useRef();
  const msgCreator = useRef();
  const user = "5555";

  useEffect(() => {
    canViewAllChat()
      .then((value) => {
        if (value === "No data") {
          setViewAllChat(false);
        } else {
          setViewAllChat(value);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const chatView = async (uid) => {
    const msgRef = firebaseService.docCollection(
      firebaseService.db,
      "messages"
    );
    const q = firebaseService.dbQuery(msgRef, where("uid", "==", uid));
    const msgQuerySnapshot = await firebaseService.getdbDocs(q);
    msgQuerySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
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
    chatMessages.current = typeof msgDB === "undefined" ? chatMessages.current : chatMessages.current.concat(msgDB);
    console.log(chatMessages.current);
    console.log(msgCreator.current);
    setViewAllChat(false);
  };

  const canViewAllChat = async () => {
    const staffsRef = firebaseService.docCollection(
      firebaseService.db,
      "staffs"
    );
    const q = firebaseService.dbQuery(staffsRef, where("uid", "==", user));
    const staffQuerySnapshot = await firebaseService.getdbDocs(q);
    if (staffQuerySnapshot.size > 0) {
      const chatQuerySnapshot = await firebaseService.getdbDocs(
        firebaseService.docCollection(firebaseService.db, "chats")
      );
      allChats.current = chatQuerySnapshot.docs.map((doc) => doc.data());
      return true;
    } else if (
      staffQuerySnapshot.empty &&
      staffQuerySnapshot.metadata.fromCache
    ) {
      return "No data";
    } else {
      chatView(user).then(() => {
        return false;
      });
    }
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
                // {[
                //   {
                //     id: 1,
                //     msg: "Nahida is so cute >.<",
                //     createdAt: new Date("October 31, 2022 11:14:00"),
                //     isSender: true,
                //   },
                //   {
                //     id: 2,
                //     msg: "Yes, ofc!",
                //     createdAt: new Date("October 31, 2022 11:30:00"),
                //     isSender: false,
                //   },
                // ]}
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

const addData = async () => {
  console.log("PRESS");
  const id = "name" + ".uid";
  const staffsRef = firebaseService.docCollection(firebaseService.db, "staffs");
  await firebaseService.setdbDoc(firebaseService.docData(staffsRef, id), {
    name: "Nahida",
    uid: "2710",
  });
};

const getData = async () => {
  console.log("PRESS");
  const id = "name" + " uid";
  const staffsRef = firebaseService.docData(firebaseService.db, "staffs", id);
  const docSnap = await firebaseService.getdbDoc(staffsRef);
  console.log(docSnap.data());
};

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

const sendMsg = () => {
  db.collection("messages").add({
    text: "",
    createdAt: db.TimeStamp.now(),
    uid,
  });
};
