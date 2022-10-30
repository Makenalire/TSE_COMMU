import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";



const image = require("../../assets/Background.jpg");
const metier = ["1", "2", "summer"];
const course = ["SF341", "SF333", "SF327"];

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function Petition() {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.textFaq}>FAQ</Text>
        <Text style={styles.text}>QUIESTION</Text>
        <View style={styles.textInput}>
            <TextInput
                placeholder="Insert QUIESTION"
                placeholderTextColor={"lightgrey"}
                paddingLeft={10}
                style={styles.subject}
            />
        </View>
        <Text style={styles.text}>ANSWER</Text>
        <View style={styles.textInput}>
            <TextInput
                placeholder="Insert ANSWER"
                placeholderTextColor={"lightgrey"}
                paddingLeft={10}
                style={styles.subject}
            />
        </View>
        <TouchableOpacity
        style={{ alignSelf: "flex-end", marginTop: 20, marginRight: 10 }}
        onPress={() => navigation.navigate("Problem")}
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
    marginLeft: 20,
    marginTop: 40
  },
  textInput: {
    alignSelf: 'center',
    width: '90%',
    height: 30,
    borderRadius: 10,
    backgroundColor: "#F9F9F9",
    marginTop: 5
  },
  subject: {
    justifyContent: 'center'
  },
  textFaq: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20
  }
});
