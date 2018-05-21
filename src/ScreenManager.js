import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Beranda from './home';
import Sidebar from './Sidebar';
import Login from './view/Login.js';
import Signup from './view/Signup.js';
import Demo from './demo.js';


const Screens = DrawerNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Beranda: {
    screen: Beranda
  },
  Demo: {
    screen: Demo
  },
},
  // {
  //   initialRouteName: 'Demo',
  // },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);

export default Screens;
