import React from "react";
import { createStackNavigator } from "react-navigation";
import SvgMenu from "../components/icons/Svg.Menu";
import MoreScreen from "../screens/More";
import MoreAppSettingsScreen from "../screens/MoreAppSettings";
import MoreMyListScreen from "../screens/MoreMyList";
import MoreNotificationsScreen from "../screens/MoreNotifications";
import navigationOptions from "./defaultOptions";

// todo:

const Icon = ({ focused }: { focused: boolean }) => (
  <SvgMenu active={focused} />
);

export default createStackNavigator(
  {
    MoreMain: {
      screen: MoreScreen,
      navigationOptions
    },
    MoreAppSettingsScreen,
    MoreNotificationsScreen,
    MoreMyListScreen
  },
  {
    initialRouteName: "MoreMain",
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "More",
      tabBarIcon: Icon
    }
  }
);
