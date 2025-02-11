## Design Challenge Rationale
For each task, please give a brief description of your process, your reasoning used to make the changes and how you feel the change benefits the overall app. We work collaboratively at Planning Center, so being able to communicate the intent, purpose or motivation of your change is often just as important as the code itself!


### Task 1: Update Form Accessibility

#### **1. Accessibility Improvements**
- **ARIA attributes added:**
  - `role="form"` and `aria-label="Add payment card"` for the form.
  - `role="radiogroup"` and `aria-label="Select card type"` for the card type selection.
  - `aria-label="Add card to wallet"` for the add card button.
  - `role="region"` and `aria-label="Saved cards"` for the saved cards section.
  - `role="article"` and `aria-label` for each saved card to improve descriptions.
- **Keyboard Navigation Enhancements:**
  - `tabIndex="0"` added to each card for better focus navigation.

#### **2. Improved Input Semantics**
- **Updated input types:**
  - Changed `type="number"` to `type="text"` for `Card Number`, `CVC`, and `Expiration` to prevent unwanted browser behavior (e.g., scroll-based number changes).
- **Added `name` attributes** to input fields for better form handling.

#### **3. Improved Form Labeling**
- **`htmlFor` added to labels:**
  - Ensures correct association with form inputs (e.g., `<label htmlFor="cardNumber">Card Number:</label>`).
- **Replaced div-based card type selection with proper radio buttons:**
  - Now uses `<input type="radio">` within labels, improving usability and screen reader support.

#### **4. UI/UX Enhancements**
- **Masked sensitive card details:**
  - Instead of displaying the full card number, only the last four digits are shown:
    ```jsx
    •••• •••• •••• {card.number.slice(-4)}
    ```
  - CVC values are now hidden as `CVC: •••`.
- **Styled fieldset and legend for better form structure:**
  - Added `<fieldset>` and `<legend>` for the card type selection.
  - Included a margin (`mt-4 mb-8`) and a spacing div (`<div style={{ height: "0.5rem" }} />`) for better spacing.

#### **5. Code Cleanliness & Maintainability**
- **Consistent use of `id` and `name` attributes** for input fields.
- **More meaningful class names and spacing adjustments:**
  - `card-type mt-4 mb-8` for improved visual separation.
- **Reduced inline styles** where possible, using class names instead.

#### **6. Security Considerations**
- **Avoids exposing full card details** in the UI:
  - Prevents users from accidentally revealing sensitive information.

*Added fieldset and input styling to `PageLayout.scss`. Initially, I attempted to add these to `Wallet.scss`, but it didn’t work, so I opted for a more global file.*

---

### Task 2: Build UI Based on Wireframe

#### **1. State Management for Form Visibility**
- Introduced `useState` to manage form visibility (`isFormVisible`).
- The form is conditionally rendered when the "+ New Category" button is clicked.

#### **2. Category List with Dynamic Data**
- Categories are stored in an array with necessary data (icon, name, amount).
- Each category’s name, amount, and corresponding icon are dynamically displayed using `map()`.

#### **3. Form for Adding New Category**
- Added a form with inputs for category name, icon, and budget limit.
- Included a selection of predefined icons for the user to choose from.

#### **4. New Buttons and Actions**
- The form includes a "Cancel" button to close the form and an "Add New Category" button to submit it.

#### **5. Styling & Layout**
- Added styling to `Budget.scss`.
- Reused components from the `elements` folder (e.g., `Input` and `Button`).
- Followed the `.scss` file pattern from `Wallet.scss`.

#### **6. Added to Icons File**
- Added a `Clothing` icon to the icons file and imported it.
- Chose a suitable icon from the existing `react-icons/tb` package.

---

### Task 3: Refactor to Add Visual Hierarchy

#### **1. Transaction List with Dynamic Data**
- The transaction list is populated with data from `transactions.js`.
- Applied UI/UX formatting similar to the budget page layout for consistency.

#### **2. Styling & Layout**
- Maintained application-wide consistency by lifting styles from `Budget.scss` and modifying class names.
- Ensured that category and transaction items look similar to maintain a cohesive UI.
- Added conditional styling for transaction amounts:
  - **Green for positive values** (income).
  - **Red for negative values** (expenses).
  - This makes it easier for users to quickly distinguish transaction types.

#### **3. Updated Data File (`transactions.js`)**
- Noticed discrepancies in category naming between the data file and the icons.
- Standardized category names in the data file to match the icon names.
- This data cleanup improves code readability and prevents potential UI mismatches.

#### **4. Added to Icons File**
- Added `Travel`, `Income`, `Utilities`, `Entertainment`, and `Miscellaneous` icons.
- Ensured all categories from `transactions.js` have a corresponding icon.

---

### Notes
- I wanted to make the form functional in Task 2 but ran out of time.
- I also planned to add a "Delete Card" button to the Wallet screen but didn’t have enough time.



