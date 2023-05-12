import React, {PureComponent, useState, useEffect} from 'react';
import {View, FlatList, Platform, Alert, TextComponent} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
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

import Ionicons from 'react-native-vector-icons/Ionicons';
import {WIDTH, getFont, popupOk} from '../../../config';
import R from '../../../assets/R';

import ItemBook from '../../../component/Items/ItemBook';
function SearchBar({setText}: any) {
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
          onChangeText={setText}
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

  const data = props?.data?.filter((item: any) => {
    return item.title?.includes(text);
  });

  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tìm Kiếm" />
      <SearchBar setText={setText} />
      <FlatList
        data={data}
        extraData={text}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item, index}) => {
          return <ItemBook dataBook={item} {...props} />;
        }}
      />
    </View>
  );
};
export default TimKiem;
