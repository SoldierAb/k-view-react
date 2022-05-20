import React from 'react'
import type { ReactFragment } from 'react'
import t from 'prop-types'

export interface ButtonProps {
    /**
     * @description Button 类型
     * @default 'primary'' 
     */
    type?: 'primary' | 'success' | 'warning' |'error';
    children?: ReactFragment
}

const prefixCls = 'k';

export type ButtonTypes = Record<Required<ButtonProps>['type'], string>

const types: ButtonTypes = {
  primary: '#5352ED',
  success: '#2ED573',
  warning: '#FFA502',
  error: '#FF4757',
}

const Button: React.FC<ButtonProps> = ({ children, type = 'primary', ...rest}) => {
    return <button className={`${prefixCls}-button-container`} style={{background: types[type]}} {...rest}>{children}</button>
}

Button.propTypes = {
    type: t.oneOf(['primary', 'success', 'warning', 'error'])
}

export default Button