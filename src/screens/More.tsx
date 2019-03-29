import { Constants } from "expo";
import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { colors, fonts, gStyle } from "../api/constants";
import Cast from "../components/Cast";
import HeaderAccounts from "../components/HeaderAccounts";
import SvgBell from "../components/icons/Svg.Bell";
import SvgCheck from "../components/icons/Svg.Check";
import TouchLineItem from "../components/TouchLineItem";

// full :: https://help.netflix.com/legal/privacy?headless=true&locale=en-US
const privacyUrl = "https://help.netflix.com/legal/privacy?headless=true";

const alertSignOut = () => {
  Alert.alert(
    "Sign Out",
    "Are you sure that you want to sign out?",
    [
      { onPress: () => console.log("no"), text: "No" },
      { onPress: () => console.log("yes"), text: "Yes" }
    ],
    { cancelable: false }
  );
};

const More: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <View style={gStyle.container}>
      <HeaderAccounts navigation={navigation} />

      <ScrollView>
        <TouchLineItem
          icon={<SvgBell />}
          onPress={() => navigation.navigate("MoreNotificationsScreen")}
          showBorder
          text="Notifications"
        />
        <TouchLineItem
          icon={<SvgCheck />}
          onPress={() => navigation.navigate("MoreMyListScreen")}
          showBorder
          text="My List"
        />
        <TouchLineItem
          onPress={() => navigation.navigate("MoreAppSettingsScreen")}
          showArrow={false}
          showBorder
          text="App Settings"
        />
        <TouchLineItem
          onPress={() => {
            navigation.navigate("ModalWebView", { url: privacyUrl });
          }}
          showArrow={false}
          text="Privacy"
        />
        <TouchLineItem
          onPress={() => console.log("Help")}
          showArrow={false}
          text="Help"
        />
        <TouchLineItem
          onPress={() => alertSignOut()}
          showArrow={false}
          text="Sign Out"
        />
        <Text style={styles.versionText}>
          {`Version: ${Constants.manifest.version}`}
        </Text>
      </ScrollView>

      <Cast navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  versionText: {
    color: colors.moreVersionText,
    fontFamily: fonts.regular,
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 16
  }
});

export default More;
