import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [btnState, setBtnState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setBtnState(false);
  };

  const trueHandler = () => {
    setBtnState(true);
  };

  const falseHandler =(state) => {
    setBtnState(state);
  }

  return (
    <div className="new-expense">
      {!btnState && <button onClick={trueHandler}>Add New Expense</button>}
      {btnState &&
        (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={falseHandler} />)
      }
    </div>
  );
}

export default NewExpense;
