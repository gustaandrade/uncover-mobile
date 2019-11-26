import React from 'react';

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
    BottomTabNavigator: createBottomTabNavigator({
      Home: createStackNavigator(
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
      Visits,
      Profile,
    }),
  }),
);

export default Routes;
