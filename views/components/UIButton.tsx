import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonElement = {
  isSelected: boolean;
  title: string;
  icon?: string;
  onPress: () => void;
};

function UIButton({onPress, title, isSelected}: ButtonElement) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        minHeight: 51,
        paddingVertical: 16,
        borderRadius: 100,
        marginHorizontal: 15,
        marginVertical: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5DB075',
        opacity: 1,
      }}>
      <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
}
export default UIButton;
