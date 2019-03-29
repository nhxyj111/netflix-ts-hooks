import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../api/constants";

interface IProps {
  element: ReactElement;
  onPress: () => void;
  text: string;
}

const TouchLineItemElement: React.FC<IProps> = ({ element, onPress, text }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.element}>{React.cloneElement(element)}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16
  },
  element: {
    justifyContent: "center",
    marginRight: 4
  }
});

export default TouchLineItemElement;
