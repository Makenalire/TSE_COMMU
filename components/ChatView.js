import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ChatBubble from "./ChatBubble";
import { firebaseService } from "../services/ChatDB";
import { arrayUnion } from "firebase/firestore";

const ChatView = ({ msgData, reader, msgCreator, onBackFunct }) => {
  if (typeof msgData === "undefined") {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          Loading takes too long? Please check your internet connection and try
          again.
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

  useEffect(() => {
    setTimeout(() => {
      newRef.current.scrollToEnd({ animated: false });
    });
  }, []);

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

    newRef.current.scrollToEnd();
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
        "chats"
      );
      await firebaseService.setdbDoc(
        firebaseService.docData(chatsRef, creator.current),
        {
          recentmsg: message,
          uid: creator.current,
          username: "Nahida",
        }
      );
    } else {
      const chatsRef = firebaseService.docCollection(
        firebaseService.db,
        "chats"
      );
      await firebaseService.updatedbDoc(
        firebaseService.docData(chatsRef, creator.current),
        {
          recentmsg: message,
        }
      );

      const msgRef = firebaseService.docData(
        firebaseService.db,
        "messages",
        creator.current
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
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onBackFunct}
        style={styles.buttonBackChatList}
      >
        <Text style={styles.buttonBackChatListText}>{"< Back"}</Text>
      </TouchableOpacity>
      <ScrollView
        ref={(ref) => {
          newRef.current = ref;
        }}
      >
        {msgList.map((item) => (
          <ChatBubble
            key={item.id}
            msg={item.msg}
            time={timeFormat(item.createdAt)}
            date={dateFormat(item.createdAt)}
            isSender={item.sender === reader}
            isNewDay={isNewDay(item.createdAt)}
          />
        ))}
      </ScrollView>

      {/* <FlatList
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
      /> */}
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
            source={require("../assets/Problem/chat/send_icon.png")}
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
    fontFamily: "AbhayaLibre-Regular",
  },
  buttonBackChatList: {
    paddingStart: 10,
  },
  buttonBackChatListText: {
    fontSize: 20,
    fontFamily: "AbhayaLibre-Bold",
  },
});

export default ChatView;
