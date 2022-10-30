import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const image = require("../../../assets/Background.jpg");
const metier = ["1", "2", "summer"];
const course = ["SF341", "SF333", "SF327"];

export default function Petition() {
  const [items, setItems] = useState([
    { id: 1,
    subject: "วันสุดท้ายที่ดรอปได้",
    term: "1", course: "SF327",
    des: "xxxxxxxxxxx" },

    { id: 2,
     subject: "FF",
     term: "2",
     course: "SF222",
     des: "YYYYYY" },

    { id: 3,
      subject: "AAA",
      term: "2",
      course: "CN101",
      des: "ZZZZZZZZ" },

    { id: 4,
      subject: "AAA",
      term: "2",
      course: "CN101",
      des: "ZZZZZZZZ" },

    { id: 5,
      subject: "AAA",
      term: "2",
      course: "CN101",
      des: "ZZZZZZZZ" },
  ]);

  const addItem = (item) => {
    setItems((prevItems) => {
      return [{ id, subject, term, course, des }, ...prevItems];
    });
  };

  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textPet}>FAQ</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.boxin}>
              <Text style={styles.pettext}>
                <Text>Subject </Text>
                {item.subject}
              </Text>
              <Text style={styles.pettext}>
                <Text>Term </Text>
                {item.term}
              </Text>
              <Text style={styles.pettext}>
                <Text>Course code </Text>
                {item.course}
              </Text>
              <Text style={styles.pettext}>
                <Text>Description </Text>
                {item.des}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 10 }}
          onPress={() => navigation.navigate("Problem")}
        ></TouchableOpacity>
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
  },
  textPet: {
    position: "absolute",
    left: 31,
    top: 50,
    width: 178,
    height: 26,
    fontFamily: "Abhaya Libre Medium",
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
  },

  boxin: {
    left: 45,
    top: 70,
    marginTop: 30,
    width: 294,
    height: 189,
    backgroundColor: "#FDEED2",
    borderRadius: 10,
  },

  pettext: {
    left: 10,
    top: 10,
    width: 500,
    height: 26,
    fontSize: 16,
  },

  statusbox: {
    left: 170,
    top: -80,
    width: 102,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#8DDBD6",
  },
  textstatus: {
    left: 10,
    top: 10,
    width: 100,
    height: 26,
    fontSize: 16,
  },

  statusbox2: {
    left: 170,
    top: -80,
    width: 102,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#98DB8D",
  },

  bottomView: {
    top: 670,
    flex: 1,
    width: "100%",
    height: 100,
    backgroundColor: "#FFBD59",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  btnRoom: {
    height: 26.04,
    width: 25,
    alignSelf: "center",
    top: 7,
  },
  btnPetition: {
    height: 26.48,
    width: 24,
    alignSelf: "center",
    top: 7,
  },
  btnCalendar: {
    height: 54,
    width: 54,
    alignSelf: "center",
    bottom: 20,
  },
  btnNoti: {
    height: 26,
    width: 24,
    alignSelf: "center",
    top: 7,
  },
  btnProblem: {
    height: 25,
    width: 28,
    alignSelf: "center",
    top: 7,
  },
});
