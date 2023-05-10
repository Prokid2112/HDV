import React, {useState, useRef, useEffect} from 'react';
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
import Home from './Home';
import TaiKhoan from './TaiKhoan';
import TimKiem from './TimKiem';
import axios from 'axios';
const routesMain = [
  {key: 0, title: 'Home'},
  // {key: 1, title: 'Tìm kiếm'},
  // {key: 2, title: 'Bookmark'},
  {key: 3, title: 'Tài khoản'},
];
const fakedata = {
  page: 1,
  limit: 4,
  total: 3,
  data: [
    {
      id: 1,
      title: 'Devops-basic',
      description: 'Sách về devops',
      path: 'http://localhost:8081/media/TuanHoang/1.pdf',
      created_at: '2023-05-02T04:04:31.000+00:00',
      author: 'Tuấn Hoàng',
      category: 'IT',
    },
    {
      id: 2,
      title: 'Devops-basic',
      description: 'Sách về devops',
      path: 'http://localhost:8081/media/TuanHoang/2.pdf',
      created_at: '2023-05-02T04:07:14.000+00:00',
      author: 'Tuấn Hoàng',
      category: 'IT',
    },
    {
      id: 3,
      title: 'WSDL-basic',
      description: 'Sách về WSDL',
      path: 'http://localhost:8081/media/TuanHoang/3.pdf',
      created_at: '2023-05-02T04:07:14.000+00:00',
      author: 'Tuấn Hoàng',
      category: 'IT',
    },
  ],
};
const TabMain = (props: any) => {
  console.log('🚀 ~ file: index.tsx:61 ~ TabMain ~ props:', props);
  const user = props;
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);
  const routes = useRef(routesMain);
  const renderScene = ({route}: {route: {key: number}}) => {
    switch (route.key) {
      case 0:
        return <Home {...props} data={data} />;
      // case 1:
      //   return <TimKiem {...props} data={data} />;
      case 3:
        return <TaiKhoan {...props} />;
      default:
        return <></>;
    }
  };
  const getBooks = async () => {
    try {
      await axios
        .get(
          `http:/192.168.69.50:8082/api/users/${1}/mangas?page=1&limit=100`,

          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          console.log(
            '🚀 ~ file: index.tsx:28 ~ onLogin ~ response:',
            response,
          );
          setData(response?.data?.data ?? []);
          // axios.defaults.headers.common.Authorization = `Bearer ${response?.data?.token}`;
          // props?.navigation?.replace('TabMain', {userData: response?.data});
        });
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:97 ~ getBooks ~ error:', error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

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
