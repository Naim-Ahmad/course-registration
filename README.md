# Course Registration

This is a course-selling platform built using React.js. Below are some of its key features:

## Features

- Fully responsive Design.
- Prevents adding duplicate courses to the cart, providing a notification.
- Displays essential information:
  - Total credit hours
  - Remaining credit hours
  - Total price
- Alerts users if the entered credit hours are less than 0 or greater than 20.

## How I manage the state in this project.

In this project, state management is handled in the `App` component. Events occur within the `Card` child component, and data updates are reflected in the `cart` component. These two components are connected within the `App` component, where the state is declared and data is passed to child components via props.

Three states are maintained:

- `remainingCredit`: Displays remaining credit.
- `totalCredit`: Displays the total amount of credit.
- `totalPrice`: Displays the total price.
