import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../api/colors";

interface IProps {
  active?: boolean;
  size?: number;
}

const SvgMenu: React.FC<IProps> = ({ active = true, size = 24 }) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M21 11H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zM3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM21 17H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

export default SvgMenu;
