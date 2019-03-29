import { ScreenOrientation } from "expo";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { gStyle } from "../api/constants";

const ModalVideo: React.FC = () => {
  useEffect(() => {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
    return () => {
      ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
    };
  }, []);

  return (
    <View style={gStyle.container}>
      <Text style={gStyle.heading}>Modal :: Video</Text>
    </View>
  );
};

export default ModalVideo;
