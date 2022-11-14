import { View, ImageBackground, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require('../../../assets/Background.jpg')

export default function Notification() {
    const navigation = useNavigation();
    return(
        <ImageBackground source={image} resizeMode="cover" style={styles.image} >
          <Text style={styles.text}>
            HELP
          </Text>
          <View style={styles.viewButton}>
            <TouchableOpacity onPress={() => navigation.navigate('CovidStaff')} >
              <Image source={require('../../../assets/Problem/Covid.png')} style={styles.btn} />
              <Text style={{alignSelf: 'center', fontFamily: 'AbhayaLibre-Medium',}}>COVID-19</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OfficerStaff')} >
              <Image source={require('../../../assets/Problem/Officer.png')} style={styles.btn} />
              <Text style={{alignSelf: 'center', marginBottom: 100, fontFamily: 'AbhayaLibre-Medium',}}>CONTACT STAFF</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  text: {
    color: 'black', 
    alignSelf: 'flex-start',
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
    fontFamily: 'AbhayaLibre-Medium',
  },
  viewButton: {
    alignSelf: 'center'
  },
  btn: {
    width: 129,
    height: 109,
    marginTop: 50,
  },
});