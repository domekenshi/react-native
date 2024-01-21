/**
 * testApps
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types/RootStackParamList';
import HomeScreen from './src/pages/HomeScreen';
import Todo from './src/pages/Todo';
import Animation from './src/pages/Animation';

import Detail from './src/pages/detail';

const Stack = createStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Animation" component={Animation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
