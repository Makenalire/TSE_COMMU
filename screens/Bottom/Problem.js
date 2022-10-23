import React from "react";
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const image = require('../../assets/Background.jpg')

export default function Problem() {
  const navigation = useNavigation();
    return (
        <View style={styles.view}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>
                  HELP
                </Text>
                <View style={styles.viewButton}>
                  <TouchableOpacity onPress={() => navigation.navigate('Covid')} >
                    <Image source={require('../../assets/Problem/Covid.png')} style={styles.btn} />
                    <Text style={{alignSelf: 'center'}}>COVID-19</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Officer')} >
                    <Image source={require('../../assets/Problem/Officer.png')} style={styles.btn} />
                    <Text style={{alignSelf: 'center'}}>CONTACT STAFF</Text>
                  </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
      flex: 1,
    },
    image: {
      flex: 1
    },
    text: {
      color: 'black', 
      alignSelf: 'flex-start',
      fontSize: 20,
      marginTop: 40,
      marginLeft: 20
    },
    btn: {
      width: 129,
      height: 109,
      marginTop: 50,
    },
    viewButton: {
      alignSelf: 'center'
    }
})