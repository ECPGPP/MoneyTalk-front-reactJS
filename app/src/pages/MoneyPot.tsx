import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './MoneyPot.css';

function MoneyPot() {

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      Amount: "2000 €",
      Date: "05/07/23\r14H20",
      Sender: "me",
      Recipient: "@JohnDoe",
      Label: "Remboursement prêt",
      Comment: "-"
    },
    {
      id: 2,
      Amount: "500 €",
      Date: "06/07/23\r18H30",
      Sender: "me",
      Recipient: "TravelAgency",
      Label: "Réservation vol",
      Comment: "-"
    },
    {
      id: 3,
      Amount: "800 €",
      Date: "08/07/23\r11H10",
      Sender: "me",
      Recipient: "EDF",
      Label: "Facture d'électricité",
      Comment: "-"
    },
    {
      id: 4,
      Amount: "28 €",
      Date: "11/07/23\r17H00",
      Sender: "@TOMA",
      Recipient: "me",
      Label: "Cadeau d'anniversaire",
      Comment: "-"
    },
    {
      id: 5,
      Amount: "75 €",
      Date: "10/07/23\r10H15",
      Sender: "@AliceSmith",
      Recipient: "me",
      Label: "remboursement",
      Comment: "-"
    }
  ]);

  const [newTransaction, setNewTransaction] = useState("");

  // mais, il est dégueulasse ce type any !
  // methode pas ouf parceque pas de rerender = dangereux.
  //const inputRef: any = useRef()
  
  const handleRemove = (id: number) => {
    //1. state copy
    const transactionsCopy = [...transactions];
    //2. state manipulation
    const transactionsCopyUpdated = transactionsCopy.filter(transaction => transaction.id !== id);
    //3. transaction setter
    setTransactions(transactionsCopyUpdated);
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const transactionsCopy = [...transactions];
    const id = transactionsCopy.length+1
    const Amount = "666 €"
    const Date = "11/07/23\r17H00"
    const Sender = "me"
    const Recipient = "newNewNew"
    const Label = newTransaction
    const Comment = "bsahtek la zone"

    transactionsCopy.push({
      id: id,
      Amount: Amount,
      Date: Date,
      Sender: Sender,
      Recipient: Recipient,
      Label: Label,
      Comment: Comment
    })

    setTransactions(transactionsCopy)

  }

  // TOUNSHIT : mais, il est dégueulasse ce type any !
  const handleChange = (event : any) => {
    setNewTransaction(event.target.value);
  }

  return (
    <div>
      <h1>Welcome to MoneyTalk !</h1>

      <ul>
        {transactions.map((transaction)=>{
          return <li key={transaction.id}>
            {transaction.id} -&nbsp; 
            <strong>{transaction.Amount}</strong> -&nbsp;
            <small>{transaction.Date}</small> from&nbsp;
            {transaction.Sender}&nbsp;to&nbsp;
            {transaction.Recipient} -&nbsp;
            {transaction.Label} - <button onClick={() => handleRemove(transaction.id)}>X</button>
            </li>
        })}
      </ul>

      <form action='submit' onSubmit={handleSubmit}>
        <input 
          value={newTransaction} 
          onChange={handleChange}
          type="text" 
          placeholder='label'/>
        <button>Add Transaction</button>
      </form>

    </div>
    );
}


export default MoneyPot;
