type Breakpoints = {
  xxs: string,
  xs: string,
  sm: string,
  md: string,
  lg: string,
}

const breakpoints: Breakpoints = {
  xxs: '23em',
  xs: '28.125em',
  sm: '48em',
  md: '64em',
  lg: '90em',
};

const responsive = {
  xxs: `(min-width: ${breakpoints.xxs})`,
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
};

const theme = {
  colors: {
    primary: '#914AD9',
    primaryDark: '#553498',
    primaryLight: '#AE64F9',
    primaryLighter: '#DAB5FF',
    secondary: '#A0D94A',
    secondaryDark: '#8AC039',
    secondaryLight: '#C7F87D',
    tertiary: '#D9834A',
    gray: '#B4B4B4',
    grayDark: '#808080',
    grayDarker: '#474747',
    grayLight: '#F1F1F1',
    grayLighter: '#FCFCFC',
    black: '#000',
    white: '#fff',
    red: '#E23A3A',

    // generics
    border: '#E6E6E6',
  },

  font: {
    fontFamily: 'Roboto',
  },

  fontSize: {
    base: '1.4rem',
  },

  responsive,
};

export default theme;
