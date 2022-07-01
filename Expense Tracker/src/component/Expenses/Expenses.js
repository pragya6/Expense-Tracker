import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

//we can't use long conditional statements like if,else,for in JSX code in curly braces, but ternary like small statements can be implemented.
// abusing : filtredYear.length === 0 && <p>....</p>
// filteredYear.length === 0 ? true_condition : false_condition.
//to use a variable for conditioning.

function Expenses(props) {
  const [yeAr, setYEar] = useState("2022");

  const filteredExpeneses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === yeAr;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter year={yeAr} setYear={setYEar} />
      <ExpensesChart expenses={filteredExpeneses} />
      <ExpensesList item={filteredExpeneses}/>
    </Card>
  );
}

export default Expenses;
