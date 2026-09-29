import {ReactNode} from "react";
import s from "./Button.module.css"

type ButtonProps = {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
};

export const Button = ({children, onClick, disabled}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={s.button}
    >{children}</button>
  );
};