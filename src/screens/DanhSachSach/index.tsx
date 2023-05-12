import React, {PureComponent, useRef, useState} from 'react';
import {FlatList, Platform, TextInput, Alert} from 'react-native';
import HeaderBase from '../../component/Header/HeaderBase';
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
import {HEIGHT, WIDTH, getFont} from '../../config';
import R from '../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Center, Image} from 'native-base';
import firestore from '@react-native-firebase/firestore';

import {Icon, Select} from 'native-base';
import ItemBook from '../../component/Items/ItemBook';
const DanhSachSach = (props: any) => {
  console.log('🚀 ~ file: index.tsx:32 ~ DanhSachSach ~ props:', props);
  const data: any = props?.route?.params?.data;
  const theLoai: string = props?.route?.params?.theLoai;
  return (
    <View style={{flex: 1}}>
      <HeaderBase
        title={`Danh sách sách ${theLoai.toLowerCase()}`}
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item, index}) => {
          return <ItemBook dataBook={item} {...props} />;
        }}
      />
    </View>
  );
};
export default DanhSachSach;
