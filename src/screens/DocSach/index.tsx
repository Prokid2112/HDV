import React, {useState} from 'react';
import {StyleSheet, Linking} from 'react-native';
import Pdf from 'react-native-pdf';
import HeaderBase from '../../component/Header/HeaderBase';
import {View, Text} from 'native-base';
// import config
import {HEIGHT, getWidth} from '../../config';
import R from '../../assets/R';
// import common

type Props = {
  route: {
    params: {
      sourcePDF: string;
    };
  };
  navigation: any;
};

const DocSach = (props: any) => {
  console.log('🚀 ~ file: index.tsx:21 ~ DocSach ~ props:', props);
  const sourcePDF = props.route.params?.sourcePDF;
  console.log('🚀 ~ file: index.tsx:22 ~ DocSach ~ sourcePDF:', sourcePDF);
  const [page, setpage] = useState(0);
  const [numberOfPages, setnumberOfPages] = useState(0);
  return (
    <View style={styles.container}>
      <HeaderBase
        title="Sách A"
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <View
        alignSelf={'center'}
        alignItems={'center'}
        // paddingBottom={HEIGHT(16)}
        backgroundColor={R.colors.primaryColor}>
        <Text color="white" mb={HEIGHT(16)} bold>
          Trang{page}/{numberOfPages}
        </Text>
        <View style={styles.cntPDF} testID="SeePDF">
          <Pdf
            trustAllCerts={false}
            source={{
              uri: sourcePDF,
              cache: true,
            }}
            onLoadComplete={(numberOfPages, filePath) => {
              console.log(`Number of page: ${numberOfPages}`);
              setnumberOfPages(numberOfPages);
            }}
            onPageChanged={(page, numberOfPages) => {
              console.log(`Current page: ${page}`);
              setpage(page);
            }}
            onError={error => {
              console.log(error);
            }}
            onPressLink={uri => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}
          />
        </View>
      </View>
    </View>
  );
};

export default DocSach;
const styles = StyleSheet.create({
  cntPDF: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: getWidth(),
  },
});
