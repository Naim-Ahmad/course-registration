# Course Registration

This is a course-selling platform and there are some interesting features that I have implemented in this site by React js.

## Features

- Fully responsive
- You can able to add one course to the cart, but when you try to add what was added previously then shows an alert
- you can see the total and remaining credit hours and total price.
- when credit hour is less than 0 and greater than 20 then show an alert

## How I manage the state of this project

I have managed the state in the app component because the event is happening in the card child component and the data change is happening in the chart component, these two are connected in the app component, so I have kept the state in the app component and passed the data to the child component through props.
I have declared 3 states 1. remainingCradit to show the remaining credit, 2. totalCredit to show the total amount of credit, and 3-total price to show the total price.
