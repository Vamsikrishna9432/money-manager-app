// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transaction, ondeleteTransaction} = props
  const {id, title, amount, type} = transaction

  const deleteTrns = () => {
    ondeleteTransaction(id)
  }
  let typeValue
  if (type === 'INCOME') {
    typeValue = 'Income'
  } else {
    typeValue = 'Expenses'
  }

  return (
    <li className="items">
      <p className="title">{title}</p>
      <p className="title">{amount}</p>
      <p className="title">{typeValue}</p>
      <button className="db" onClick={deleteTrns} testid="delete" type="button">
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
