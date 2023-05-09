import React, {PureComponent, useState} from 'react';
import {FlatList, Alert} from 'react-native';
import HeaderBase from '../../component/Header/HeaderBase';
// import styles from './styles';
import {
  Avatar,
  Text,
  Pressable,
  Divider,
  FormControl,
  Input,
  Box,
} from 'native-base';
import {HEIGHT, WIDTH, getFont, getWidth} from '../../config';
import R from '../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Center, Image} from 'native-base';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import axios from 'axios';
const SignIn = (props: any) => {
  const data = props?.route?.params?.data;
  //   const;
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const onSignUp = async () => {
    try {
      await axios
        .post(
          `http:/192.168.1.7:8082/api/auth/signup`,
          {
            fullName: fullName,
            email: email,
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
          Alert.alert('Thông báo', 'Đăng ký thành công');
          //   axios.defaults.headers.common.Authorization = `Bearer ${response?.data?.token}`;
          props?.navigation?.replace('Login');
        });
    } catch (error) {
      console.log('🚀 ~ file: SignIn.tsx:54 ~ onSignUp ~ error:', error);
      Alert.alert('Thông báo', 'Các trường đã nhập không hợp lệ');
    }

    //
  };
  return (
    <View style={{flex: 1}}>
      <HeaderBase
        title="Đăng ký"
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <Box alignItems="center">
        <FormControl w={WIDTH(343)}>
          <FormControl.Label>Họ và tên</FormControl.Label>
          <Input placeholder="Nhập họ và tên" onChangeText={setFullName} />
          <FormControl.Label>Tên người dùng</FormControl.Label>
          <Input placeholder="Nhập tiêu đề" onChangeText={setUserName} />
          <FormControl.Label>Mật khẩu</FormControl.Label>
          <Input placeholder="Nhập mật khẩu" onChangeText={setPassWord} />
          <FormControl.Label>Email</FormControl.Label>
          <Input placeholder="Nhập Email" onChangeText={setEmail} />
          <Pressable
            mt={HEIGHT(20)}
            flexDirection={'row'}
            width={WIDTH(120)}
            padding={WIDTH(6)}
            borderWidth={'1'}
            borderRadius="xl"
            alignItems={'center'}
            justifyContent={'center'}
            alignSelf={'center'}
            bgColor={R.colors.primaryColor}
            borderColor={R.colors.gray}
            onPress={() => onSignUp()}>
            <Text color={'white'}>Đăng ký</Text>
          </Pressable>
        </FormControl>
      </Box>
    </View>
  );
};
export default SignIn;
