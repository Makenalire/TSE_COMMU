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
                    <Text style={{alignSelf: 'center', marginBottom: 100}}>CONTACT STAFF</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomView}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('Room')} >
                  <Image source={require('../../assets/Room.png')} style={styles.btnRoom} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderRadius: 10, borderColor: 'black'}}
                  onPress={() => navigation.navigate('Petition')} >
                  <Image source={require('../../assets/Petition.png')} style={styles.btnPetition} />
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('Calendar')} >
                  <Image source={require('../../assets/Calendar.png')} style={styles.btnCalendar} />
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={() => navigation.navigate('Notification')} >
                  <Image source={require('../../assets/Notification.png')} style={styles.btnNoti} />
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('Problem')} >
                  <Image source={require('../../assets/Problem.png')} style={styles.btnProblem} />
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
  },
  bottomView: {
    flex: 1,
    width: '100%',
    height: 43,
    backgroundColor: '#FFBD59',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  btnRoom: {
    height: 26.04,
    width: 25,
    alignSelf: 'center',
    top: 7

  },
  btnPetition: {
    height: 26.48,
    width: 24,
    alignSelf: 'center',
    top: 7
  },
  btnCalendar: {
    height: 54,
    width: 54,
    alignSelf: 'center',
    bottom: 20
  },
  btnNoti: {
    height: 26,
    width: 24,
    alignSelf: 'center',
    top: 7
  },
  btnProblem: {
    height: 25,
    width: 28,
    alignSelf: 'center',
    top: 7
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})