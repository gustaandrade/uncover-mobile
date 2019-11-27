import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Interests from './pages/Interests';
import Home from './pages/Home';
import CompanyDetail from './pages/CompanyDetail';
import Visits from './pages/Visits';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createSwitchNavigator({
    Interests,
    BottomTabNavigator: createBottomTabNavigator(
      {
        Home: {
          screen: createStackNavigator(
            {
              Home,
              CompanyDetail,
            },
            {
              defaultNavigationOptions: {
                header: null,
              },
            },
          ),
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon name="home" size={24} color={tintColor}></Icon>
            ),
          },
        },
        Visits: {
          screen: Visits,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon name="local-activity" size={24} color={tintColor}></Icon>
            ),
          },
        },
        Profile: {
          screen: Profile,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon name="person" size={24} color={tintColor}></Icon>
            ),
          },
        },
      },
      {
        tabBarOptions: {
          showIcon: true,
          activeTintColor: '#333333',
          inactiveTintColor: '#C9C9C9',
          showLabel: false,
        },
      },
    ),
  }),
);

export default Routes;
