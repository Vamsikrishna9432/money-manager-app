// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {total, income, expenses} = props

  return (
    <div className="money-details-container">
      <div className="first">
        <img
          className="ima"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="details">
          <p className="balance">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {total}
          </p>
        </div>
      </div>
      <div className="first second">
        <img
          className="ima"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="details">
          <p className="balance">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="first third">
        <img
          className="ima"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="details">
          <p className="balance">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
