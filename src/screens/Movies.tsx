import React from "react";
import { Text, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { gStyle } from "../api/constants";
import Cast from "../components/Cast";
import HeaderHome from "../components/HeaderHome";

const Movies: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} show />

      <View style={gStyle.spacer96} />

      <View style={gStyle.pH4}>
        <Text style={gStyle.heading}>Movies</Text>
      </View>

      <Cast navigation={navigation} />
    </View>
  );
};

export default Movies;
