import React from "react";
import { View, WebView } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { gStyle } from "../api/constants";
import Header from "../components/Header";

const ModalWebView: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <View style={gStyle.container}>
      <Header close closeText="Close" navigation={navigation} showLogo />

      <WebView
        bounces={false}
        javaScriptEnabled
        scalesPageToFit
        source={{ uri: navigation.getParam("url", "https://netflix.com") }}
        startInLoadingState
      />
    </View>
  );
};

export default ModalWebView;
