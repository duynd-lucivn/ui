import React, {useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SectionList,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome, {
  RegularIcons,
  SolidIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import {styles} from '../style';
import {TextField, AppBar, SectionListBasics,ContentListBasics} from '../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParam } from '../../App';
function HomeScreen() {
  const navigation =useNavigation<NativeStackNavigationProp<StackParam>>();

  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Feed"
          suffix="Filter"
          prefix="Back"
          prefixOnPress={() => navigation.navigate('MyDrawer')}
          onPress={() => navigation.navigate('Login')}
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

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function Content() {
  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Content"
          suffix="Filter"
          prefix="Back"
        
        />
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
  const navigation =useNavigation<NativeStackNavigationProp<StackParam>>();

  const [name, setName] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Market"
          suffix="Filter"
          prefix="Back"
          prefixOnPress={() => navigation.navigate('MyDrawer')}
          onPress={() => navigation.navigate('Login')}
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
const Tab = createBottomTabNavigator();

export default function HomeApp() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {

          return (
            <View
              style={[
                styles.iconStyle,
                 {backgroundColor: focused?'#5DB075':'#E8E8E8'}
              ]}>
          
            </View>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Content" component={Content} />
      <Tab.Screen name="Market" component={Market} />

      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
