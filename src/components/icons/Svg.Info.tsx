import React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../../api/colors";

interface IProps {
  active?: boolean;
  size?: number;
  fill?: number | string | null;
}

const SvgInfo: React.FC<IProps> = ({
  active = true,
  fill = null,
  size = 24
}) => {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? colors.white : colors.inactiveGrey;
  }

  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
        fill={fillColor}
      />
      <Path
        d="M12 11c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1zM11.3 7.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3s.5-.1.7-.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.4-.4-1-.4-1.4 0z"
        fill={fillColor}
      />
    </Svg>
  );
};

export default SvgInfo;
