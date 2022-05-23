import React from 'react';
import type { ReactFragment } from 'react';
export interface ButtonProps {
    /**
     * @description Button 类型
     * @default 'primary''
     */
    type?: 'primary' | 'success' | 'warning' | 'error';
    children?: ReactFragment;
}
export declare type ButtonTypes = Record<Required<ButtonProps>['type'], string>;
declare const Button: React.FC<ButtonProps>;
export default Button;
