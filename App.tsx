import React, {Component, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './views/screens/SignUp';
import Login from './views/screens/Login';
import HomeApp from './views/screens/Home';
// import MyDrawer from './views/components/Drawer';
import 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  faB,
  faCheckSquare,
  faCoffee,
  faDatabase,
  faHouseLaptop,
  faS,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import MyDrawer from './views/components/Drawer';
library.add(
  faB,
  faS,
  faHouseLaptop,
  faCheckSquare,
  faCoffee,
  faDatabase,
  faWindowMaximize,
);

export type StackParam = {
  SignUp: any;
  HomeApp: any;
  Login: any;
  MyDrawer: any;
};
const Stack = createStackNavigator<StackParam>();
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: 'transparrent',
//   },
// };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'HomeApp'} component={HomeApp} />
        <Stack.Screen name={'MyDrawer'} component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
