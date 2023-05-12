import {StyleSheet, Platform} from 'react-native';
import {WIDTH, HEIGHT, getWidth, getFont, getLineHeight} from '../../config';
import R from '../../assets/R';

const styles = StyleSheet.create({
  image: {
    width: WIDTH(90),
    // backgroundColor: R.colors.amber100,
    height: HEIGHT(120),
  },
  badge: {
    position: 'absolute',
    top: -HEIGHT(5),
    transform: [{translateX: 10}],
  },
  badgeValue: {
    color: R.colors.white,
    fontFamily: R.fonts.Roboto,
    fontSize: getFont(13),
    lineHeight: getLineHeight(18),
  },

  container: {flex: 1},
  containerFlatList: {
    // justifyContent: "space-between",
    height: HEIGHT(70),
    // minHeight: HEIGHT(88),
    width: getWidth(),
  },
  containerTab: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    elevation: 10,
    justifyContent: 'center',
    marginBottom: Platform.OS === 'android' ? HEIGHT(10) : HEIGHT(22),
    width: getWidth() / 4,
    zIndex: 15,
  },
  diemDanh: {
    backgroundColor: R.colors.white,
    borderRadius: WIDTH(40),
    bottom: HEIGHT(28),
    width: WIDTH(60),
    height: WIDTH(60),
    // marginBottom: HEIGHT(30),
    // elevation: 10,
    position: 'absolute',
    // zIndex: 10,
    ...R.themes.shadowGray,
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconDiemDanh: {
    width: WIDTH(50),
  },
  tab: {
    width: WIDTH(50),
  },
  tabContainer: {
    backgroundColor: R.colors.white,
    elevation: 1,
  },
  tabbar: {
    backgroundColor: R.colors.white,
    // flexGrow: 0,
    height: HEIGHT(70),
    // overflow: "visible",
    shadowColor: R.colors.colorRgba63103162,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.6,
    shadowRadius: WIDTH(16),
    width: getWidth(),
    // position: "relative",
  },
  title: {
    fontFamily: R.fonts.Roboto,
    fontSize: getFont(13),
    fontWeight: 'bold',
    lineHeight: getLineHeight(18),
    marginTop: HEIGHT(5),
  },
});

export default styles;
