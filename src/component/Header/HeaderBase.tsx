import React, {FunctionComponent, ReactChild} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// config
import R from '../../assets/R';
import {getFont, getLineHeight, HEIGHT, WIDTH} from '../../config';

// navigation

import MyStatusBar from '../View/MyStatusBar';

type Props = {
  title: string;
  imageVisibility?: boolean;
  customStyleHeader?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disableBack?: boolean;
  hasButton?: boolean;
  rightButton?: ReactChild;
  onPressRightButton?: () => void;
  childrenLeft?: any;
};

const HeaderBase: FunctionComponent<Props> = (props: Props) => {
  const {
    title,
    imageVisibility,
    customStyleHeader,
    onPress,
    disableBack = true,
    hasButton,
    rightButton,
    onPressRightButton,
    childrenLeft,
  } = props;
  return (
    <>
      <MyStatusBar />
      <View style={[styles.container, customStyleHeader]}>
        {childrenLeft ? (
          childrenLeft
        ) : (
          <ContentView
            disableBack={disableBack}
            title={title}
            onPress={onPress}
          />
        )}

        <ViewRight
          imageVisibility={imageVisibility}
          hasButton={hasButton}
          onPressRightButton={onPressRightButton}
          rightButton={rightButton}
        />
      </View>
    </>
  );
};

const ViewRight = ({
  hasButton,
  imageVisibility,
  onPressRightButton,
  rightButton,
}: any) => {
  if (hasButton) {
    return (
      <TouchableOpacity
        style={styles.btnView}
        activeOpacity={0.6}
        onPress={onPressRightButton && onPressRightButton}>
        {rightButton}
      </TouchableOpacity>
    );
  } else return <></>;
};

const ContentView = ({
  disableBack,
  title,
  onPress,
}: {
  disableBack: boolean;
  title: string;
  onPress?: () => void;
}) => {
  if (!disableBack) {
    return (
      <View style={styles.viewLeft}>
        <TouchableOpacity
          activeOpacity={0.6}
          hitSlop={styles.hit}
          onPress={() => (onPress ? onPress() : null)}>
          <MaterialIcons
            name="chevron-left"
            size={WIDTH(28)}
            color={R.colors.white}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  } else return <Text style={styles.titleMain}>{title}</Text>;
};

export default HeaderBase;

const styles = StyleSheet.create({
  btnView: {
    alignItems: 'center',
    backgroundColor: R.colors.primaryColor,
    borderRadius: WIDTH(30),
    height: WIDTH(30),
    justifyContent: 'center',
    width: WIDTH(30),
  },
  container: {
    alignItems: 'center',
    backgroundColor: R.colors.primaryColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: WIDTH(5),
    paddingRight: WIDTH(14),
    paddingVertical: HEIGHT(10),
    // height: HEIGHT(40),
  },
  hit: {
    bottom: 25,
    left: 25,
    right: 25,
    top: 25,
  },
  logo: {
    height: HEIGHT(40),
    width: WIDTH(120),
  },
  title: {
    color: R.colors.white,
    fontFamily: R.fonts.RobotoMedium,
    fontSize: getFont(17),
    lineHeight: getLineHeight(28),
  },
  titleMain: {
    color: R.colors.white,
    fontFamily: R.fonts.RobotoMedium,
    fontSize: getFont(24),
    lineHeight: getLineHeight(32),
    marginLeft: WIDTH(12),
  },
  viewLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
});
