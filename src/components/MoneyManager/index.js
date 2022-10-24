// Write your code here

import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const InitialValues = {
  name: 'vamsi',
  age: 'hii',
}

class MoneyManager extends Component {
  state = {
    total: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'INCOME',
    transactionList: [],
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      transactionList,
      title,
      amount,
      type,
      total,
      income,
      expenses,
    } = this.state
    const newTransaction = {
      id: v4(),
      title,
      amount,
      type,
    }
    console.log(type)
    if (type === 'INCOME') {
      this.setState(prevState => ({
        total: prevState.total + Number(amount),
        income: prevState.income + Number(amount),
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total - Number(amount),
        expenses: prevState.expenses + Number(amount),
      }))
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  ondeleteTransaction = id => {
    const {transactionList} = this.state
    const singleTrans = transactionList.filter(each => each.id === id)
    const singleAmount = singleTrans[0].amount

    const filteredResult = transactionList.filter(each => each.id !== id)
    if (singleTrans[0].type === 'EXPENSES') {
      this.setState(prevState => ({
        expenses: prevState.expenses - Number(singleAmount),
        total: prevState.total + Number(singleAmount),
        transactionList: filteredResult,
      }))
    } else {
      this.setState(prevState => ({
        income: prevState.income - Number(singleAmount),
        total: prevState.total - Number(singleAmount),
        transactionList: filteredResult,
      }))
    }
  }

  onchnageTitle = event => {
    this.setState({title: event.target.value})
  }

  onchangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onchangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      title,
      amount,
      type,
      total,
      income,
      expenses,
      transactionList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="top-card">
          <h1 className="top-name">Hi,Vamsi</h1>
          <p className="top-para">
            Welcome back to your <span className="top-high">Money Manager</span>
          </p>
        </div>
        <MoneyDetails total={total} income={income} expenses={expenses} />
        <div className="bottom-cards-container">
          <div className="form-container">
            <h1 className="form-heading">Add Transaction</h1>
            <form className="form-elements" onSubmit={this.onSubmitForm}>
              <div className="title-container">
                <label htmlFor="ti" className="title">
                  TITLE
                </label>
                <input
                  id="ti"
                  className="box"
                  placeholder="TITLE"
                  onChange={this.onchnageTitle}
                  value={title}
                />
              </div>
              <div className="title-container">
                <label htmlFor="am" className="title">
                  AMOUNT
                </label>
                <input
                  id="am"
                  className="box"
                  placeholder="AMOUNT"
                  onChange={this.onchangeAmount}
                  value={amount}
                />
              </div>
              <div className="title-container">
                <label htmlFor="va" className="title">
                  TYPE
                </label>
                <select
                  id="va"
                  className="box"
                  onChange={this.onchangeType}
                  value={type}
                >
                  <option value="INCOME">Income</option>
                  <option value="EXPENSES">Expenses</option>
                </select>
              </div>
              <button className="btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <ul className="history-container">
            <h1 className="history-heading">History</h1>
            <li className="items2">
              <p className="Title">Title</p>
              <p className="Title">Amount</p>
              <p className="Title">Type</p>
              <p className="Title"> </p>
            </li>
            {transactionList.map(each => (
              <TransactionItem
                transaction={each}
                key={each.id}
                ondeleteTransaction={this.ondeleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
