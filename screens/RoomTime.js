import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { setRoomDate, setRoomTime, reset } from "../redux/action";
import { useNavigation } from "@react-navigation/native";
import { setDoc, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../services/firebaseCovid";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const RoomTime = () => {
  const [isLoading, setLoading] = useState(true);
  const roomTimeArray = useRef({});
  const [items, setItems] = useState({});
  const navigation = useNavigation();
  const { room, roomTime, roomDate } = useSelector(
    (state) => state.userReducer
  );
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const DateLists = [
    { id: 1, event: "08:00 - 10:00" },
    { id: 2, event: "10:00 - 12:00" },
    { id: 3, event: "12:00 - 14:00" },
    { id: 4, event: "14:00 - 16:00" },
    { id: 5, event: "16:00 - 18:00" },
    { id: 6, event: "18:00 - 20:00" },
    { id: 7, event: "20:00 - 22:00" },
    { id: 8, event: "22:00 - 00:00" },
  ];

  async function getInfo() {
    const roomReserve = doc(db, "roomdata", room);
    const roomRef = await getDoc(roomReserve);
    const info = roomRef.get("roomdata");
    console.log(info);
    for (let i = 0; i < info.length; i++) {
      var temp = roomTimeArray.current[info[i].date];

      if (temp == undefined) {
        roomTimeArray.current[info[i].date] = [info[i].time];
      } else {
        roomTimeArray.current[info[i].date] = [...temp, info[i].time];
      }
    }
    console.log(roomTimeArray.current);
  }

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
                date: strTime,
              });
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      // console.log(newItems);
      // dispatch(setRoom(newItems))
      setItems(newItems);
    }, 10);
  };

  useEffect(() => {
    if (isLoading == true) {
      getInfo().then(setLoading(false));
    }
    handlerAddRoom();
  });

  const handlerAddRoom = async () => {
    console.log(room + "hihi");
    if (roomDate == "" || roomTime == "") {
      await roomDate;
      await roomTime;
    } else {
      const roomInfo = doc(db, "roomdata", room);
      const docSnap = await getDoc(roomInfo);

      if (docSnap.exists()) {
        await updateDoc(roomInfo, {
          roomdata: arrayUnion({
            date: roomDate,
            time: roomTime,
          }),
        });
        navigation.goBack(
          alert(
            "Book Exist! Try another room or time\n" +
              "Room: วศ." +
              room +
              "\n" +
              "Date: " +
              roomDate +
              "\n" +
              "Time: " +
              roomTime
          )
        );
      } else {
        await setDoc(roomInfo, {
          roomdata: [
            {
              date: roomDate,
              time: roomTime,
            },
          ],
        });
        navigation.goBack(
          alert(
            "Book Complete!\n" +
              "Room: วศ." +
              room +
              "\n" +
              "Date: " +
              roomDate +
              "\n" +
              "Time: " +
              roomTime
          )
        );
      }
    }
    // navigation.navigate("Room", console.log(room))
    setReload(true);
    // navigation.navigate.goBack(console.log(room))
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity         
      disabled={
        roomTimeArray.current[item.date] == undefined
          ? false
          : roomTimeArray.current[item.date].includes(item.time)
          ? true
          : false
      }
        style={{ marginRight: 10, marginTop: 17, top: 12 }}
        onPress={() => (
          dispatch(setRoomDate(item.date)), dispatch(setRoomTime(item.time))
        )}
      >
        <Card>
          <Card.Content
            style={
              roomTimeArray.current[item.date] == undefined 
                ? styles.CardBackground
                :roomTimeArray.current[item.date].includes(item.time) ? styles.CardBackgroundDisable 
                :styles.CardBackground
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
              }}
            >
              <Text>{item.time}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {!isLoading ? (
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
      ) : (
        <View>
          <Text style={{ textAlign: "center" }}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  fab: {
    left: 24,
    top: 10,
    width: 190,
    height: 40,
    backgroundColor: "#efddc6",
    borderRadius: 9,
    position: "absolute",
  },
  fabIcon: {
    left: 40,
    top: 10,
    fontSize: 18,
    color: "#6b6b6b",
  },
  FlatListCont: {
    flex: 0.5,
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
    paddingLeft: 15,
  },
  outerCard: {
    padding: 10,
  },
  CardBackgroundDisable: {
    backgroundColor: "#d9d9d9",
    opacity: 10
  },
});

export default RoomTime;