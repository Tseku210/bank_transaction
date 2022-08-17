import React from "react";
import Input from "../Input";
import css from "./style.module.css";

const Transaction = (props) => {
  return (
    <div className={css.Transaction}>
      <h1>ГҮЙЛГЭЭ</h1>
      <Input
        type="text"
        onChange={(e) => props.input.setUserDans(e.target.value)}
        text="Таны дансны дугаар"
      />
      <Input
        type="text"
        onChange={(e) => props.input.setReceiverDans(e.target.value)}
        text="Хүлээн авагчийн дансны дугаар"
      />
      <Input
        type="text"
        onChange={(e) => props.input.setAmount(e.target.value)}
        text="Мөнгөн дүнгээ оруулна уу"
      />
      <div className={css.Currency}>
        <label htmlFor="">Валютын хэлбэрээ сонгоно уу</label>
        <select
          name=""
          id=""
          onChange={(e) => props.input.setType(e.target.value)}>
          <option value="MNT">MNT</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <button onClick={props.input.submit}>Шилжүүл</button>
    </div>
  );
};

export default Transaction;
