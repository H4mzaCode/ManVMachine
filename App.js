import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Welcome, TicTacBasic, SuperTicTac, Chess} from './components';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="TicTacBasic" component={TicTacBasic} options={{ title: 'Tic Tac Toe' }} />
        <Stack.Screen name="SuperTicTac" component={SuperTicTac} options={{ title: 'Super Tic Tac Toe' }} />
        <Stack.Screen name="Chess" component={Chess} options={{ title: 'Chess' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

