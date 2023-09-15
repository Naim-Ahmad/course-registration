# Course Registration

This is a course-selling platform and there are some interesting features that I have implemented in this site using React js.

## Features

- Fully responsive Design.
- Prevents adding duplicate courses to the cart, providing a notification.
- Displays essential information:
  - Total credit hours
  - Remaining credit hours
  - Total price
- you can see the total credit hours, remaining credit hours, and total price.
- if the credit hour is less than 0 or greater than 20, an alert will be displayed.

## State Management:

I have managed the state in the App component. The event is happening in the Card child component, and the data change is happening in the Chart component. These two components are connected in the App component, so I have kept the state in the App component and passed the data to the child components through props. I have declared three states: remainingCredit to show the remaining credit, totalCredit to show the total amount of credit, and totalPrice to show the total price.
