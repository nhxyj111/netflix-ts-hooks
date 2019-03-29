import PropTypes from "prop-types";
import React from "react";
import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import { gStyle } from "../api/constants";
import SvgHome from "../components/icons/Svg.Home";
import HomeScreen from "../screens/Home";
import MoviesScreen from "../screens/Movies";
import MyListScreen from "../screens/MyList";
import TvShowsScreen from "../screens/TvShows";

// todo:

const Icon = ({ focused }: any) => <SvgHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

const transitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

export default createStackNavigator(
  {
    HomeMain: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeTvShows: {
      screen: TvShowsScreen,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeMovies: {
      screen: MoviesScreen,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeMyList: {
      screen: MyListScreen,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: gStyle.navHeaderStyle
      }
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: Icon
    },
    transitionConfig
  }
);
