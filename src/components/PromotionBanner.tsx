import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import { gStyle, images } from "../api/constants";
import SvgCheck from "./icons/Svg.Check";
import SvgInfo from "./icons/Svg.Info";
import SvgPlus from "./icons/Svg.Plus";
import PromotionPlay from "./PromotionPlay";
import TouchTextIcon from "./TouchTextIcon";

const PromotionBanner: React.FC = () => {
  const [added, setAdded] = useState<boolean>(false);

  // todo:

  const myListPress = () => {
    setAdded(!added);
  };

  const icon = added ? <SvgCheck /> : <SvgPlus />;

  return (
    <ImageBackground
      imageStyle={{ resizeMode: "contain" }}
      source={images.bannerBander}
      style={styles.imageBackground}>
      <View style={styles.containerContent}>
        <Image source={images.logoBander} style={styles.image} />

        <View style={gStyle.flexRowSpace as ViewStyle}>
          <TouchTextIcon icon={icon} onPress={myListPress} text="My List" />
          <PromotionPlay onPress={() => console.log("play modal TODO")} />
          <TouchTextIcon
            icon={<SvgInfo />}
            onPress={() => console.log("info modal TODO")}
            text="Info"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 480
  },
  containerContent: {
    bottom: 24,
    position: "absolute",
    width: "100%",
    zIndex: 1
  },
  image: {
    alignSelf: "center",
    height: 69,
    marginBottom: 24,
    width: 291
  }
});

export default PromotionBanner;
