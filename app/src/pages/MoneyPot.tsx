import React, { ChangeEvent, useEffect, useState } from "react";
import logo from "./logo.svg";
import "../assets/MoneyPot.scss";
import axios from "../api/axios";

import { MoneyPotMenu, IdentytiDisplayer } from "../components/Index";
import { Cookies, CookiesProvider, useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";

// import AuthContext from '../context/AuthProvider';
// const  rqtest = axios.get('http://localhost:8000/api/money_pot/6').then(res=>{
//   console.log(res);
// })
// console.log('sisi')

function MoneyPot() {
  const MONEYPOTTRANSACTIONS_URL = "/api/money_pot/";
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies();

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      Amount: "2000 €",
      Date: "05/07/23\r14H20",
      Sender: "me",
      Recipient: "@JohnDoe",
      Label: "Remboursement prêt",
      Comment: "-",
    },
  ]);

  const [newTransaction, setNewTransaction] = useState("");
  const [moneyPotData, setMoneyPotData] = useState<any[]>([]);

  const getMoneyPotTransactions = async (id: number) => {
    try {
      await axios
        .get(MONEYPOTTRANSACTIONS_URL + id, {
          headers: {
            Authorization: "Bearer " + cookies.token,
          },
        })
        .then((res) => {
          setMoneyPotData(res.data.transactions);
          console.log(res.data);
          console.log(res.data.transactions);
        });
    } catch (error) {
      console.log("ERR!");
      console.log(error);
    }
  };

  useEffect(() => {
    getMoneyPotTransactions(cookies.moneyPotId);
  }, []);

  const handleRemove = (id: number) => {
    //1. state copy
    const transactionsCopy = [...transactions];
    //2. state manipulation
    const transactionsCopyUpdated = transactionsCopy.filter(
      (transaction) => transaction.id !== id
    );
    //3. transaction setter
    setTransactions(transactionsCopyUpdated);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const transactionsCopy = [...transactions];
    const id = transactionsCopy.length + 1;
    const Amount = "666 €";
    const Date = "11/07/23\r17H00";
    const Sender = "me";
    const Recipient = "newNewNew";
    const Label = newTransaction;
    const Comment = "bsahtek la zone";

    transactionsCopy.push({
      id: id,
      Amount: Amount,
      Date: Date,
      Sender: Sender,
      Recipient: Recipient,
      Label: Label,
      Comment: Comment,
    });

    setTransactions(transactionsCopy);
  };

  const handleChange = (event: any) => {
    setNewTransaction(event.target.value);
  };

  useEffect(() => {
    cookies.token == null ? navigate("/login", { replace: true }) : console.log('ok');
  }, []);

  return (
    <CookiesProvider>
      <div className="moneypot">
        <MoneyPotMenu />
        <IdentytiDisplayer />

        <h1>Your MoneyPot !</h1>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>label</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {moneyPotData.map((mpentry) => (
                <tr key={mpentry.id}>
                  <td>#{mpentry.id}</td>
                  <td>{mpentry.amount}</td>
                  <td>{mpentry.label}</td>
                  <td>{mpentry.createdAt.date}</td>
                  <td>R</td>
                  <td>U</td>
                  <td>D</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* 
        <ul>
          {transactions.map((transaction) => {
            return (
              <li key={transaction.id}>
                {transaction.id} -&nbsp;
                <strong>{transaction.Amount}</strong> -&nbsp;
                <small>{transaction.Date}</small> from&nbsp;
                {transaction.Sender}&nbsp;to&nbsp;
                {transaction.Recipient} -&nbsp;
                {transaction.Label} -{" "}
                <button onClick={() => handleRemove(transaction.id)}>X</button>
              </li>
            );
          })}
        </ul>

        <form action="submit" onSubmit={handleSubmit}>
          <input
            value={newTransaction}
            onChange={handleChange}
            type="text"
            placeholder="label"
          />
          <button>Add Transaction</button>
        </form> */}

        {/* <button onClick={() => getMoneyPotDetails(6)}>TEST API</button>
      <h3>{JSON.stringify(data)}</h3> */}
      </div>
    </CookiesProvider>
  );
}

export default MoneyPot;
