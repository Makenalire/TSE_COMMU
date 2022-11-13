import { StyleSheet, Text, View, SafeAreaView, VirtualizedList, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeadImage = require('../assets/BackgroundMain.png');
// const imageMap = require('../assets/map/tsePark2.png');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 0.065, marginTop: 20}}>
        <ImageBackground source={HeadImage} style={styles.image}>
            <Text style={{alignSelf: 'center', color: '#9D0202', fontSize: 20, fontFamily: 'AbhayaLibre-Bold'}}>
                TSE COMMU
            </Text>
            <Text style={{alignSelf: 'center', color: '#9D0202', fontSize: 14, fontFamily: 'AbhayaLibre-Medium',}}>
                THAMMASAT UNIVERSITY
            </Text>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    image: {
        width: SCREEN_WIDTH,
        height: 55
    },
});