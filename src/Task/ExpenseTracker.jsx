import { useState } from "react";

function ExpenseTracker() {
  const [expense, setExpense] = useState("");

  return (
    <div className="container mt-5">
      <h1>Expense Tracker</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Enter expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />

      <h3 className="mt-3">
        Expense: {expense}
      </h3>
    </div>
  );
}

export default ExpenseTracker;