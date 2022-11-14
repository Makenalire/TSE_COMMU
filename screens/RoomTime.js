import React, {useState} from 'react';
import {Button, View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setRoom, setRoomDate, setRoomTime } from '../redux/action';
import { useNavigation } from '@react-navigation/native';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});
  const navigation = useNavigation();
  const { room } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const createTwoButtonAlert = () =>
    Alert.alert(
      'complete!',
      // [
      //   {
      //     text: "Cancel",
      //     onPress: () => console.log("Cancel Pressed"),
      //     style: "cancel"
      //   },
      //   { text: "OK", onPress: () => console.log("OK Pressed") }
      // ]
    );

  const DateLists = [
    { id: 1, event: "08:00 - 10:00" },
    { id: 2, event: "10:00 - 12:00" },
    { id: 3, event: "12:00 - 14:00" },
    { id: 4, event: "14:00 - 16:00" },
    { id: 5, event: "16:00 - 18:00" },
    { id: 6, event: "18:00 - 20:00" },
    { id: 7, event: "20:00 - 22:00" },
    { id: 8, event: "22:00 - 00:00" },
    // { id: 9, event: "08:00 - 10:00" },
    // { id: 10, event: "10:00 - 12:00" },
    // { id: 11, event: "12:00 - 14:00" },
    // { id: 12, event: "14:00 - 16:00" },
    // { id: 13, event: "16:00 - 18:00" },
    // { id: 14, event: "18:00 - 20:00" },
    // { id: 15, event: "20:00 - 22:00" },
    // { id: 16, event: "22:00 - 00:00" }
  ];

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(1);
            for (let j = 0; j < numItems; ++j) {
              DateLists.map((product) => {
                items[strTime].push({
                  time: product.event,
                  date: strTime
                })
              } 
              )
            }
          }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      // console.log(newItems);
      // dispatch(setRoom(newItems))
      setItems(newItems)
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17 ,top: 12}} onPress={() => navigation.navigate("Room", dispatch(setRoomTime(item.time)), dispatch(setRoomDate(item.date)))}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignSelf: 'center',
              }}>
              <Text>{item.time}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={Date.now()}
        renderItem={renderItem}
        showClosingKnob={true}
        theme={{
          agendaDayTextColor: "darkorange",
          agendaDayNumColor: "#3c3c3c",
          agendaKnobColor: "lightgrey",
          backgroundColor: "#fffbed",
          monthTextColor: "darkorange",
          textSectionTitleColor: "darkorange",
          dayTextColor: "#5d6e1e",
          selectedDayBackgroundColor: "darkorange",
          todayTextColor: "red",
          dotColor: "white",
          selectedDotColor: "darkorange",
        }}
        pastScrollRange={1}
        futureScrollRange={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  fab: {
    left: 24,
    top: 10,
    width: 190,
    height: 40,
    backgroundColor: '#efddc6',
    borderRadius: 9,
    position: "absolute"
  },
  fabIcon: {
      left: 40,
      top: 10,
      fontSize: 18,
      color: '#6b6b6b',
  },
  FlatListCont: {
    flex: .5,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  CardCont: {
    width: 350,
    height: 50,
    backgroundColor: "#FDEED2",
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 15
  },
  outerCard: {
    padding: 10,
  },
});

export default Schedule;