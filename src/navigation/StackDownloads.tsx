import React from "react";
import { createStackNavigator } from "react-navigation";
import SvgDownloads from "../components/icons/Svg.Downloads";
import DownloadsScreen from "../screens/Downloads";
import navigationOptions from "./defaultOptions";

// todo:

const Icon = ({ focused }: { focused: boolean }) => (
  <SvgDownloads active={focused} />
);

export default createStackNavigator(
  {
    DownloadsMain: {
      screen: DownloadsScreen,
      navigationOptions
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "Downloads",
      tabBarIcon: Icon
    }
  }
);

// example of navigation state manipulation
// StackDownloads.navigationOptions = ({ navigation }) => {
//   const { index } = navigation.state;
//
//   return {
//     tabBarLabel: 'Downloads',
//     tabBarIcon: Icon
//   };
// };
