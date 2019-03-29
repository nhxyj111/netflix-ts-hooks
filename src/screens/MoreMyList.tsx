import React from "react";
import { View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { colors, gStyle } from "../api/constants";
import Header from "../components/Header";

const MoreMyList: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <View style={gStyle.container}>
      <Header
        bg={colors.headerBarBg}
        navigation={navigation}
        showBack
        title="My List"
      />
    </View>
  );
};

export default MoreMyList;
