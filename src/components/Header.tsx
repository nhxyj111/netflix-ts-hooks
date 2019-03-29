import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { colors, device, fonts, images } from "../api/constants";
import SvgArrowLeft from "./icons/Svg.ArrowLeft";

interface IProps extends NavigationInjectedProps {
  bg?: number | string;
  close?: boolean;
  closeText?: string;
  showBack?: boolean;
  showLogo?: boolean;
  title?: string | null;
}

const Header: React.FC<IProps> = ({
  navigation,
  bg = colors.black,
  close = false,
  closeText = "Cancel",
  showBack = false,
  showLogo = false,
  title = null
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bg }] as ViewStyle}>
      {showBack && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack(null)}
          style={styles.back}>
          <SvgArrowLeft />
        </TouchableOpacity>
      )}

      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {showLogo && (
        <React.Fragment>
          <View style={{ flex: 1 }} />
          <View style={styles.containerLogoFull}>
            <Image source={images.netflixFull} style={styles.logoFull} />
          </View>
        </React.Fragment>
      )}

      {showBack && !close && <View style={{ flex: 1 }} />}

      {close && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack(null)}
          style={styles.close}>
          <Text style={styles.closeText}>{closeText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30
  },
  back: {
    alignSelf: "center",
    flex: 1
  },
  containerTitle: {
    flex: 4,
    height: 35,
    justifyContent: "flex-end"
  },
  title: {
    color: colors.heading,
    fontSize: 18,
    paddingBottom: 4,
    textAlign: "center"
  },
  containerLogoFull: {
    alignItems: "center",
    flex: 2,
    height: 35,
    justifyContent: "center"
  },
  logoFull: {
    height: 26,
    width: 95
  },
  close: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "center",
    height: 35
  },
  closeText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  }
});

export default Header;