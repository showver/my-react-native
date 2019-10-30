import React from 'react';
import {Image} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './src/pages/HomePage';
import DiagnoseScreen from './src/pages/DiagnosePage';
import CommunityScreen from './src/pages/CommunityPage';
import MyScreen from './src/pages/MyPage';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? require('./src/assets/images/home-sele.png')
            : require('./src/assets/images/home.png');
          return <Image style={{height: 28, width: 28}} source={image} />;
        },
      }),
    },
    Setting: {
      screen: DiagnoseScreen,
      navigationOptions: {
        tabBarLabel: '诊断',
        // 配置Icon图标有两种方式，（1）使用图片，我觉得简单（2）使用图标库
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? require('./src/assets/images/diagnose-sele.png')
            : require('./src/assets/images/diagnose.png');
          return <Image style={{height: 28, width: 28}} source={image} />;
        },
      },
    },
    Xin: {
      screen: CommunityScreen,
      navigationOptions: {
        tabBarLabel: '社区',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? require('./src/assets/images/community-sele.png')
            : require('./src/assets/images/community.png');
          return <Image style={{height: 28, width: 28}} source={image} />;
        },
      },
    },
    Malai: {
      screen: MyScreen,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let image = focused
            ? require('./src/assets/images/my-sele.png')
            : require('./src/assets/images/my.png');
          return <Image style={{height: 28, width: 28}} source={image} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true, // 是否显示选项卡的图标
      activeTintColor: 'green', // 选中时状态颜色
      inactiveTintColor: 'gray', // 未选中状态颜色
      labelStyle: {
        // 选项卡标签的样式对象
        fontSize: 12,
      },
      style: {
        // 选项卡栏的样式对象
        backgroundColor: 'white',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
