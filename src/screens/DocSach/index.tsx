import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';
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

  return (
    <View style={styles.container}>
      <HeaderBase
        title="Sách A"
        disableBack={false}
        onPress={() => {
          props.navigation?.goBack();
        }}
      />
      <View style={styles.cntPDF} testID="SeePDF">
        <Pdf
          trustAllCerts={false}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/btl-thietbididong.appspot.com/o/file-sample_150kB.pdf?alt=media&token=678a1dee-181e-45ad-9600-942d4e90f057',
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of page: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
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
