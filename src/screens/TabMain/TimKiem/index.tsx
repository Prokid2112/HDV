import React, {PureComponent, useState, useEffect} from 'react';
import {View, FlatList, Platform, Alert} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {
  Avatar,
  Text,
  Pressable,
  VStack,
  Box,
  Divider,
  Heading,
  Input,
  Icon,
  Image,
} from 'native-base';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {WIDTH, popupOk} from '../../../config';
import R from '../../../assets/R';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
function SearchBar() {
  return (
    <VStack
      my="4"
      space={5}
      w="100%"
      maxW={WIDTH(343)}
      alignSelf={'center'}
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack w="100%" space={5} alignSelf="center">
        <Input
          onChangeText={}
          placeholder="Search"
          variant="filled"
          width="100%"
          borderRadius="10"
          borderColor={R.colors.black0}
          py="1"
          px="2"
          InputLeftElement={
            <Icon
              ml="2"
              size="4"
              color="gray.400"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

const TimKiem = (props: any) => {
  const [text, setText] = useState<any>('');

  const data = props?.data;

  const signUp = () => {
    // firebase.
    auth()
      .createUserWithEmailAndPassword('tomcat2@gmail.com', '123456')
      .then(() => {
        popupOk('Thông báo', 'Đăng ký thành công');
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
  const login = () => {
    // firebase.
    auth()
      .signInWithEmailAndPassword('tomcat2@gmail.com', '123456')
      .then(data => {
        console.log('🚀 ~ file: index.tsx:129 ~ .then ~ data:', data);
        popupOk('Thông báo', 'Đăng nhập thành công');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          popupOk('Thông báo', 'Email đã được sử dụng');
        } else if (error.code === 'auth/invalid-email') {
          popupOk('Thông báo', 'Định dạng email không hợp lệ');
        } else {
          popupOk('Thông báo', 'Đăng nhập thất bại');
        }
      });
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tìm Kiếm" />
      <SearchBar />
    </View>
  );
};
export default TimKiem;
