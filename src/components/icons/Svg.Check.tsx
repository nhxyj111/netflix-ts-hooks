import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../api/colors";

interface IProps {
  active?: boolean;
  size?: number;
}

const SvgCheck: React.FC<IProps> = ({ active = true, size = 24 }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M20.7 5.3c-.4-.4-1-.4-1.4 0L9 15.6l-4.3-4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5c.2.2.4.3.7.3s.5-.1.7-.3l11-11c.4-.4.4-1 0-1.4z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

export default SvgCheck;
