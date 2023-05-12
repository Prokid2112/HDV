import React, {PureComponent, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable} from 'native-base';
import {HEIGHT, WIDTH, getFont} from '../../../config';
import R from '../../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
const TaiKhoan = (props: any) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  useEffect(() => {
    const user: any = auth().currentUser;
    console.log(
      '🚀 ~ file: HeaderHome.tsx:12 ~ useEffect ~ user:',
      user?._user,
    );
    setName(user?._user?.displayName ?? user?._user?.email);
    setImg(user?._user?.photoURL);
  }, []);
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tài Khoản" />
      <Avatar
        alignSelf={'center'}
        mt={HEIGHT(32)}
        size="2xl"
        bg="green.500"
        source={{
          uri: img,
        }}>
        AJ
      </Avatar>
      <Text
        alignSelf={'center'}
        marginTop={HEIGHT(8)}
        fontWeight={'extrabold'}
        fontSize={getFont(24)}>
        {name}
      </Text>
      <Pressable
        w={WIDTH(343)}
        marginTop={HEIGHT(8)}
        paddingLeft={HEIGHT(20)}
        bgColor={R.colors.gray30}
        padding={WIDTH(8)}
        alignSelf={'center'}
        borderRadius={'xl'}
        flexDirection="row"
        onPress={() => {
          props.navigation.navigate('DoiThongTinCaNhan', {
            setLoading: props?.setLoading,
          });
        }}
        alignItems={'center'}>
        <Entypo name="user" size={WIDTH(20)} color={R.colors.black0} />
        <Text
          marginLeft={WIDTH(16)}
          color={R.colors.black0}
          fontSize={getFont(18)}>
          Thay đổi thông tin cá nhân
        </Text>
      </Pressable>
      <Pressable
        w={WIDTH(343)}
        marginTop={HEIGHT(8)}
        paddingLeft={HEIGHT(20)}
        bgColor={R.colors.gray30}
        padding={WIDTH(8)}
        alignSelf={'center'}
        borderRadius={'xl'}
        flexDirection="row"
        onPress={() => {
          props.navigation.navigate('ThemSach');
        }}
        alignItems={'center'}>
        <Entypo name="plus" size={WIDTH(20)} color={R.colors.black0} />
        <Text
          marginLeft={WIDTH(16)}
          color={R.colors.black0}
          fontSize={getFont(18)}>
          Thêm sách
        </Text>
      </Pressable>
      <Pressable
        w={WIDTH(343)}
        marginTop={HEIGHT(8)}
        paddingLeft={HEIGHT(20)}
        bgColor={R.colors.gray30}
        padding={WIDTH(8)}
        alignSelf={'center'}
        borderRadius={'xl'}
        flexDirection="row"
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              props.navigation.replace('Intro');
            });
          // props.navigation.replace('Intro');
        }}
        alignItems={'center'}>
        <Entypo name="log-out" size={WIDTH(20)} color={R.colors.black0} />
        <Text
          marginLeft={WIDTH(16)}
          color={R.colors.black0}
          fontSize={getFont(18)}>
          Đăng xuất
        </Text>
      </Pressable>
    </View>
  );
};
export default TaiKhoan;
