import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from './src/screens/Intro';
import TabMain from './src/screens/TabMain';
import Login from './src/screens/Login';
import {NativeBaseProvider} from 'native-base';
import ChiTietSach from './src/screens/ChiTietSach';
import DocSach from './src/screens/DocSach';
import ThemSach from './src/screens/ThemSach';
import DanhSachSach from './src/screens/DanhSachSach';
import Signup from './src/screens/Login/SignIn';
import DoiThongTinCaNhan from './src/screens/DoiThongTinCaNhan';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Intro'}>
          <Stack.Screen name="TabMain" component={TabMain} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DocSach" component={DocSach} />
          <Stack.Screen name="ChiTietSach" component={ChiTietSach} />
          <Stack.Screen name="ThemSach" component={ThemSach} />
          <Stack.Screen name="DanhSachSach" component={DanhSachSach} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen
            name="DoiThongTinCaNhan"
            component={DoiThongTinCaNhan}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
