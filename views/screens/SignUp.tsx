import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {styles} from '../style';
import {TextField, AppBar,UIButton} from '../components';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParam } from '../../App';


function SignUp() {
const navigation =useNavigation<NativeStackNavigationProp<StackParam>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [hidePass, setHidePass] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Sign Up"
          suffix="Login"
          // icon="SolidIcons.xmark"
          onPress={() => navigation.navigate('Login')}
        />
        <TextField name={name} setName={setName} placeholder="Name" />
        <TextField name={email} setName={setEmail} placeholder="Email" />
        <TextField
          name={password}
          setName={setPassword}
          hidePass={hidePass}
          setHidePass={setHidePass}
          placeholder="Password"
          isPassword={true}
        />
        <CheckBoxWithText
          isSelected={isSelected}
          setSelection={setSelection}
          text="I would like to receive your newsletter and other promotional information."
        />
        <UIButton
          title="Sign Up"
          isSelected={true}
          onPress={() => navigation.navigate('Login')}
        />
        <Text style={{color: '#5DB075', textAlign: 'center'}}>
          Forgot your password?
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignUp;



type CheckBoxElement ={
  isSelected:boolean, 
  text:string,
    icon?:string,
    setSelection: (isSelected:boolean)=>void,
}
const CheckBoxWithText = ({isSelected, setSelection, text}:CheckBoxElement) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

