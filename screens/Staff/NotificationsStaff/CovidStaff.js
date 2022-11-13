import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState ,useEffect} from "react";
import {collection, getDocs, getDocsFromCache} from 'firebase/firestore'
import { db } from "../../../services/firebaseCovid";


const image = require("../../../assets/Background.jpg");
const metier = ["1", "2", "summer"];
const course = ["SF341", "SF333", "SF327"];

export default function Petition() {
  const [infoDB,setinfoDB] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => {
      return [{ id, subject, term, course, des }, ...prevItems];
    });
  };
  //Receive data from database START
  useEffect(() => {7
    getInfo()
  }, [])

  useEffect(() => {
    console.log(infoDB)
  }, [infoDB])

  function getInfo() {
    const CovidInfo = collection(db,'covid')
    getDocs(CovidInfo).then(response => {
        const info = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))

        setinfoDB(info)
    }).catch(error => {
        console.log(error.message)
    })
  }
  //Receive data from database END

  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView>
        <Text style={styles.textPet}>COVID</Text>
          {infoDB.map(infoName =>(
            <View style={styles.boxin} key = {infoName.id}>
              <Text style={styles.pettext}>
                <Text>Name: </Text>
                {infoName.data.Name}
              </Text>
              <Text style={styles.pettext}>
                <Text>Student ID: </Text>
                {infoName.data.StudentID}
              </Text>
              <Text style={styles.pettext}>
                <Text>Tel: </Text>
                {infoName.data.Tel}
              </Text>
              <Text style={styles.pettext}>
                <Text>Address: </Text>
                {infoName.data.Address}
              </Text>
            </View>
          ))}
        </ScrollView>
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
    fontFamily: "AbhayaLibre-Medium",
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
    paddingBottom: 20,
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
