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
  const [image, setImage] = useState<any>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [todos, setTodos] = useState<any>([]);
  const ref = firestore().collection('todos');

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
      setPdf(pickerResult);
      // setResult([pickerResult]);
    } catch (e) {
      console.log('🚀 ~ file: index.tsx:86 ~ PickFile ~ e:', e);
    }
  };

  const onPress = async () => {
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
          setImage(source);
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
  const uploadImage = async () => {
    const {uri} = image;
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
      console.log('🚀 ~ file: index.tsx:105 ~ uploadImage ~ url:', url);
      console.log('🚀 ~ file: index.tsx:103 ~ uploadImage ~ task:', task);
    } catch (e) {
      console.error(e);
    }

    setUploading(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );
    setImage(null);
  };
  const uploadPDF = async () => {
    const {fileCopyUri} = pdf;
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
      console.log('🚀 ~ file: index.tsx:158 ~ uploadPDF ~ url:', url);
    } catch (e) {
      console.error(e);
    }

    setUploading(false);
    Alert.alert(
      'Photo uploaded!',
      'Your photo has been uploaded to Firebase Cloud Storage!',
    );
    setImage(null);
  };
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
  useEffect(() => {
    // auth().currentUser

    const subscriber = auth().onAuthStateChanged((user: any) => {
      console.log('🚀 ~ file: index.tsx:155 ~ useEffect ~ user:', user);
      return {};
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  const addTodo = async () => {
    try {
      console.log('Test 1');
      const res = await ref.add({
        title: 'Check',
        complete: false,
      });
      console.log('Test 2');
      console.log('🚀 ~ file: index.tsx:151 ~ addTodo ~ res:', res);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:149 ~ addTodo ~ error:', error);
    }
  };
  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list: any = [];
      querySnapshot.forEach(doc => {
        const {title, complete} = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setTodos(list);
      console.log('🚀 ~ file: index.tsx:176 ~ useEffect ~ list:', list);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tìm Kiếm" />
      <SearchBar />
      <Button title="Test may anh" onPress={() => onPress()} />
      <Button title="Upload" onPress={() => uploadImage()} />
      {/* <Button title="Dang ky" onPress={() => signUp()} /> */}
      {/* <Button title="Dang nhap" onPress={() => login()} /> */}
      <Button title="Add todo" onPress={() => addTodo()} />
      <Button title="PickFile" onPress={() => pickFile()} />
      <Button title="UploadPDF" onPress={() => uploadPDF()} />
      {/* <Text>Uploading:{uploading ? 'True' : 'False'}</Text> */}
      {/* <Image /> */}
    </View>
  );
};
export default TimKiem;
