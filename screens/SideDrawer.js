import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function SideDrawerScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

SideDrawerScreen.navigationOptions = {
  title: 'Profile',
};
