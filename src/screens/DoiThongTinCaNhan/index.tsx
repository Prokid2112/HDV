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
import storage from '@react-native-firebase/storage';
import {Icon, Select} from 'native-base';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
const DoiThongTinCaNhan = (props: any) => {
  console.log('🚀 ~ file: index.tsx:32 ~ DoiThongTinCaNhan ~ props:', props);
  const setLoading = props?.route.params.setLoading;
  const ref = firestore().collection('books');
  const [title, setTitle] = useState('');
  const [noiDung, setNoiDung] = useState('');
  const [theLoai, setTheLoai] = useState('');
  const [urlBia, setUrlBia] = useState<any>('');
  const [urlFile, seturlFile] = useState<any>('');
  const [weburlBia, setWebUrlBia] = useState<any>('');
  const [weburlFile, setWeburlFile] = useState<any>('');
  const [type, setType] = useState<any>('');
  const [uploading, setUploading] = useState(false);
  const dataBia = useRef<any>('');
  const dataFile = useRef<any>('');

  const onChonBia = async () => {
    try {
      const options: any = {
        title: 'Select Image',
      };
      console.log('🚀 ~ file: index.tsx:62 ~ onPress ~ options:', options);
      await launchImageLibrary(options, (response: any) => {
        if (!response?.didCancel && !response?.errorCode) {
          const source = {uri: response?.assets?.[0]?.uri};
          console.log(
            '🚀 ~ file: index.tsx:77 ~ awaitlaunchImageLibrary ~ source:',
            source,
          );
          setUrlBia(source);
        }
        console.log(
          '🚀 ~ file: index.tsx:76 ~ awaitlaunchImageLibrary ~ response:',
          response,
        );
      });
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:72 ~ onPress ~ error:', error);
    }
  };

  const goBack = () => {
    props.navigation?.goBack();
  };
  const addSach = async () => {
    try {
      setLoading(true);
      await uploadImage();
      console.log('Test 1');
      const body = {
        displayName: title,
        photoURL: dataBia.current,
      };
      const res = await auth()?.currentUser.updateProfile(body);
      console.log(
        '🚀 ~ file: index.tsx:82 ~ addSach ~ res:',
        res,
        body,
        title,
        dataBia.current,
      );
      setLoading(false);
      // console.log('🚀 ~ file: index.tsx:151 ~ addTodo ~ res:', res);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:149 ~ addTodo ~ error:', error);
      setLoading(false);
    }
    Alert.alert(
      'Thông báo',
      'Thay đổi thông tin thành công',
      [{text: 'Ok', style: 'default', onPress: () => goBack()}],
      {cancelable: false},
    );
  };
  const uploadImage = async () => {
    const {uri} = urlBia;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    setUploading(true);
    const ref = storage().ref(filename);
    const task = ref.putFile(uploadUri);

    // set progress state
    try {
      await task;
      const url = await ref.getDownloadURL().catch((error: any) => {
        console.log('🚀 ~ file: index.tsx:103 ~ uploadImage ~ error:', error);
      });
      setWebUrlBia(url);
      dataBia.current = url;
    } catch (e) {
      console.error(e);
    }

    setUploading(false);

    setUrlBia('');
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBase
        title="Đổi thông tin cá nhân"
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <Box mt={HEIGHT(120)} alignItems="center">
        <FormControl w={WIDTH(343)}>
          <FormControl.Label>Nhập tên hiển thị</FormControl.Label>
          <Input placeholder="Nhập tên hiển thị" onChangeText={setTitle} />

          <FormControl.Label>Chọn ảnh đại diện</FormControl.Label>
          {urlBia == '' ? (
            <Pressable
              flexDirection={'row'}
              width={WIDTH(120)}
              padding={WIDTH(6)}
              borderWidth={'1'}
              borderRadius="sm"
              alignItems={'center'}
              onPress={() => onChonBia()}
              borderColor={R.colors.gray}>
              <Entypo name="upload" size={WIDTH(24)} />
              <Text ml={WIDTH(12)}>Chọn Ảnh</Text>
            </Pressable>
          ) : (
            <View flexDirection={'row'}>
              <Image
                resizeMethod="auto"
                resizeMode="contain"
                bgColor={R.colors.gray82}
                source={urlBia ?? R.images.bookCover}
                style={styles.image}
              />
              <Pressable
                ml={WIDTH(8)}
                alignSelf={'center'}
                onPress={() => setUrlBia('')}>
                <Entypo name="trash" size={WIDTH(16)} />
              </Pressable>
            </View>
          )}

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
            onPress={() => addSach()}>
            <Text color={'white'}>Thay đổi</Text>
          </Pressable>
        </FormControl>
      </Box>
    </View>
  );
};
export default DoiThongTinCaNhan;
