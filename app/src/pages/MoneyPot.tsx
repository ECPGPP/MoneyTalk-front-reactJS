import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './MoneyPot.css';
import axios from 'axios';
import MoneyPotMenu from '../components/MoneyPotMenu';

// import AuthContext from '../context/AuthProvider';

console.log('TEST AUTHCONTEXT');
// console.log(AuthContext);
console.log('TEST AUTHCONTEXT');


// const  rqtest = axios.get('http://localhost:8000/api/money_pot/6').then(res=>{
//   console.log(res);
// })
// console.log('sisi')


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
  ]);

  const [newTransaction, setNewTransaction] = useState("");
  const [data, setData] = useState('')
  const getMoneyPotDetails = async (id: number)=>{
    try {
      await axios.get('http://localhost:8000/api/money_pot/'+id).then(
        res => {
          const data = res.data
          console.log(data)
          setData(data)
        }
      )
    } catch (error) {
      console.log("!oula probleme!")
      console.log(error)
    }
  }

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
    <div className='moneypot'>
      <MoneyPotMenu/>
      <h1>Your MoneyPot</h1>

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

      <button onClick={() => getMoneyPotDetails(6)}>TEST API</button>
      <h3>{JSON.stringify(data)}</h3>
    </div>
    );
}


export default MoneyPot;
