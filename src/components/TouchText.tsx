import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { colors, fonts } from "../api/constants";

interface IProps {
  onPress: () => void;
  text: string;
  textStyle?: object; // todo:
}

const TouchText: React.FC<IProps> = ({ onPress, text, textStyle = {} }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container as ViewStyle}>
      <Text style={[styles.text, textStyle] as ViewStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "left"
  },
  text: {
    color: colors.white,
    fontFamily: fonts.medium
  }
});

export default TouchText;
