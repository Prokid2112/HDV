import {Dimensions, Alert} from 'react-native';
const {width, height} = Dimensions.get('window');
export const WIDTH = (w: number) => width * (w / 375);
export const HEIGHT = (h: number) => height * (h / 812);
export const getFont = (f: number) => f - 1;
export const getLineHeight = (f: number) => f;
export const getHeight = () => height;
export const getWidth = () => width;
export const popupOk = (title: string, msg: string, onPress: any = null) => {
  Alert.alert(
    title,
    msg,
    [{text: 'Ok', style: 'default', onPress: onPress || (() => null)}],
    {
      cancelable: false,
    },
  );
};
