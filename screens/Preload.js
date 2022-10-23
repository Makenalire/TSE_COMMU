import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

export default function Preload() {
  const navigation = useNavigation();
  // let [isLoaded, setIsLoaded] = React.useState(false);

  // let cacheResources = async () => {
  //   const logo = [require('../assets/85392-carr.json')];

  //   return logo;
  // }

  // React.useEffect(() => {
  //   const loadResources = async  () => {
  //     await cacheResources();
  //     setIsLoaded(true);
  //   };

  //   loadResources();
  // }, [])

  // if (!isLoaded) {
  //   return <AppLoading/>
  // }

  return (
    <View style={styles.preload}>
      <LottieView  
        style={styles.car}
        source={require('../assets/85392-carr.json')}
        speed = {1.5}
        autoPlay 
        loop = {false}
        onAnimationFinish={() => {
          // console.log('Preload Finish')
          navigation.navigate('Problem', {})
        }}
      />
      <Text style={styles.Find}>Find<Text style={styles.GO}>GO</Text></Text>
    </View>
  )                                        
  
}


// export default class Preload extends React.Component {
//   render() {
//     return (
//       <View style={styles.preload}>
//         <LottieView  
//           style={styles.car}
//           source={require('../assets/85392-carr.json')}
//           speed = {1}
//           autoPlay 
//           loop = {false}
//           onAnimationFinish={() => {
//             //console.log('Preload Finish')
//             this.props.navigation.replace('Login')
//           }}
//         />
//         <Text style={styles.Find}>Find<Text style={styles.GO}>GO</Text></Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  preload: {
    flex: 1,
    backgroundColor: '#035397',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Find: {
    alignItems: 'center',
    marginBottom: -150,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  car: {
    alignItems: 'center',
    marginBottom: 50,
  },
  GO: {
    alignItems: 'center',
    marginBottom: -150,
    color: 'orange',
    fontSize: 40,
    fontWeight: 'bold'
  }
});