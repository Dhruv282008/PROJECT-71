import React from 'react';
import {Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from './screens/ReadStory'
import WriteStory from './screens/WriteStory'

export default function App() {
  return (
    <AppContainer/>
  );
}
const AppTabNavigator = createBottomTabNavigator({
  ReadStory : {
    screen: ReadStory,
    navigationOptions :{
      tabBarIcon : <Image source={require("./assets/read.png")} style={{width:35, height:35}}/>,
      tabBarLabel : "Read A Story",
    }
  },
  Write: {
    screen: WriteStory,
    navigationOptions :{
      tabBarIcon : <Image source={require("./assets/write.png")} style={{width:35, height:35}}/>,
      tabBarLabel : "Write A Story",
    }
  }
});



const AppContainer = createAppContainer(AppTabNavigator)