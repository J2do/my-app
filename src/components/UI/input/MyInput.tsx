import React from "react";
import classes from "./MyInput.module.css";

interface InputProps {
  value: any;
  onChange: any;
  type: any;
  placeholder: any;
}

const MyInput: React.FC<InputProps> = (props, ref) => {
  return <input ref={ref} className={classes.myInt} {...props} />;
};

export default MyInput;
