import React, { useState } from "react"
import { Pane } from "../../elements/Pane"
import {
  Transportation,
  Housing,
  Food,
  DiningOut,
  HealthFitness,
  Clothing
} from "../../icons"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"

import "./Budget.scss"

export const Budget = () => {
  const categories = [
    { icon: Transportation, name: "Transportation", amount: 400 },
    { icon: Housing, name: "Housing", amount: 1500 },
    { icon: Food, name: "Food", amount: 500 },
    { icon: DiningOut, name: "Dining Out", amount: 500 },
    { icon: HealthFitness, name: "Health & Fitness", amount: 200 },
  ]

  const [isFormVisible, setIsFormVisible] = useState(false) // State to control form visibility
  const handleAddCategory = () => {
    setIsFormVisible(true) // Show form when button is clicked
  }

  const handleCloseForm = () => {
    setIsFormVisible(false) // Close form and go back to budget view
  }

  return (
    <Pane size="md" title="Budget">
      {/* "budget number categories" */}
      {!isFormVisible ? (
        <>
          <div className="row space-evenly">
            <div className="row-item">
              <p className="center-text">MONTHLY INCOME</p>
              <h2>$4,000</h2>
            </div>
            <div className="row-item">
              <p className="center-text">ALLOCATED</p>
              <h2>$2,500</h2>
            </div>
            <div className="row-item">
              <p className="center-text">REMAINING</p>
              <h2>$1,500</h2>
            </div>
          </div>

          <div className="categories-list">
            <p className="categories-title">CATEGORIES</p>
            {categories.map((category, index) => (
              <div className="category-item" key={index}>
                <div className="category-icon">
                  <category.icon />
                </div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-amount">${category.amount}</p>
              </div>
            ))}
            <button className="add-category" onClick={handleAddCategory}>
              <p> + New Category</p>
            </button>
          </div>
        </>
      ) : (
        <div className="add-category-form">
          <h2 className="add-category-title">New category</h2>
          <form>
            <div className="add-category-form-column">
              <label className="add-category-label">Category name</label>
              <Input type="text" />
            </div>

            <div className="add-category-form-column">
              <label className="add-category-label">Icon</label>
              <div className="add-category-icons-row">
                <div className="add-category-icon">
                  <Transportation />
                </div>
                <div className="add-category-icon">
                  <Housing />
                </div>
                <div className="add-category-icon">
                  <Food/>
                </div>
                <div className="add-category-icon">
                  <DiningOut />
                </div>
                <div className="add-category-icon">
                  <HealthFitness />
                </div>
                <div className="add-category-icon">
                  <Clothing />
                </div>

              </div>
            </div>

            <div className="add-category-form-column">
              <label className="add-category-label">Limit</label>
              <Input type="text" />
            </div>

            <div className="add-category-buttons-row">
              <Button
                variant="outline"
                size="md"
                text="Cancel"
                onClick={handleCloseForm}
              />
              <Button text="Add new category" size="md" type="submit" />
            </div>
          </form>
        </div>
      )}
    </Pane>
  )
}
