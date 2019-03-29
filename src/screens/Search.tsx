import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { gStyle } from "../api/constants";
import Cast from "../components/Cast";
import HeaderSearch from "../components/HeaderSearch";

const Search: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <React.Fragment>
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <View style={gStyle.container}>
          <HeaderSearch />
        </View>
      </TouchableWithoutFeedback>

      <Cast navigation={navigation} />
    </React.Fragment>
  );
};

export default Search;
