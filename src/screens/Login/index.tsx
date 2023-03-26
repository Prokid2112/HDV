import React from 'react';
import LoginScreen from 'react-native-login-screen';
import R from '../../assets/R';
import {HEIGHT} from '../../config';
const Login = (props: any) => {
  return (
    <LoginScreen
      disableSocialButtons
      disableDivider
      emailPlaceholder="Nhập tên đăng nhập"
      passwordPlaceholder="Nhập mật khẩu"
      signupText="Đăng ký ngay"
      logoImageSource={R.images.introImage}
      onLoginPress={() => {
        props?.navigation?.replace('TabMain');
      }}
      onSignupPress={() => {}}
      onEmailChange={(value: string) => {
        let username = value;
        console.log('username: ', username);
      }}
      onPasswordChange={(password: string) => {}}
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
      enablePasswordValidation
    />
  );
};

export default Login;
