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
const ThemSach = (props: any) => {
  const data = useRef({
    title: '',
    noiDung: '',
    theLoai: '',
    urlBia: '',
    urlFile: '',
  });
  const ref = firestore().collection('books');
  const [title, setTitle] = useState('');
  const [noiDung, setNoiDung] = useState('');
  const [theLoai, setTheLoai] = useState('');
  const [urlBia, setUrlBia] = useState<any>('');
  const [urlFile, seturlFile] = useState<any>('');
  const [weburlBia, setWebUrlBia] = useState<any>('');
  const [weburlFile, setWeburlFile] = useState<any>('');
  const [uploading, setUploading] = useState(false);
  const dataBia = useRef<any>('');
  const dataFile = useRef<any>('');
  const pickFile = async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: [types.pdf],
      });
      console.log(
        '🚀 ~ file: index.tsx:80 ~ PickFile ~ pickerResult:',
        pickerResult,
      );
      seturlFile(pickerResult);
      // setResult([pickerResult]);
    } catch (e) {
      console.log('🚀 ~ file: index.tsx:86 ~ PickFile ~ e:', e);
    }
  };
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
  const addSach = async () => {
    try {
      await uploadImage();
      await uploadPDF();
      console.log('Test 1');
      const body = {
        title: title,
        noiDung: noiDung,
        theLoai: 'Hành động',
        urlBia: dataBia.current,
        urlFile: dataFile.current,
      };

      const res = await ref.add(body);
      Alert.alert('Đăng truyện thành công', 'Truyện của bạn đã được lưu');
      // console.log('🚀 ~ file: index.tsx:151 ~ addTodo ~ res:', res);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:149 ~ addTodo ~ error:', error);
    }
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
  const uploadPDF = async () => {
    const {fileCopyUri} = urlFile;
    const filename = fileCopyUri.substring(fileCopyUri.lastIndexOf('/') + 1);
    const uploadUri =
      Platform.OS === 'ios' ? fileCopyUri.replace('file://', '') : fileCopyUri;
    setUploading(true);
    const ref = storage().ref(filename);
    const task = ref.putFile(uploadUri);

    // set progress state
    try {
      await task;
      const url = await ref.getDownloadURL().catch((error: any) => {
        console.log('🚀 ~ file: index.tsx:103 ~ uploadPDF ~ error:', error);
      });
      setWeburlFile(url);
      dataFile.current = url;
    } catch (e) {
      console.error(e);
    }

    setUploading(false);

    seturlFile('');
  };
  return (
    <View style={{flex: 1}}>
      <HeaderBase
        title="Thêm sách"
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <Box alignItems="center">
        <FormControl w={WIDTH(343)}>
          <FormControl.Label>Nhập tiêu đề</FormControl.Label>
          <Input placeholder="Nhập tiêu đề" onChangeText={setTitle} />
          <FormControl.Label>Nhập nội dung sách</FormControl.Label>
          <Input
            onChangeText={setNoiDung}
            placeholder="Nhập nội dung sách (tối đa 300 chữ)"
            multiline
            minHeight={HEIGHT(90)}
            justifyContent={'flex-start'}
            textAlignVertical="top"
            maxLength={300}
            // alignItems={'flex-start'}
            // textAlign={'center'}
          />
          <FormControl.Label>Chọn Sách</FormControl.Label>
          {urlFile == '' ? (
            <Pressable
              flexDirection={'row'}
              width={WIDTH(120)}
              padding={WIDTH(6)}
              borderWidth={'1'}
              borderRadius="sm"
              alignItems={'center'}
              onPress={() => pickFile()}
              borderColor={R.colors.gray}>
              <Entypo name="upload" size={WIDTH(24)} />
              <Text ml={WIDTH(12)}>Chọn File</Text>
            </Pressable>
          ) : (
            <View flexDirection={'row'}>
              <Text>{urlFile?.uri}</Text>
              <Pressable
                ml={WIDTH(8)}
                alignSelf={'center'}
                onPress={() => seturlFile('')}>
                <Entypo name="trash" size={WIDTH(16)} />
              </Pressable>
            </View>
          )}

          <FormControl.Label>Chọn bìa sách</FormControl.Label>
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
            <Text color={'white'}>Thêm truyện</Text>
          </Pressable>
        </FormControl>
      </Box>
    </View>
  );
};
export default ThemSach;
