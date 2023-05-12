import {Image, StatusBar, View, Text} from 'react-native';
import * as React from 'react';
import * as Animatable from 'react-native-animatable';

// import config
import R from '../../assets/R';

// style
import styles from './styles';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type Props = {
  navigation: any;
  route: {
    params: {
      isExpired: boolean;
    };
  };
};

const Intro = (props: any) => {
  const timeOut = React.useRef<any>(null);
  const user: any = auth().currentUser;
  React.useEffect(() => {
    changeScreen('Login');
  }, []);

  const changeScreen = (routeName: string, param = {}) => {
    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      // if()
      if (user == null) {
        props?.navigation.replace('Login');
      } else {
        props?.navigation.replace('TabMain');
      }
    }, 1600);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        hidden
        backgroundColor={R.colors.white100}
        barStyle="light-content"
      />
      <Animatable.View
        animation="bounceIn"
        direction="alternate"
        duration={4000}
        style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          source={R.images.introImage}
          style={styles.image}
        />
      </Animatable.View>
      <Animatable.View
        animation="bounceInLeft"
        direction="alternate"
        duration={3500}
        style={styles.label}>
        <Text style={styles.textLabel}>My novels</Text>
      </Animatable.View>
    </View>
  );
};

export default Intro;
