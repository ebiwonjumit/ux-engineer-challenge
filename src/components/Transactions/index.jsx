import React, { useContext } from "react"
import { DataContext } from "../../data/"
import {
  Transportation,
  Housing,
  Food,
  DiningOut,
  HealthFitness,
  Income,
  Utilities,
  Entertainment,
  Miscellaneous,
  Clothing,
  Travel,
} from "../../icons"
import { Pane } from "../../elements/Pane"
import "./Transactions.scss"

export const Transactions = () => {
  const { data } = useContext(DataContext)
  const startingBalance = 3250.2
  const totalTransactionsAmount = data.transactions.reduce(
    (accumulator, transaction) => {
      return accumulator + transaction.amount
    },
    0
  )
  const balance = startingBalance - totalTransactionsAmount

  const categoryIcons = {
    Transportation,
    Housing,
    Food,
    DiningOut,
    HealthFitness,
    Income,
    Utilities,
    Entertainment,
    Miscellaneous,
    Travel,
    Clothing,
  }
  const normalizeCategoryName = (categoryName) => {
    return categoryName
      .replace(/&/g, "") // Remove "&" symbol
      .replace(/\s+/g, "") // Remove all spaces
  }

  return (
    <Pane size="lg" title="Transactions">
      <div className="row space-evenly">
        <div className="row-item">
          <p className="center-text">BALANCE:</p>
          <h2>${balance}</h2>
        </div>
      </div>

      <div className="transactions-list">
        <p className="transactions-title">TRANSACTIONS</p>

        {data.transactions.map((transaction, index) => (
          <div className="transaction-item" key={index}>
            <div className="transaction-icon">
              {categoryIcons[transaction.category]
                ? React.createElement(categoryIcons[transaction.category])
                : null}
            </div>
            <div className="transaction-text-column">
              <p className="transaction-date">{transaction.date}</p>
              <h3 className="transaction-description">
                {transaction.description}
              </h3>
            </div>
            <p
              className={`transaction-amount ${
                transaction.amount < 0
                  ? "transaction-amount-negative"
                  : "transaction-amount-positive"
              }`}
            >
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </Pane>
  )
}
