import React, {useState} from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebaseDb";

const image = require("../../assets/Background.jpg");

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function Petition() {
  const navigation = useNavigation();
  const [q, setQ] = useState("");
  const [a, setA] = useState("");

  const create = async() => {
    // await setDoc(doc(db, "PETITION", "pXHZG3zVsBSYWcMFOjAu"), {
    //   course: course,
    //   // des: des,
    //   // subject: sub,
    //   term: term
    // }).then(() => {
    //   console.log('data submitted');
    // }).catch((error) => {
    //   console.log(error);
    // })
    await addDoc(collection(db, "FAQ"), {
      Q: q,
      A: a,
    }).then(() => {
      console.log('data submitted');
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textFaq}>FAQ</Text>
        <View style={{marginTop: 40}}>
          <Text style={styles.text}>QUESTION</Text>
          <View style={styles.textInput}>
              <TextInput
                  placeholder="Insert QUIESTION"
                  placeholderTextColor={"lightgrey"}
                  paddingLeft={10}
                  style={styles.subject}
                  onChangeText={(value) => setQ(value)}
              />
          </View>
          <Text style={styles.text}>ANSWER</Text>
          <View style={styles.textInput}>
              <TextInput
                  placeholder="Insert ANSWER"
                  placeholderTextColor={"lightgrey"}
                  paddingLeft={10}
                  style={styles.subject}
                  onChangeText={(value) => setA(value)}
              />
          </View>
        </View>
        <TouchableOpacity
        style={{ alignSelf: "flex-end", marginTop: 20, marginRight: 10 }}
        onPress={create}
        >
        <Image
            source={require("../../assets/Sent.png")}
            style={styles.btnSent}
        />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: SCREEN_HEIGHT
  },
  image: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginLeft: 31,
    marginTop: 40,
  },
  textInput: {
    alignSelf: 'center',
    width: '80%',
    height: 30,
    borderRadius: 5,
    backgroundColor: "#F9F9F9",
    marginTop: 5,
    borderColor: '#a9a9a9',
    borderWidth: 1,
  },
  subject: {
    justifyContent: 'center', 
  },
  textFaq: {
    position: "absolute",
    marginLeft: 31,
    marginTop: 50,
    width: 178,
    height: 26,
    fontFamily: "AbhayaLibre-Medium",
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
  },
  btnSent: {
    width: 97,
    height: 41,
    marginRight: 20
  },
});
