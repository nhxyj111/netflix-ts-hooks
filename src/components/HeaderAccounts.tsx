import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { colors, device, fonts, images } from "../api/constants";
import SvgEdit from "./icons/Svg.Edit";
import SvgPlus from "./icons/Svg.Plus";

const HeaderAccounts: React.FC<NavigationInjectedProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAccounts}>
        <View style={styles.containerUser}>
          <Image source={images.robot} style={styles.avatar} />
          <Text style={[styles.username, styles.usernameActive]}>Caleb</Text>
        </View>
        <View style={styles.containerUser}>
          <Image source={images.penguin} style={styles.avatar} />
          <Text style={styles.username}>Kim</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("ModalAddProfile")}
          style={styles.containerUser}>
          <View style={styles.containerPlus}>
            <SvgPlus active={false} size={40} />
          </View>
          <Text style={styles.username}>Add Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("ModalManageProfiles")}
        style={styles.containerManage}>
        <SvgEdit active={false} size={18} />
        <Text style={styles.manageText}>Manage Profiles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.black,
    width: "100%"
  },
  containerAccounts: {
    alignItems: "center",
    backgroundColor: colors.black,
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
    paddingTop: device.iPhoneX ? 64 : 40,
    width: "100%"
  },
  containerUser: {
    alignItems: "center",
    marginHorizontal: 10
  },
  avatar: {
    height: 64,
    marginBottom: 6,
    resizeMode: "contain",
    width: 64
  },
  username: {
    color: colors.inactiveGrey,
    fontSize: 12,
    fontFamily: fonts.medium
  },
  usernameActive: {
    color: colors.white,
    fontFamily: fonts.bold
  },
  containerPlus: {
    alignItems: "center",
    backgroundColor: colors.moreAddProfileBg,
    borderRadius: 32,
    height: 64,
    justifyContent: "center",
    marginBottom: 4,
    width: 64
  },
  containerManage: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 24
  },
  manageText: {
    color: colors.inactiveGrey,
    fontFamily: fonts.medium,
    marginLeft: 4
  }
});

export default HeaderAccounts;
