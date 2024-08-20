import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home.js';
import Learners from './screens/learner.js';
import Chat from  "./screens/chat.js"

const Stack = createNativeStackNavigator()

function App(){


  return (
   <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
      headerShown:false
    }}>

      <Stack.Screen 
      component={Home} 
      name="Home" 
      
      />
      <Stack.Screen 
      component={Learners}
      name='Learner'
      />

      <Stack.Screen
      component={Chat}
      name="chat" />

    </Stack.Navigator>

   </NavigationContainer>
  );
}



export default App;
