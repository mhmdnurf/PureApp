import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './src/screens/Dashboard';
import Pengajuan from './src/screens/Pengajuan';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: '#159895',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({color, size}) => (
              <Icon name="apps" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pengajuan"
          component={Pengajuan}
          options={{
            tabBarLabel: 'Pengajuan',
            tabBarIcon: ({color, size}) => (
              <Icon name="file-document" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Icon name="account-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
