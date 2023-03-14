import React from "react";
import classes from "./MyButton.module.css";

interface ButtonProps {
  children: any;
  onClick: any;
}

const MyButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
