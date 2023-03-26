import React, {useState, useRef} from 'react';
import {TabView} from 'react-native-tab-view';
import {
  FlatList,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Text,
} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import R from '../../assets/R';
import {WIDTH} from '../../config';
const routesMain = [
  {key: 0, title: 'Home'},
  {key: 1, title: 'Tìm kiếm'},
  {key: 2, title: 'Bookmark'},
  {key: 3, title: 'Tài khoản'},
];
const TabMain = () => {
  const [index, setIndex] = useState(0);
  const routes = useRef(routesMain);
  const renderScene = ({route}: {route: {key: string}}) => {
    switch (route.key) {
      default:
        return <></>;
    }
  };
  const onChangeIndex = (currentIndex: number, key: number) => {
    if (index !== currentIndex) {
      LayoutAnimation.configureNext({
        duration: 500,
        create: {
          type: LayoutAnimation.Types.spring,
          property: LayoutAnimation.Properties.opacity,
          springDamping: 1.7,
        },
        update: {
          type: LayoutAnimation.Types.spring,
          springDamping: 1.7,
        },
      });

      setIndex(currentIndex);
    }
  };
  const renderTab = (
    item: {key: number; title: string},
    currentIndex: number,
  ) => {
    const colorContent =
      index === currentIndex ? R.colors.primaryColor : R.colors.colorBFC9DD;

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onChangeIndex(currentIndex, item?.key)}
        style={[styles.containerTab]}
        testID={`${currentIndex}_${item.title}`}>
        <ItemIcon titles={item.title} color={colorContent} />
        {/* <IconBadge visible={visible} amount={amountUnread} /> */}
        <Text style={[styles.title, {color: colorContent}]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const renderTabBar = () => {
    return (
      <View style={styles.tabContainer}>
        <FlatList
          horizontal
          keyExtractor={(item: {key: any}) => String(item.key)}
          bounces={false}
          data={routes.current}
          extraData={index}
          contentContainerStyle={styles.containerFlatList}
          renderItem={({item, index}) => renderTab(item, index)}
          style={styles.tabbar}
        />
      </View>
    );
  };
  return (
    <TabView
      lazy
      renderTabBar={renderTabBar}
      navigationState={{
        index,
        routes: routes.current,
      }}
      renderScene={renderScene}
      tabBarPosition="bottom"
      onIndexChange={(ind: number) => setIndex(ind)}
      swipeEnabled={false}
    />
  );
};
export default TabMain;
const ItemIcon = ({titles, color}: {titles: string; color: string}) => {
  let label;
  switch (titles) {
    case 'Home':
      return <Entypo name="home" size={WIDTH(20)} color={color} />;

    case 'Tìm kiếm':
      return <Ionicons name="search" size={WIDTH(20)} color={color} />;
    case 'Bookmark':
      return <MaterialIcons name="storage" size={WIDTH(20)} color={color} />;
    case 'Tài khoản':
      return (
        <MaterialIcons name="account-circle" size={WIDTH(20)} color={color} />
      );
    default:
      return <Entypo name="home" size={WIDTH(20)} color={color} />;
  }
};
