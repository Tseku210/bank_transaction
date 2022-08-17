import React from "react";
import css from "./style.module.css";

const Input = (props) => {
  return (
    <div className={css.Input}>
      <input
        type={props.type}
        onChange={props.onChange}
        placeholder={props.text}
      />
    </div>
  );
};

export default Input;
