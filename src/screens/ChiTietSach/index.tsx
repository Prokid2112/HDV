import React, {PureComponent} from 'react';
import {FlatList} from 'react-native';
import HeaderBase from '../../component/Header/HeaderBase';
import styles from './styles';
import {Avatar, Text, Pressable, Divider} from 'native-base';
import {HEIGHT, WIDTH, getFont, getWidth} from '../../config';
import R from '../../assets/R';
import Entypo from 'react-native-vector-icons/Entypo';
import {View, Center, Image} from 'native-base';
import {background} from 'native-base/lib/typescript/theme/styled-system';
const ChiTietSach = (props: any) => {
  const data = props?.route?.params?.data;
  console.log('🚀 ~ file: index.tsx:13 ~ ChiTietSach ~ data:', data);
  return (
    <View justifyContent={'space-between'} style={{flex: 1}}>
      <View>
        <HeaderBase
          title={data?.title}
          disableBack={false}
          onPress={() => {
            props.navigation?.goBack();
          }}
        />
        <View>
          <View mt={HEIGHT(20)} ml={WIDTH(12)}>
            <Image
              source={R.images.bookCover}
              alt="Alternate Text"
              width={WIDTH(150)}
              height={HEIGHT(240)}
              alignSelf={'center'}
            />
            <View mt={WIDTH(24)} ml={WIDTH(8)}>
              <Text
                textAlign={'center'}
                alignSelf={'center'}
                bold
                fontSize={getFont(24)}>
                {data?.title}
              </Text>
              <Text fontSize={getFont(20)}>Thể loại: {data?.category}</Text>
              <Text fontSize={getFont(20)}>Nội dung</Text>
              <Text fontSize={getFont(20)} color={R.colors.gray6B}>
                {data?.description}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Pressable
        backgroundColor={R.colors.primaryColor}
        w={getWidth()}
        justifyContent={'center'}
        alignItems={'center'}
        height={HEIGHT(60)}
        onPress={() => {
          props.navigation?.navigate('DocSach', {
            title: data?.title,
            sourcePDF: data?.path,
          });
        }}>
        <Text fontSize={getFont(18)} bold color={R.colors.white100}>
          Đọc sách
        </Text>
      </Pressable>
    </View>
  );
};
export default ChiTietSach;
