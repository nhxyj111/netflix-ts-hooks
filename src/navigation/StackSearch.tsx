import PropTypes from "prop-types";
import React from "react";
import { createStackNavigator } from "react-navigation";
import SvgSearch from "../components/icons/Svg.Search";
import SearchScreen from "../screens/Search";
import navigationOptions from "./defaultOptions";

// todo:

const Icon = ({ focused }: any) => <SvgSearch active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

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
