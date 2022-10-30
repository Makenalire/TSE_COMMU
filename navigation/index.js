import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet } from 'react-native';

const Page = createNativeStackNavigator();
const Stack = createBottomTabNavigator();


function RootNavigator() {
  return (
    <Page.Navigator initialRouteName='Login'>
      <Page.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Page.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Page.Screen name="Student" component={StudentStack} options={{ headerShown: false }} />
      <Page.Screen name="Staff" component={StaffStack} options={{ headerShown: false }} />
      <Page.Screen name="Store" component={StoreStack} options={{ headerShown: false }} />
    </Page.Navigator>
  );
}

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Room from '../screens/Students/Room';
import Petition from '../screens/Students/Petition';
import Calendar from '../screens/Students/Calendar';
import Notification from '../screens/Students/Notifications';
import Problem from '../screens/Students/Problems';
import Covid from '../screens/Students/Notifications/Covid';
import Officer from '../screens/Students/Notifications/Officer';
import { Button } from 'react-native';

function StudentStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      initialRouteName='Room'
      screenOptions={({ route, }) => ({
        headerStyle: {
          backgroundColor: '#FFFFFF'
        },
        headerTintColor: '#DF2525',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, 
        tabBarInactiveBackgroundColor:  '#FFBD59',
        tabBarActiveBackgroundColor: 'darkorange',
        tabBarShowLabel: false,
        tabBarIcon: ({ image, focused }) => {
          if (route.name == 'Room') {
            image = focused ? require('../assets/Room.png') : require('../assets/Room.png')
            return (
              <Image source={image} style={styles.btnRoom} />
            )
          }
          if (route.name == 'Petition') {
            image = focused ? require('../assets/Petition.png') : require('../assets/Petition.png')
            return (
              <Image source={image} style={styles.btnPetition} />
            )
          }
          if (route.name == 'Calendar') {
            image = focused ? require('../assets/Calendar.png') : require('../assets/Calendar.png')
            return (
              <Image source={image} style={styles.btnCalendar} />
            )
          }
          if (route.name == 'Notification') {
            image = focused ? require('../assets/Notification.png') : require('../assets/Notification.png')
            return (
              <Image source={image} style={styles.btnNoti} />
            )
          }
          if (route.name == 'Problem') {
            image = focused ? require('../assets/Problem.png') : require('../assets/Problem.png')
            return (
              <Image source={image} style={styles.btnProblem} />
            )
          }
        },
      })}
    >
      <Stack.Screen 
        name="Room" 
        component={Room}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Petition" 
        component={Petition}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Calendar" 
        component={Calendar}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Notification" 
        component={Notification}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Covid" 
        component={Covid}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center', tabBarButton: () => null, headerLeft: () => (<Button onPress={() => navigation.navigate('Notification')} title="back"/>)}} 
      />
      <Stack.Screen 
        name="Officer" 
        component={Officer}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center',tabBarButton: () => null, headerLeft: () => (<Button onPress={() => navigation.navigate('Notification')} title="back"/>)}} 
      />  
      <Stack.Screen 
        name="Problem" 
        component={Problem}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
    </Stack.Navigator>
  )
}

import PetitionStaff from '../screens/Staff/Petitionstaff';
import NotificationStaff from '../screens/Staff/NotificationsStaff';
import CovidStaff from '../screens/Staff/NotificationsStaff/CovidStaff';
import OfficerStaff from '../screens/Staff/NotificationsStaff/OfficerStaff';
import ProblemStaff from '../screens/Staff/ProblemStaff';

function StaffStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      initialRouteName='PetitionStaff'
      screenOptions={({ route, }) => ({
        headerStyle: {
          backgroundColor: '#FFFFFF'
        },
        headerTintColor: '#DF2525',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, 
        tabBarInactiveBackgroundColor:  '#FFBD59',
        tabBarActiveBackgroundColor: 'darkorange',
        tabBarShowLabel: false,
        tabBarIcon: ({ image, focused }) => {
          if (route.name == 'Room') {
            image = focused ? require('../assets/Room.png') : require('../assets/Room.png')
            return (
              <Image source={image} style={styles.btnRoom} />
            )
          }
          if (route.name == 'PetitionStaff') {
            image = focused ? require('../assets/Petition.png') : require('../assets/Petition.png')
            return (
              <Image source={image} style={styles.btnPetition} />
            )
          }
          if (route.name == 'Calendar') {
            image = focused ? require('../assets/Calendar.png') : require('../assets/Calendar.png')
            return (
              <Image source={image} style={styles.btnCalendar} />
            )
          }
          if (route.name == 'NotificationStaff') {
            image = focused ? require('../assets/Notification.png') : require('../assets/Notification.png')
            return (
              <Image source={image} style={styles.btnNoti} />
            )
          }
          if (route.name == 'ProblemStaff') {
            image = focused ? require('../assets/Problem.png') : require('../assets/Problem.png')
            return (
              <Image source={image} style={styles.btnProblem} />
            )
          }
        },
      })}
    >
      <Stack.Screen 
        name="Room" 
        component={Room}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="PetitionStaff" 
        component={PetitionStaff}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Calendar" 
        component={Calendar}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="NotificationStaff" 
        component={NotificationStaff}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="CovidStaff" 
        component={CovidStaff}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center', tabBarButton: () => null, headerLeft: () => (<Button onPress={() => navigation.navigate('NotificationStaff')} title="back"/>)}} 
      />
      <Stack.Screen 
        name="OfficerStaff" 
        component={OfficerStaff}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center',tabBarButton: () => null, headerLeft: () => (<Button onPress={() => navigation.navigate('NotificationStaff')} title="back"/>)}} 
      />  
      <Stack.Screen 
        name="ProblemStaff" 
        component={ProblemStaff}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
    </Stack.Navigator>
  )
}

function StoreStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator 
      initialRouteName='Calendar'
      screenOptions={({ route, }) => ({
        headerStyle: {
          backgroundColor: '#FFFFFF'
        },
        headerTintColor: '#DF2525',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, 
        tabBarInactiveBackgroundColor:  '#FFBD59',
        tabBarActiveBackgroundColor: 'darkorange',
        tabBarShowLabel: false,
        tabBarIcon: ({ image, focused }) => {
          if (route.name == 'Calendar') {
            image = focused ? require('../assets/Calendar.png') : require('../assets/Calendar.png')
            return (
              <Image source={image} style={styles.btnCalendar} />
            )
          }
          if (route.name == 'Notification') {
            image = focused ? require('../assets/Notification.png') : require('../assets/Notification.png')
            return (
              <Image source={image} style={styles.btnNoti} />
            )
          }
          if (route.name == 'Problem') {
            image = focused ? require('../assets/Problem.png') : require('../assets/Problem.png')
            return (
              <Image source={image} style={styles.btnProblem} />
            )
          }
        },
      })}
    >
      <Stack.Screen 
        name="Notification" 
        component={Notification}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Covid" 
        component={Covid}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center', tabBarButton: () => null, headerLeft: () => (<Button onPress={() => navigation.navigate('Notification')} title="back"/>)}} 
      />
      <Stack.Screen 
        name="Officer" 
        component={Officer}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center',tabBarButton: () => null, headerLeft: () => (<Button onPress={() => navigation.navigate('Notification')} title="back"/>)}} 
      />  
      <Stack.Screen 
        name="Calendar" 
        component={Calendar}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Problem" 
        component={Problem}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
    </Stack.Navigator>
  )
}

export default function navigator() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btnRoom: {
    height: 26.04,
    width: 25,
    alignSelf: 'center',

  },
  btnPetition: {
    height: 26.48,
    width: 24,
    alignSelf: 'center',
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
  },
  btnProblem: {
    height: 25,
    width: 28,
    alignSelf: 'center',
  },
})