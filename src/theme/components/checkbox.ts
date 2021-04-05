import { mode, getColorScheme } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { isInvalid } = props;
  const simplifiedColorScheme = getColorScheme(props);
  const activeColor = mode(
    `${simplifiedColorScheme}.600`,
    `${simplifiedColorScheme}.200`
  )(props);
  return {
    activeColor,
    borderColor: isInvalid
      ? mode(`danger.600`, `danger.200`)(props)
      : mode(`muted.300`, `muted.600`)(props),
    iconColor: mode(`gray.50`, `gray.800`)(props), // matching background color.
  };
};

const sizes = {
  lg: { size: 6 },
  md: { size: 5 },
  sm: { size: 4 },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
