import React from "react";
import { createStackNavigator } from "react-navigation";
import SvgSearch from "../components/icons/Svg.Search";
import SearchScreen from "../screens/Search";
import navigationOptions from "./defaultOptions";

// todo:

const Icon = ({ focused }: { focused: boolean }) => (
  <SvgSearch active={focused} />
);

export default createStackNavigator(
  {
    SearchMain: {
      screen: SearchScreen,
      navigationOptions
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "Search",
      tabBarIcon: Icon
    }
  }
);
