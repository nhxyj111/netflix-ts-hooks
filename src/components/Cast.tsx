import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { colors } from "../api/constants";
import SvgCast from "./icons/Svg.Cast";

const Cast: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate("ModalCastConnect")}
      style={styles.container}>
      <SvgCast />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.castGrey,
    borderRadius: 26,
    bottom: 16,
    height: 52,
    justifyContent: "center",
    position: "absolute",
    right: 16,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    width: 52
  }
});

export default Cast;
