import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ChatBubble from "./ChatBubble";
import { firebaseService } from "../services/chatDB";
import { arrayUnion, increment } from "firebase/firestore";

const ChatView = ({ msgData, reader, msgCreator }) => {
  if (typeof msgData === "undefined") {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          Loading takes too long? Please check your internet connection and try again.
        </Text>
      </View>
    );
  }

  const [msgList, setMsgList] = useState(msgData);
  const [message, setMessage] = useState("");
  const msgIndex = useRef(msgData.length);
  const newDay = useRef(new Date());
  const newRef = useRef();
  const creator = useRef(msgCreator);
  useEffect(() => {
    newDay.current = new Date();
  }, [message]);

  const isNewDay = (date) => {
    if (dateFormat(date) != dateFormat(newDay.current)) {
      newDay.current = date;
      return true;
    }
    return false;
  };

  const addMsgToView = () => {
    if (message.trim() === "") {
      setMessage("");
      return;
    }

    newRef.current.scrollToIndex({
      animated: true,
      index: msgIndex.current - 1,
    });
    msgIndex.current = msgIndex.current + 1;
    const newMsgData = {
      msg: message,
      id: msgIndex.current,
      createdAt: new Date(),
      sender: reader,
    };
    const newMessage = [...msgList, newMsgData];
    setMsgList(newMessage);
    setMessage("");
  };

  const addMsgToDB = async () => {
    if (typeof creator.current === "undefined") {
      creator.current = reader;
      const msgRef = firebaseService.docData(
        firebaseService.db,
        "messages",
        creator.current
      );
      await firebaseService.setdbDoc(msgRef, {
        msgdata: [
          {
            createdAt: firebaseService.serverTime(),
            msg: message,
            sender: creator.current,
          },
        ],
        uid: creator.current,
      });
      const chatsRef = firebaseService.docCollection(
        firebaseService.db,
        "chats",
      );
      await firebaseService.setdbDoc(firebaseService.docData(chatsRef, creator.current), {
        recentmsg: message,
        uid: creator.current,
        username: "Nahida"
      });
    } else {
      const chatsRef = firebaseService.docCollection(
        firebaseService.db,
        "chats",
      );
      await firebaseService.updatedbDoc(firebaseService.docData(chatsRef, msgCreator), {
        recentmsg: message
      });

      const msgRef = firebaseService.docData(
        firebaseService.db,
        "messages",
        msgCreator
      );
      await firebaseService.updatedbDoc(msgRef, {
        msgdata: arrayUnion({
          createdAt: firebaseService.serverTime(),
          msg: message,
          sender: reader,
        }),
      });
      
    }
  };

  const handleSend = () => {
    addMsgToView();
    addMsgToDB();
    // const msgRef = firebaseService.docCollection(firebaseService.db, "messages");
    // await firebaseService.setdbDoc(firebaseService.docData(staffsRef, id), {
    //   name: "Nahida",
    //   uid: "2710",
    // });
    // const sender = firebaseService.auth.currentUser;
    // const res = await firebaseService.getdbDoc(
    //   firebaseService.docData(firebaseService.db, "chats", sender.uid)
    // );
    // if (!res.exists()) {
    //   await firebaseService.setdbDoc(
    //     firebaseService.docData(firebaseService.db, "chats", sender.uid),
    //     { messages: [] }
    //   );
    //   await firebaseService.updatedbDoc(
    //     firebaseService.docData(firebaseService.db, "userChats", sender.uid),
    //     {
    //       [sender.uid + ".userInfo"]: {
    //         uid: sender.uid,
    //         displayName: sender.displayName,
    //       },
    //       [sender.uid + ".createdAt"]: firebaseService.serverTime,
    //     }
    //   );
    // }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={(ref) => {
          newRef.current = ref;
        }}
        data={msgList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatBubble
            msg={item.msg}
            time={timeFormat(item.createdAt)}
            date={dateFormat(item.createdAt)}
            isSender={item.sender === reader}
            isNewDay={isNewDay(item.createdAt)}
          ></ChatBubble>
        )}
      />
      <View style={styles.sendBoxView}>
        <TextInput
          placeholder="message"
          placeholderTextColor={"lightgrey"}
          paddingLeft={10}
          style={styles.messageInput}
          onChangeText={(msg) => setMessage(msg)}
          value={message}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendMsgButton}>
          <Image
            source={require("../assets/notif_boxitem_icon.png")}
            style={styles.sendMsgImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const dateFormat = (date = new Date()) => {
  var dateNow = date;
  if (!(date instanceof Date)) {
    dateNow = date.toDate();
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    dateNow.getDate() +
    " " +
    monthNames[dateNow.getMonth()] +
    " " +
    dateNow.getFullYear()
  );
};

const timeFormat = (date = new Date()) => {
  var timeNow = date;
  if (!(date instanceof Date)) {
    timeNow = date.toDate();
  }
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const strTime =
    (hours >= 12 ? hours - 12 : hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    (hours >= 12 ? " PM" : " AM");

  return strTime;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sendBoxView: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 50,
    minHeight: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderRadius: 5,
    borderWidth: 1,
    margin: 20,
  },
  sendMsgButton: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  sendMsgImg: {
    width: 30,
    height: 30,
  },
  messageInput: {
    flex: 6,
    justifyContent: "flex-start",
    fontSize: 20,
  },
});

export default ChatView;
