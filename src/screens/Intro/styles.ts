import {StyleSheet} from 'react-native';

// import config
import {getFont, HEIGHT, WIDTH} from '../../config';
import R from '../../assets/R';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: R.colors.backGray,
    flex: 1,
  },
  image: {
    height: WIDTH(200),
    width: WIDTH(200),
  },
  label: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HEIGHT(30),
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HEIGHT(250),
  },
  textLabel: {
    color: R.colors.primaryColor,
    fontFamily: R.fonts.RobotoRegular,
    fontSize: getFont(20),
    fontWeight: 'bold',
  },
});
export default styles;
