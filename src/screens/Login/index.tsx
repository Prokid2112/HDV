import React, {useState} from 'react';
import LoginScreen from 'react-native-login-screen';
import R from '../../assets/R';
import {HEIGHT, popupOk} from '../../config';
import auth from '@react-native-firebase/auth';
const Login = (props: any) => {
  const [email, setEmail] = useState('');
  const [passWord, setpassWord] = useState('');
  const onLogin = () => {
    // firebase.
    if (email === '' || passWord === '') {
      popupOk('Thông báo', 'Vui lòng điền đầy đủ thông tin');
    } else {
      auth()
        .signInWithEmailAndPassword(email, passWord)
        .then(data => {
          props?.navigation?.replace('TabMain');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            popupOk('Thông báo', 'Email đã được sử dụng');
          } else if (error.code === 'auth/invalid-email') {
            popupOk('Thông báo', 'Định dạng email không hợp lệ');
          } else {
            popupOk('Thông báo', 'Email hoặc mật khẩu không đúng');
          }
        });
    }
  };
  return (
    <LoginScreen
      disableSocialButtons
      disableDivider
      emailPlaceholder="Nhập tên đăng nhập"
      passwordPlaceholder="Nhập mật khẩu"
      signupText="Đăng ký ngay"
      logoImageSource={R.images.introImage}
      onLoginPress={onLogin}
      onSignupPress={() => {
        props?.navigation?.navigate('Signup');
      }}
      onEmailChange={setEmail}
      onPasswordChange={setpassWord}
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
      disableEmailValidation
      disablePasswordTooltip
    />
  );
};

export default Login;
