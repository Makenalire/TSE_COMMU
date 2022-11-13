import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../../../services/firebaseDb";

const image = require("../../../assets/Background.jpg");

export default function QandA() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getPetition();
    console.log(items)
  }, [])

  function getPetition() {
    const petCollRef = collection(db, "FAQ");
    getDocs(petCollRef)
      .then((response) => {
        const pets = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
        setItems(pets)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textPet}>Q&A</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.boxin}>
              <Text style={styles.pettext}>
                Q: {item.data.Q}
              </Text>
              <Text numberOfLines={2} style={styles.pettext}>
                A: {item.data.A}
              </Text>
            </View>
          )}
          ListFooterComponent={() => (
            <Text style={{ marginBottom:80 }}></Text>
          )}
        />
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
    top: 70,
    marginTop: 30,
    width: '90%',
    height: 89,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#9A9A9A",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 10, 
    alignSelf: 'center'
  },

  pettext: {
    left: 10,
    top: 10,
    fontSize: 16,
    width: '95%'
  }
});