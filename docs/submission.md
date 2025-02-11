## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!

### Task 1: Update form accessibility
Added legend style to PageLayout .scss file
Add


## **1. Accessibility Improvements**
- **ARIA attributes added**:  
  - `role="form"` and `aria-label="Add payment card"` for the form.
  - `role="radiogroup"` and `aria-label="Select card type"` for the card type selection.
  - `aria-label="Add card to wallet"` for the add card button.
  - `role="region"` and `aria-label="Saved cards"` for the saved cards section.
  - `role="article"` and `aria-label` for each saved card to describe them better.
- **Keyboard Navigation Enhancements**:
  - `tabIndex="0"` added to each card for better focus navigation.

## **2. Improved Input Semantics**
- **Updated input types**:  
  - Changed `type="number"` to `type="text"` for `Card Number`, `CVC`, and `Expiration` to prevent unwanted browser behavior (e.g., scroll-based number changes).
- **Added `name` attributes** to input fields for better form handling.

## **3. Improved Form Labeling**
- **`htmlFor` added to labels**:  
  - Ensures correct association with form inputs (e.g., `<label htmlFor="cardNumber">Card Number:</label>`).
- **Replaced div-based card type selection with proper radio buttons**:
  - Now uses `<input type="radio">` within labels, improving usability and screen reader support.

## **4. UI/UX Enhancements**
- **Masked sensitive card details**:
  - Instead of displaying the full card number, only the last four digits are shown:  
    ```jsx
    •••• •••• •••• {card.number.slice(-4)}
    ```
  - CVC values are now hidden as `CVC: •••`.
- **Styled fieldset and legend for better form structure**:
  - Added `<fieldset>` and `<legend>` for the card type selection.
  - Included a margin (`mt-4 mb-8`) and a spacing div (`<div style={{ height: "0.5rem" }} />`) for better spacing.

## **5. Code Cleanliness & Maintainability**
- **Consistent use of `id` and `name` attributes** for input fields.
- **More meaningful class names and spacing adjustments**:
  - `card-type mt-4 mb-8` for improved visual separation.
- **Reduced inline styles** where possible, using class names instead.

## **6. Security Considerations**
- **Avoids exposing full card details** in the UI:
  - Prevents users from accidentally revealing sensitive information.



### Task 2: Build UI based on wireframe
1. State Management for Form Visibility:
Introduced useState to manage the visibility of the form (isFormVisible).
The form is conditionally rendered when the "Add New Category" button is clicked.
2. Category List with Dynamic Data:
Categories are stored in an array with the necessary data (icon, name, amount).
Each category's name, amount, and corresponding icon are dynamically displayed using map.
3. Form for Adding New Category:
Added a form for adding a new category, with inputs for category name, icon, and budget limit.
A set of icons for category selection is presented, allowing users to choose from pre-defined icons.
4. New Buttons and Actions:
The form includes a "Cancel" button to close the form and a "Add new category" button to submit the form.
5. Styling & Layout:
The improved version includes more sophisticated styling for category items, icons, and buttons.
6. Clear UI for Financial Information:
The layout has been improved to show key financial information like monthly income, allocated budget, and remaining budget with clear headings.


### Task 3: Refactor to add visual hierarchy
<!-- add task description here -->


### Notes:
I wanted to make the form functional in Task 2 but ran out of time
I also wanted to add a delete card button to the Waller screen but also ran out of time
<!-- space to ask questions or provide any additional details while going through this process -->