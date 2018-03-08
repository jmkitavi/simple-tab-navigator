import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";

import HomeComponent from './components/HomeComponent'
import InfoComponent from './components/InfoComponent'
import SettingsComponent from './components/SettingsComponent'
import CloudComponent from './components/CloudComponent'

let routeConfigs = {
  Home: { screen: HomeComponent },
  Info: { screen: InfoComponent },
  Settings: { screen: SettingsComponent },
  Cloud: { screen: CloudComponent },
}

let tabConfigs = {
  ...TabNavigator.Presets.iOSBottomTabs, // make it look like iOS tab on Android
  tabBarPosition: 'bottom', // default top for Android, bottom for iOS
  animationaEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'blue', // it's also blue by default
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'lightgrey', // white by default
    },
    showLabel: true // default is true, use false other than failing to set Label
  },
  order: ['Home',  'Info', 'Settings', 'Cloud'] // default order is as in routeConfigs
}

const App = TabNavigator(routeConfigs, tabConfigs)

export default App
