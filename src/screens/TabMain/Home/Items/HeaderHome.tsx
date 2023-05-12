import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import R from '../../../../assets/R';
import {getFont, HEIGHT, WIDTH} from '../../../../config';
import TruyenItem from './TruyenItem';
import {Avatar} from 'native-base';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
const HeaderHome = (props: any) => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  useEffect(() => {
    const user: any = auth().currentUser;
    console.log(
      '🚀 ~ file: HeaderHome.tsx:12 ~ useEffect ~ user:',
      user?._user?.email,
    );
    setName(user?._user?.displayName ?? user?._user?.email);
    setImg(user?._user?.photoURL);
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={() => props?.onPress()}>
      <Avatar
        // alignSelf={'center'}
        ml={WIDTH(8)}
        // size="x"
        // bg="green.500"
        source={{
          uri: img,
        }}>
        AJ
      </Avatar>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};
export default HeaderHome;
const styles = StyleSheet.create({
  title: {
    color: R.colors.white,
    // fontWeight: 'bold',
    marginTop: HEIGHT(12),
    marginLeft: WIDTH(12),
    fontSize: getFont(14),
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
