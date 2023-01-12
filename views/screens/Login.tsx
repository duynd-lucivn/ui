import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles} from '../style';
import {TextField, AppBar,UIButton} from '../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParam } from '../../App';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation =useNavigation<NativeStackNavigationProp<StackParam>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.default}>
        <AppBar
          title="Login"
          suffix="Sign Up"
          onPress={() => navigation.navigate('Login')}
        />
        <TextField name={email} setName={setEmail} placeholder="Email" />
        <TextField
          name={password}
          setName={setPassword}
          hidePass={hidePass}
          setHidePass={setHidePass}
          placeholder="Password"
          isPassword={true}
        />

        <UIButton
          title="Login"
          isSelected={true}
          onPress={() => navigation.navigate('HomeApp')}
        />
        <Text style={{color: '#5DB075', textAlign: 'center'}}>
          Forgot your password?
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

