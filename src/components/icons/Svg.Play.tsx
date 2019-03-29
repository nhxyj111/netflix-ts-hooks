import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import colors from "../../api/colors";

interface IProps {
  active?: boolean;
  size?: number;
  fill?: number | string | null;
}

const SvgPlay: React.FC<IProps> = ({
  active = true,
  fill = null,
  size = 24
}) => {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? colors.white : colors.inactiveGrey;
  }

  return (
    <View style={{ paddingBottom: 3 }}>
      <Svg height={size} width={size} viewBox="0 0 590.74 460.5">
        <Path d="M.5.866l459 265.004L.5 530.874z" stroke={fillColor} />
      </Svg>
    </View>
  );
};

export default SvgPlay;
