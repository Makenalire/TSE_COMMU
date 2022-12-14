import React, { useState } from "react";
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
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebaseDb";

const image = require("../../assets/Background.jpg");
const metier = ["1", "2", "summer"];
const courseData = ["SF341", "SF333", "SF327"];

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function Petition() {
  const navigation = useNavigation();
  const [sub, setSub] = useState("");
  const [term, setTerm] = useState("");
  const [course, setCourse] = useState("");
  const [des, setDes] = useState("");

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
    await addDoc(collection(db, "PETITION"), {
      course: course,
      des: des,
      subject: sub,
      term: term
    }).then(() => {
      console.log('data submitted');
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textPet}>PETITION</Text>
        <Text style={styles.textSub}>SUBJECT</Text>
        <Text style={styles.textTerm}>TERM</Text>
        <Text style={styles.textCourse}>COURSE</Text>
        <Text style={styles.textDes}>DESCRIPTION</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder=""
            placeholderTextColor={"lightgrey"}
            paddingLeft={10}
            style={styles.subject}
            onChangeText={(textValue) => setSub(textValue)}
          />
        </View>
        <SelectDropdown
          data={metier}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setTerm(selectedItem);
          }}
          defaultButtonText={" "}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#C1C1C1"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
        />
        <SelectDropdown
          data={courseData}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setCourse(selectedItem);
          }}
          defaultButtonText={" "}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdownCourseBtnStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <FontAwesome
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={"#C1C1C1"}
                size={18}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          selectedRowStyle={styles.dropdown1SelectedRowStyle}
        />
        <View style={styles.Description}>
          <TextInput
            placeholder=""
            placeholderTextColor={"lightgrey"}
            paddingLeft={10}
            style={styles.textInputDescription}
            onChangeText={(textValue) => setDes(textValue)}
            multiline={true}
          />
        </View>
        <TouchableOpacity
          style={{ alignItems: 'flex-end' }}
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
  textPet: {
    position: "absolute",
    left: 31,
    top: 50,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
    fontFamily: 'AbhayaLibre-Medium',
  },
  textSub: {
    position: "absolute",
    left: 41,
    top: 130,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
    fontFamily: 'AbhayaLibre-Medium',
  },
  textTerm: {
    position: "absolute",
    left: 41,
    top: 240,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
    fontFamily: 'AbhayaLibre-Medium',
  },
  textCourse: {
    position: "absolute",
    left: 41,
    top: 340,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
    fontFamily: 'AbhayaLibre-Medium',
  },
  textDes: {
    position: "absolute",
    left: 41,
    top: 430,
    width: 178,
    height: 26,
    fontSize: 20,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 20,
    color: "#100F0F",
    fontFamily: 'AbhayaLibre-Medium',
  },
  textInput: {
    position: "absolute",
    left: 41,
    top: 160,
    width: 294,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  subject: {
    fontSize: 20,
    width: "80%",
    top: 5,
    left: -2,
  },
  icon: {
    alignSelf: "center",
    left: 4,
  },
  dropdown1BtnStyle: {
    position: "absolute",
    left: 41,
    top: 266,
    width: 90,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },

  dropdownCourseBtnStyle: {
    position: "absolute",
    left: 42,
    top: 365,
    width: 200,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF', borderRadius: 10},
  dropdown1RowTxtStyle: { color: "#444" },
  dropdown1SelectedRowStyle: { backgroundColor: "#B3B3B3" },
  dropdown1searchInputStyleStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  Description: {
    position: "absolute",
    left: 41,
    top: 454,
    width: 294,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  textInputDescription: {
    position: "absolute",
    top: 6,
  },
  iconTopLeft: {
    top: 4,
    left: 4,
    alignSelf: "flex-start",
  },
  btnSent: {
    width: 97,
    height: 41,
    top: 570,
    marginRight: 20
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
