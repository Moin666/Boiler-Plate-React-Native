import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import Signup from '../screens/singup';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

function AppRouter(props) {
  return (
    // <Tab.Navigator>
    //     <Tab.Screen name="login" component={Login} />
    //      <Tab.Screen name="signup" component={Signup} />
    //  </Tab.Navigator>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

    //   <Drawer.Navigator>
    //         <Drawer.Screen name="login" component={Login} />
    //         <Drawer.Screen name="signup" component={Signup} />
    //   </Drawer.Navigator>
  );
}

export default AppRouter;

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function AppRouter() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
