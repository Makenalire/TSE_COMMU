import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Alert, Modal, Button, ImageBackground, SafeAreaView } from 'react-native';

const image = require('../assets/Background.jpg')

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image} >
      <View>
        <Text style={{color: 'black', alignSelf: 'center', fontSize: 30}}>HOME</Text>
      </View>
    <View style={styles.bottomView}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Room')} >
        <Image source={require('../assets/Room.png')} style={styles.btnRoom} />
      </TouchableOpacity>
      <TouchableOpacity style={{borderRadius: 10, borderColor: 'black'}}
        onPress={() => navigation.navigate('Petition')} >
        <Image source={require('../assets/Petition.png')} style={styles.btnPetition} />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Calendar')} >
        <Image source={require('../assets/Calendar.png')} style={styles.btnCalendar} />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Notification')} >
        <Image source={require('../assets/Notification.png')} style={styles.btnNoti} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Problem')} >
        <Image source={require('../assets/Problem.png')} style={styles.btnProblem} />
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
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
});