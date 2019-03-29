import React, { useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { colors, device, fonts } from "../api/constants";

const HeaderSearch: React.FC = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const cancelOpacity = useRef(new Animated.Value(0));
  const inputWidth = useRef(new Animated.Value(100));

  // todo: useCallback

  const onBlur = () => {
    setFocus(false);

    // if empty, go back to orignial state
    if (text === "") {
      Animated.timing(inputWidth.current, {
        duration: 300,
        toValue: 100
      }).start();
      Animated.timing(cancelOpacity.current, {
        duration: 300,
        toValue: 0
      }).start();
    }
  };

  const onCancel = async () => {
    Keyboard.dismiss();
    await setText("");
    onBlur();
  };

  const onFocus = () => {
    setFocus(true);
    Animated.timing(inputWidth.current, { duration: 300, toValue: 80 }).start();
    Animated.timing(cancelOpacity.current, {
      duration: 300,
      toValue: 1
    }).start();
  };

  // if there is focus or text in input, align left
  const inputOverride = focus || text ? { textAlign: "left" } : {};
  // convert to percentage
  const percentage = inputWidth.current.interpolate({
    inputRange: [80, 100],
    outputRange: ["80%", "100%"]
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containerInput, { width: percentage }]}>
        <TextInput
          autoCapitalize="none"
          autoFocus
          keyboardAppearance="dark"
          onBlur={onBlur}
          onChangeText={input => setText(input)}
          onFocus={onFocus}
          placeholder="Search"
          placeholderTextColor={colors.searchIcon}
          selectionColor={colors.brandPrimary}
          style={[styles.input, inputOverride] as ViewStyle}
          value={text}
        />
      </Animated.View>
      <Animated.View
        style={[styles.containerCancel, { opacity: cancelOpacity }]}>
        <TouchableOpacity activeOpacity={0.7} onPress={onCancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: "row",
    paddingBottom: 12,
    paddingHorizontal: 8,
    paddingTop: device.iPhoneX ? 54 : 30,
    width: "100%"
  },
  containerInput: {
    width: "80%"
  },
  input: {
    backgroundColor: colors.searchBarBg,
    borderRadius: 4,
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  containerCancel: {
    width: "20%"
  },
  cancel: {
    color: colors.heading,
    fontFamily: fonts.light,
    fontSize: 16,
    paddingVertical: 4,
    textAlign: "center"
  }
});

export default HeaderSearch;
