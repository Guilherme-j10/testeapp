import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/pages/home';
import PreviewScreen from './src/pages/preview';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar 
        style="light" 
        hidden={false} 
        translucent={false} 
        barStyle="light-content" 
        backgroundColor="#ff5c08" 
      />
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Preview" component={PreviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
