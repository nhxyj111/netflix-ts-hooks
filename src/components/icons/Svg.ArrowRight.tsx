import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../api/colors";

interface IProps {
  active?: boolean;
  size?: number;
}

const SvgArrowRight: React.FC<IProps> = ({ active = true, size = 24 }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M15.7 11.3l-6-6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l6-6c.4-.4.4-1 0-1.4z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

export default SvgArrowRight;
