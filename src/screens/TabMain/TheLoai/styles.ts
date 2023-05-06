import {StyleSheet, Platform} from 'react-native';
import {WIDTH, HEIGHT, getWidth, getFont, getLineHeight} from '../../../config';
import R from '../../../assets/R';

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    width: WIDTH(171),
    backgroundColor: R.colors.white100,
    height: WIDTH(171),
    margin: WIDTH(8),
    borderRadius: WIDTH(8),
  },
});

export default styles;
