import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../api/constants";
import SvgArrowRight from "./icons/Svg.ArrowRight";

interface IProps {
  onPress: () => void;
  text: string;
  iconSize?: number;
  showArrow?: boolean;
  tagline?: string;
}

const TouchLineItemApp: React.FC<IProps> = ({
  onPress,
  text,
  iconSize = 20,
  showArrow = true,
  tagline = null
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <View>
        <Text style={styles.text}>{text}</Text>
        {tagline && <Text style={styles.tagline}>{tagline}</Text>}
      </View>
      {showArrow && (
        <View style={styles.arrow}>
          <SvgArrowRight size={iconSize} />
        </View>
      )}
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
  tagline: {
    color: colors.moreSectionText,
    fontFamily: fonts.regular,
    fontSize: 12,
    marginTop: 4
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16
  },
  arrow: {
    justifyContent: "center"
  }
});

export default TouchLineItemApp;
