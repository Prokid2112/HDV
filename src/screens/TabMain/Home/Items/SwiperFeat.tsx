import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-animatable';
import R from '../../../../assets/R';
import {HEIGHT, WIDTH, getWidth} from '../../../../config';
import Swiper from 'react-native-swiper';
const SwiperFeat = (props: any) => {
  const list = [1, 2, 3, 4, 5];
  return (
    // <TouchableOpacity
    //   style={styles.container}
    //   onPress={() => {
    //     props?.navigation.navigate('ChiTietSach');
    //   }}>
    //   <Image
    //     resizeMethod="auto"
    //     resizeMode="contain"
    //     source={R.images.bookCover}
    //     style={styles.image}
    //   />
    //   <Text style={styles.text} numberOfLines={2}>
    //     The place of Knowing
    //   </Text>
    // </TouchableOpacity>
    // <View style={{backgroundColor: R.colors.amber100}}>
    <View style={styles.swiper}>
      <Swiper
        paginationStyle={styles.wrapper}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        // autoplay
        height={240}
        showsButtons={false}
        // containerStyle={{height: 100}}
        // contentContainerStyle={{height: 100}}
        //   autoplayTimeout={2}
      >
        {list.map((item: any) => {
          return (
            <Image
              resizeMethod="auto"
              resizeMode="stretch"
              source={R.images.bookBanner}
              style={styles.image}
            />
          );
        })}
      </Swiper>
    </View>
  );
};
export default SwiperFeat;
const styles = StyleSheet.create({
  swiper: {
    width: getWidth(),
    justifyContent: 'center',
    height: HEIGHT(160),
  },
  container: {
    marginRight: WIDTH(20),
    marginTop: WIDTH(8),
  },
  image: {
    width: getWidth(),
    // backgroundColor: R.colors.amber100,
    height: HEIGHT(160),
  },
  text: {
    alignSelf: 'center',
    maxWidth: WIDTH(120),
    marginVertical: HEIGHT(12),
    color: R.colors.black0,
  },
  wrapper: {top: HEIGHT(140)},
  slide1: {
    // flex: 1,
    height: HEIGHT(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  dotStyle: {
    backgroundColor: R.colors.white,
    borderColor: R.colors.colorBFC9DD,
    borderWidth: WIDTH(1),
  },
  activeDotStyle: {
    backgroundColor: R.colors.white,
    borderColor: R.colors.primaryColor,
    borderWidth: WIDTH(1),
  },
});
