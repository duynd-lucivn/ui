import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome, {RegularIcons, SolidIcons} from 'react-native-fontawesome';
import {styles} from '../style';

type AppBars = {
  suffix?: string;
  prefix?: string;
  title: string;
  icon?: string;
  color?: boolean;
  onSuffixPress?: () => void;
  prefixOnPress?: () => void;
};

const AppBar = (props: AppBars) => {
  return (
    <View style={styles.header}>
      {props.prefix ? (
        <Text
          style={[
            styles.headerSubTitle,
            {color: props.color ? '#fff' : '#000'},
          ]}
          onPress={props.prefixOnPress}>
          {props.prefix}
        </Text>
      ) : props.icon ? (
        <Image
          style={styles.logo}
          source={require('../../assets/images/xmark-solid.png')}></Image>
      ) : (
        <View style={{width: 32}} />
      )}
      {(props.title ??= 'Hello World') && (
        <Text
          style={[styles.headerTitle, {color: props.color ? '#fff' : '#000'}]}>
          {props.title}
        </Text>
      )}
      {props.suffix ? (
        <Text
          style={[
            styles.headerSubTitle,
            {color: props.color ? '#fff' : '#000'},
          ]}
          onPress={props.onSuffixPress}>
          {props.suffix}
        </Text>
      ) : (
        <View />
      )}
    </View>
  );
};
export default AppBar;
