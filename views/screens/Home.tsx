import React, {useState} from 'react';

import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {styles} from '../style';
import {
  TextField,
  AppBar,
  SectionListBasics,
  ContentListBasics,
  MarketListBasics,
  ProfileDetail,
  Avatar,
} from '../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {StackParam} from '../../App';
function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Feed"
          suffix="Filter"
          prefix="Back"
          prefixOnPress={() => navigation.navigate('MyDrawer')}
          onSuffixPress={() => navigation.navigate('Login')}
        />
        <TextField
          name={name}
          setName={setName}
          placeholder="Search"
          textStyle={styles.textFieldSearchStyle}
        />
        <SectionListBasics />
      </View>
    </TouchableWithoutFeedback>
  );
}

function Content() {
  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar title="Content" suffix="Filter" prefix="Back" />
        <TextField
          name={name}
          setName={setName}
          placeholder="Search"
          textStyle={styles.textFieldSearchStyle}
        />
        <ContentListBasics />
      </View>
    </TouchableWithoutFeedback>
  );
}
function Market() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Market"
          suffix="Filter"
          prefix="Back"
          prefixOnPress={() => navigation.navigate('MyDrawer')}
          onSuffixPress={() => navigation.navigate('Login')}
        />
        <TextField
          name={name}
          setName={setName}
          placeholder="Search"
          textStyle={styles.textFieldSearchStyle}
        />
        <MarketListBasics />
      </View>
    </TouchableWithoutFeedback>
  );
}
function Profile() {
  const navigation = useNavigation<NativeStackNavigationProp<StackParam>>();

  const [name, setName] = useState('');
  return (
    <View>
      <View style={styles.containerTwo}>
        <AppBar
          color={true}
          title="Profile"
          suffix="Logout"
          prefix="Settings"
          onSuffixPress={() => navigation.navigate('Login')}
        />
        <Avatar />
      </View>
      <ProfileDetail />
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function HomeApp() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {height: 80},
        tabBarIcon: ({focused, color, size}) => {
          return (
            <View
              style={[
                styles.iconStyle,
                {backgroundColor: focused ? '#5DB075' : '#E8E8E8'},
              ]}></View>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Content" component={Content} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
