import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import HeaderBase from '../../../component/Header/HeaderBase';
import styles from './styles';
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
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {WIDTH} from '../../../config';
import R from '../../../assets/R';
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
  const data = props?.data;
  console.log('🚀 ~ file: index.tsx:57 ~ TimKiem ~ data:', data);
  return (
    <View style={{flex: 1}}>
      <HeaderBase title="Tìm Kiếm" />
      <SearchBar />
      <FlatList
        data={
          data?.filter(item => {
            return item?.title?.contains('');
          }) ??
          data ??
          []
        }
        renderItem={({item, index}) => {
          return <></>;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default TimKiem;
