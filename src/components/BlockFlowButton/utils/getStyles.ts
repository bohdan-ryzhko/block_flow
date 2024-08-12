import { colors } from '../../../consts';
import { styles } from '../style';

export type Variant = 'primary' | 'secondary';

export const getStylesButton = (variant: Variant) => {
  const stylesMap: { [key in Variant]: object } = {
    primary: styles.primary,
    secondary: styles.secondary,
  };

  return stylesMap[variant];
};

export const getStylesText = (variant: Variant) => {
  const stylesMap: { [key in Variant]: object } = {
    primary: styles.primaryText,
    secondary: styles.secondaryText,
  };

  return stylesMap[variant];
};

export const getColorLoader = (variant: Variant) => {
  const stylesMap: { [key in Variant]: string } = {
    primary: colors.white,
    secondary: colors.black,
  };

  return stylesMap[variant];
};
