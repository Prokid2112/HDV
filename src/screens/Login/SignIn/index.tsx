import React, {PureComponent, useRef, useState} from 'react';
import {FlatList, Platform, TextInput, Alert} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import {
  Avatar,
  Text,
  Pressable,
  Divider,
  Input,
  Box,
  FormControl,
  WarningOutlineIcon,
  Button,
} from 'native-base';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {HEIGHT, WIDTH, getFont, popupOk} from '../../../config';
import R from '../../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Center, Image} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import {Icon, Select} from 'native-base';
import auth from '@react-native-firebase/auth';
const Signup = (props: any) => {
  const [email, setEmail] = useState('');
  const [passWord, setpassWord] = useState('');
  const [passWordAgain, setpassWordAgain] = useState('');

  const onSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, passWord)
      .then(() => {
        popupOk('Thông báo', 'Đăng ký thành công', () => {
          props.navigation?.goBack();
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          popupOk('Thông báo', 'Email đã được sử dụng');
        } else if (error.code === 'auth/invalid-email') {
          popupOk('Thông báo', 'Định dạng email không hợp lệ');
        } else {
          popupOk('Thông báo', 'Đăng ký thất bại');
        }
      });
  };
  const onCheck = () => {
    if (passWord !== passWordAgain) {
      popupOk('Thông báo', 'Mật khẩu không giống nhau');
    } else if (passWord === '') {
      popupOk('Thông báo', 'Mật khẩu không được để trống');
    } else {
      onSignUp();
    }
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
          <FormControl.Label>Nhập email</FormControl.Label>
          <Input placeholder="expample@gmail.com" onChangeText={setEmail} />
          <FormControl.Label>Nhập mật khẩu</FormControl.Label>
          <Input
            type="password"
            placeholder="Mật khẩu"
            onChangeText={setpassWord}
          />
          <FormControl.Label>Nhập lại mật khẩu</FormControl.Label>
          <Input
            type="password"
            placeholder="Nhập lại mật khẩu"
            onChangeText={setpassWordAgain}
          />
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
            onPress={onCheck}>
            <Text color={'white'}>Đăng ký</Text>
          </Pressable>
        </FormControl>
      </Box>
    </View>
  );
};
export default Signup;
