import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Room from './screens/Bottom/Room';
import Petition from './screens/Bottom/Petition';
import Calendar from './screens/Bottom/Calendar';
import Notification from './screens/Bottom/Notification';
import Problem from './screens/Bottom/Problem';
import Covid from './screens/Bottom/Problem/Covid';
import Officer from './screens/Bottom/Problem/Officer';

const Stack = createNativeStackNavigator();

function PageStack() {
  return (
    <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF'
        },
        headerTintColor: '#DF2525',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown:false}} 
      />
      <Stack.Screen 
        name="Register" 
        component={Register}
        options={{headerShown:false}} 
      />
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
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
        name="Problem" 
        component={Problem}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Covid" 
        component={Covid}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
      <Stack.Screen 
        name="Officer" 
        component={Officer}
        options={{headerShown:true, title: 'TSE COMMU', headerTitleAlign: 'center'}} 
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <PageStack/>
    </NavigationContainer>
  );
}