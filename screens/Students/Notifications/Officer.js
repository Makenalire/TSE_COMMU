import React, {useState, useEffect, useCallback}from "react";
import { ImageBackground, View, Text, StyleSheet } from "react-native";
import {GiftedChat} from 'react-native-gifted-chat';

const image = require('../../../assets/Background.jpg')

export default function Officer() {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Can I help you ?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_960_720.png',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
      color: 'black', 
      alignSelf: 'center',
      fontSize: 30
    }
})