import React from "react";
import css from "./style.module.css";

const Error = (props) => {
  return (
    <div className={css.Error}>
      <h1>Алдаа гарлаа</h1>
      <div>{props.error}</div>
      <button onClick={props.clearError}>Буцах</button>
    </div>
  );
};

export default Error;
