import React, {useEffect, useState} from 'react';
import LoginScreen from 'react-native-login-screen';
import R from '../../assets/R';
import {HEIGHT} from '../../config';
import axios from 'axios';
const baseUrl = 'http://localhost:8082/api/auth/signin';
import APISauce, {ApiResponse} from 'apisauce';
import {Alert} from 'react-native';
const Login = (props: any) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const onLogin = async () => {
    try {
      await axios
        .post(
          `http:/192.168.69.50:8082/api/auth/signin`,
          {
            username: userName,
            password: passWord,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          console.log(
            '🚀 ~ file: index.tsx:28 ~ onLogin ~ response:',
            response,
          );
          axios.defaults.headers.common.Authorization = `Bearer ${response?.data?.token}`;
          props?.navigation?.replace('TabMain', {userData: response?.data});
        });
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:37 ~ onLogin ~ error:', error);
      Alert.alert('Thông báo', 'Tên đăng nhập hoặc mật khẩu không đúng');
    }

    //
  };

  return (
    <LoginScreen
      disableSocialButtons
      disableDivider
      emailPlaceholder="Nhập tên đăng nhập"
      passwordPlaceholder="Nhập mật khẩu"
      signupText="Đăng ký ngay"
      logoImageSource={R.images.introImage}
      onLoginPress={() => {
        onLogin();
      }}
      onSignupPress={() => props?.navigation?.navigate('SignIn')}
      onEmailChange={setUserName}
      onPasswordChange={setPassWord}
      loginButtonStyle={{backgroundColor: R.colors.primaryColor}}
      signupTextStyle={{
        textDecorationLine: 'underline',
        color: R.colors.blue0084,
      }}
      //   logoImageSource={undefined}
      logoImageStyle={{marginVertical: HEIGHT(40)}}
      loginButtonText="Đăng nhập"
      style={{backgroundColor: R.colors.backGray}}
      emailTextInputProps={{mainColor: R.colors.primaryColor}}
      passwordTextInputProps={{mainColor: R.colors.primaryColor}}
      // enablePasswordValidation
      disableEmailValidation
    />
  );
};

export default Login;
