import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../api/constants";
import SvgPlay from "./icons/Svg.Play";

interface IProps {
  onPress: () => void;
  icon?: ReactElement; // todo:
  text?: string;
}

const PromotionPlay: React.FC<IProps> = ({
  icon = <SvgPlay />,
  text = "Play",
  onPress
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.icon}>
        {React.cloneElement(icon, { fill: colors.black })}
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 8
  },
  text: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 18
  },
  icon: {
    justifyContent: "center"
  }
});

export default PromotionPlay;
