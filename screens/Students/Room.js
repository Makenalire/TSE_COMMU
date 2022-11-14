import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { useFonts } from "expo-font";
import { useSelector, useDispatch } from 'react-redux';
import { setRoom } from '../../redux/action';

const image = require('../../assets/Background.jpg')

export default function Room() {
  const { room, roomTime, roomDate } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
    const navigation = useNavigation();
    const roomData = [
      {name: 'PRIVATE ROOM ', id: '200', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '201', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '300', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '301', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '400', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '401', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '500', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '501', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '600', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '601', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '700', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
      {name: 'PRIVATE ROOM ', id: '701', type: 'ROOM TYPE PRIVATE', cap: 'CAPACITY', size: '4-6 PERSONS'},
    ]

    useEffect(() => {
      console.log(room)
      console.log(roomTime)
      console.log(roomDate)
    })

    return (
      <View style={styles.view}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textPet}>EXPLORE SPACE</Text>
            <FlatList 
              data={roomData}
              numColumns={2}
              renderItem= {({ item }) => (             
                  <TouchableOpacity style={styles.boxin1} onPress={() => navigation.navigate('RoomTime', dispatch(setRoom(item.id)))}>
                      <View style={styles.fab}>
                        <Text style={styles.fabIcon}>BOOK NOW</Text>
                      </View>
                      <Text style={styles.text1}>{item.name + item.id}</Text>
                      <Text style={styles.text2}>{item.type}</Text>
                      <Text style={styles.text3}>{item.cap}</Text>
                      <Text style={styles.text3}>{item.size}</Text>
                  </TouchableOpacity>
                // <View style={styles.boxin1}>
                //   <Text style={styles.text1}>{item.name}</Text>
                //   <Text style={styles.text2}>{item.type}</Text>
                //   <Text style={styles.text3}>ตึกวิศวกรรมศาสตร์</Text>
                //   <Text style={styles.text3}>{item.cap}</Text>
                //   <Text style={styles.text3}>{item.size}</Text>
                // </View>
              )}
              ListFooterComponent={() => (
                <Text style={{ marginBottom:80 }}></Text>
              )}
            />
            </ImageBackground>
          </View>
      )}

const styles = StyleSheet.create({
  fab: {
      alignSelf: 'center',
      top: 15,
      width: 90,
      height: 23,
      backgroundColor: '#efddc6',
      borderRadius: 9,
      position: "absolute"
  },
  fabIcon: {
      alignSelf: 'center',
      top: 2,
      fontSize: 13,
      color: '#6b6b6b'
  },
  view: {
      flex: 1
  },
  image: {
      flex: 1,
  },
  text1: {
      left: 10,
      top: 45,
      color: 'white', 
      fontSize: 13
  },
  text2: {
      left: 10,
      top: 48,
      color: '#F1ADAD', 
      fontSize: 10
  },
  text3: {
      left: 10,
      top: 63,
      color: 'white', 
      fontSize: 13
  },
  text4: {
      left: 10,
      top: 64,
      color: 'white', 
      fontSize: 13
  },
  textPet: {
      position: "absolute",
      left: 31,
      top: 50,
      width: 178,
      height: 26,
      fontFamily: 'AbhayaLibre-Medium',
      fontSize: 20,
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: 20,
      color: "#100F0F",
  },
  btnRoom: {
      height: 26.04,
      width: 25,
      alignSelf: 'center',
      top: 7
  },
  boxin1: {
      width: 140,
      height: 140,
      backgroundColor: "#6b6b6b",
      borderRadius: 10,
      marginRight: 20,
      marginBottom: -10,
      left: 30, 
      top: 70, 
      marginTop: 30
  }
})