import React from "react";
import moment from "moment";
import css from "./style.module.css";

const TransactionData = (props) => {
  return (
    <div className={css.TransactionData}>
      <div className={css.Header}>
        <h1>Гүйлгээний мэдээлэл</h1>
        <div>
          <button
            disabled={props.report.reportPDF}
            onClick={() => props.report.generateReport("pdf")}>
            PDF
          </button>
          <button
            disabled={props.report.reportHTML}
            onClick={() => props.report.generateReport("html")}>
            HTML
          </button>
        </div>
      </div>
      <div>
        <div className={css.Bold}>
          <div>Гүйлгээний дугаар</div>
          <div>Шилжүүлсэн данс</div>
          <div>Хүлээн авсан данс</div>
          <div>Дүн</div>
          <div>Хэлбэр</div>
          <div>Огноо</div>
        </div>
        {props.transactions.map((val, key) => {
          return (
            <div key={key}>
              <div>{val.id}</div>
              <div>{val.userDans}</div>
              <div>{val.receiverDans}</div>
              <div>{val.amount}</div>
              <div>{val.type}</div>
              <div>{moment(`${val.date}`).format("YYYY/MM/DD")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionData;
