import React, { useContext, useState } from "react"
import { DataContext } from "../../data/"
import { Pane } from "../../elements/Pane"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { CreditCard, DebitCard } from "../../icons"
import "./Wallet.scss"

export const Wallet = () => {
  const { data, setData } = useContext(DataContext)
  const [number, setNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiration, setExpiration] = useState("")
  const [type, setType] = useState("credit")


  const handleAddCard = () => {
    setData((prevData) => ({
      ...prevData,
      cards: [
        ...(prevData.cards || []),
        {
          type: type,
          number: number,
          cvc: cvc,
          expiration: expiration,
        },
      ],
    }))
    setNumber("")
    setCvc("")
    setExpiration("")
    setType("credit")
  }

  return (
    <Pane size="sm" title="My Wallet">
      <div className="card-form" role="form" aria-label="Add payment card">
        <div className="card-form--row">
          <label htmlFor="cardNumber">Card Number:</label>
          <Input
            id="cardNumber"
            name="cardNumber"
            onChange={(e) => setNumber(e.target.value)}
            placeholder="1111 1111 1111 1111"
            type="text"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="cvc">CVC:</label>
          <Input
            id="cvc"
            name="cvc"
            onChange={(e) => setCvc(e.target.value)}
            placeholder="xxx"
            type="text"
            value={cvc}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="expiration">Expiration:</label>
          <Input
            id="expiration"
            name="expiration"
            onChange={(e) => setExpiration(e.target.value)}
            placeholder="mm/yyyy"
            type="text"
            value={expiration}
          />
        </div>

        <fieldset className="card-type mt-4 mb-8">
          <div style={{ height: "0.5rem" }} />

          <legend className="mb-2">Card Type:</legend>

          <div
            className="card-type--options"
            role="radiogroup"
            aria-label="Select card type"
          >
            <div className={`${type === "credit" ? "selected" : ""}`}>
              <label htmlFor="creditCard">
                <input
                  type="radio"
                  id="creditCard"
                  name="cardType"
                  value="credit"
                  checked={type === "credit"}
                  onChange={() => setType("credit")}
                />
                Credit
              </label>
            </div>
            <div className={`${type === "debit" ? "selected" : ""}`}>
              <label htmlFor="debitCard">
                <input
                  type="radio"
                  id="debitCard"
                  name="cardType"
                  value="debit"
                  checked={type === "debit"}
                  onChange={() => setType("debit")}
                />
                Debit
              </label>
            </div>
          </div>
        </fieldset>
        <Button
          onClick={handleAddCard}
          text="Add Card"
          aria-label="Add card to wallet"
        />
      </div>

      <div className="cards-list" role="region" aria-label="Saved cards">
        {data.cards.map((card, index) => {
          return (
            <div
              className="card"
              key={index}
              role="article"
              tabIndex="0"
              aria-label={`${card.type} card ending in ${card.number.slice(-4)}`}
            >
              <div className="card--icon" aria-hidden="true">
                {card.type === "credit" ? <CreditCard /> : <DebitCard />}
              </div>

              <div className="card--details">
                <h2 className="card--number">
                  •••• •••• •••• {card.number.slice(-4)}
                </h2>
                <div className="flex">
                  <p className="card--cvc">CVC: •••</p>
                  <p className="card--expiration">Expires: {card.expiration}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Pane>
  )
}
