import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome, {RegularIcons, SolidIcons} from 'react-native-fontawesome';
import {styles} from '../style';

type AppBars ={
  suffix?:string,
   prefix?:string, 
   title:string,
   // icon?:string,
     onPress?: ()=>void, prefixOnPress?: ()=>void,
}

const AppBar = (props:AppBars) => {
  return (
    <View style={styles.header}>
      {props.prefix ? (
        <Text style={styles.headerSubTitle} onPress={props.prefixOnPress}>
          {props.prefix}
        </Text>
      ) : (
        <View/>
      )}
      {(props.title ??= 'Hello World') && (
        <Text style={styles.headerTitle}>{props.title}</Text>
      )}
      {props.suffix ? (
        <Text style={styles.headerSubTitle} onPress={props.onPress}>
          {props.suffix}
        </Text>
      ) : (
        <View />
      )}
    </View>
  );
};
export default AppBar;
