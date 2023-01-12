import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../style';
type Element ={
  placeholder:string,
  name:string, 
  setName:(name:string) => void,
  hidePass?:boolean, 
  setHidePass?:(hide:boolean) => void,
  isPassword?:boolean,
  textStyle?:any,
}
const TextField = ({placeholder,name,setName,hidePass,setHidePass,isPassword,textStyle}:Element) => {
  return (
    <View style={textStyle ?? styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={newText => setName(newText)}
        defaultValue={name}
        secureTextEntry={hidePass ? true : false}
      />
      {isPassword && (
        <Text
          style={styles.iconInTextField}
          onPress={() => {
            setHidePass!(!hidePass);
          }}>
          {hidePass ? 'Show' : 'Hide'}
        </Text>
      )}
    </View>
  );
};

export default TextField;
