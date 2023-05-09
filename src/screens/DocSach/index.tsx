import React from 'react';
import {View, StyleSheet, Linking, Alert} from 'react-native';
import Pdf from 'react-native-pdf';
import HeaderBase from '../../component/Header/HeaderBase';

// import config
import {getWidth} from '../../config';

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
  const sourcePDF = props.route.params?.sourcePDF;
  const title = props.route.params?.title;
  console.log('🚀 ~ file: index.tsx:22 ~ DocSach ~ sourcePDF:', sourcePDF);
  const source = sourcePDF.replace('http://localhost', 'http://192.168.1.7');
  console.log('🚀 ~ file: index.tsx:24 ~ DocSach ~ source:', source);
  return (
    <View style={styles.container}>
      <HeaderBase
        title={title}
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <View style={styles.cntPDF} testID="SeePDF">
        <Pdf
          trustAllCerts={false}
          source={{
            uri: source,
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
            Alert.alert('Thông báo', 'Có lỗi sảy ra vui lòng thử lại sau');
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />
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
