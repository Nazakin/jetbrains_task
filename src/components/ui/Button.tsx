import React from "react";
import styles from './Button.module.css'
import { ButtonVariant } from "../../types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({variant="primary", children, ...props }) => {

  return <button {...props} className={`${styles.customButton} ${styles[variant]}`}>{children}</button>;
};

export default Button;
