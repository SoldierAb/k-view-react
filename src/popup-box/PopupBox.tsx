import React from 'react';
import { PopupBoxProps } from './popupBoxTypes';

const defaultProps = {

};

const PopupBox: React.FC<PopupBoxProps> = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <>PopupBox</>;
};

export default PopupBox;
