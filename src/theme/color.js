import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export const SIZES = {
  padding: 10,
  margin: 10,
  width,
  height,
  radious: 15,
};
export const COLORS = {
  primary: '#355EFF',
  secondary: '#FF6104',
  success: '#70C04F',
  error: '#FF0000',
  warning: '#EC8A00',
  grey0: '#C4C4C4',
  grey1: '#707070',
  grey2: '#9B9B9B',
  grey3: '#F5F6F8',
  grey4: '#FCFDFF',
  grey5: '#BFBFBF',
  black: '#000',
  white: '#fff',
};
export const textVarient = {
  XL: 18,
  L: 25,
  M: 20,
  S: 18,
  SM: 15,
  weight: 'bold',
  weight1: '800',
  weight2: '200',
};

export const commonStyle = {
  iconStyle: {
    height: 40,
    width: 40,
  },
  smallImageStyle: {
    width: 50,
    height: 50,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 6,
  },
};
