import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, fonts } from "../api/constants";

interface IProps {
  icon: ReactElement;
  onPress: () => void;
  text: string;
  iconSize?: number;
  width?: number | string;
}

const TouchTextIcon: React.FC<IProps> = ({
  icon,
  onPress,
  text,
  iconSize = 20,
  width = 280
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { width }]}>
      <View style={styles.icon}>
        {React.cloneElement(icon, { size: iconSize })}
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: colors.infoGrey,
    fontFamily: fonts.light,
    marginTop: 2
  },
  icon: {
    justifyContent: "center"
  }
});

export default TouchTextIcon;
