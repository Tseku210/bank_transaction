import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TransactionData from "./components/TransactionData";
import Transaction from "./components/Transaction";
import Error from "./components/Error";

function App() {
  const [userDans, setUserDans] = useState("");
  const [receiverDans, setReceiverDans] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("MNT");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [reportPDF, setReportPDF] = useState(false);
  const [reportHTML, setReportHTML] = useState(false);

  useEffect(() => {
    getTransactions();
  }, []);

  const isFloat = (value) => {
    if (
      typeof value === "number" &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }

    return false;
  };

  const clearError = () => {
    setError("");
  };

  const submit = () => {
    if (userDans.length !== 10 || receiverDans.length !== 10) {
      setError("Дансны урт таарахгүй байна");
    } else if (!isFloat(Number(amount))) {
      setError("Зөвхөн бутархай тоо оруулах боломжтой");
    } else if (/[a-zA-Z]/.test(userDans) || /[a-zA-Z]/.test(receiverDans)) {
      setError("Данс зөвхөн тооноос бүрдэнэ");
    } else {
      console.log("submitting");
      axios
        .post("http://localhost:9191/api/add", {
          userDans,
          receiverDans,
          amount,
          type,
        })
        .then(() => {
          console.log("yeay");
        })
        .then(() => getTransactions())
        .then(() => {
          setReportHTML(false);
          setReportPDF(false);
        });
    }
  };

  const getTransactions = () => {
    console.log("getting");
    axios.get("http://localhost:9191/api/all").then((response) => {
      console.log(response);
      setTransactions(response.data);
    });
  };

  const generateReport = (format) => {
    axios.get("http://localhost:9191/api/report/" + format).then((response) => {
      console.log(response);
    });
    if (format === "pdf") {
      setReportPDF(true);
    } else if (format === "html") {
      setReportHTML(true);
    }
  };

  return (
    <div className="App">
      {error ? (
        <Error clearError={clearError} error={error} />
      ) : (
        <Transaction
          input={{
            setUserDans,
            setReceiverDans,
            setAmount,
            setType,
            submit,
            getTransactions,
          }}
        />
      )}
      <TransactionData
        transactions={transactions}
        report={{ generateReport, reportHTML, reportPDF }}
      />
    </div>
  );
}

export default App;
