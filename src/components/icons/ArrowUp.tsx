import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

type props = {
  size?: number;
};

export const ArrowUp: FC<props> = ({ size = 24 }) => {
  return (
    <Svg width={size} height={size} fillRule="evenodd" clipRule="evenodd">
      <Path d="M23.245 20 12 5.626.781 20 0 19.381 12 4l12 15.391-.755.609z" />
    </Svg>
  );
};
