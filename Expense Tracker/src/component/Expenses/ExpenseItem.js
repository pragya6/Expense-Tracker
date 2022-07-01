import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

//useState can never be used outside a function or inside a nested fuction.
//There is one exception case though..
//useState always provides an array of two elements:- First always being the initial value and other be the function for updating and recalling the parent function.

function ExpenseItem(props) {
  
  return (
    <li>
      <Card className="expense-item">
       <ExpenseDate date= {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
