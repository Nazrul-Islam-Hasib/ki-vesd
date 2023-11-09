# Ki-Vesd

This project shows a employee management dashboard with in tabular format with searching, filtering and sorting option

## Live demo

Go to this link to view live demo : [https://drive.google.com/file/d/1Jgw-r0cveMuxBgefX2Zg2iLtlDJkHaHw/view?usp=sharing](Link)

## Technology Used

- VueJs
- Vuetify
- Vite


### Testing:
- Jest

### Authentication:
- AuthO

## Features

- **Employee Lists:** Shows the list of all employees in a tabular format.

- **Search:** Search employee based on name, country, region, address, phone, birthday, experience score.

- **Sorting:** Sort employee on every filed in asc or dsc order.

- **Salary:** Monthly salary is calculated based on the Annual salary for every employee.

- **Individual details:** Details data of a employess in a card.

- **Responsive Design:** Accessibility on various devices.

- **Intuitive UI:** User-friendly and easy-to-navigate interface.

## Demo User

Use this demo user to access the app.

- **User:** email- admin@kiv.com , password - KiVesd@1

## Local Setup for Client-Side Application

Follow these concise steps to set up and run the client-side application locally.

**Prerequisites:**

- Node.js installed.

**Steps:**

1. **Clone the repository:**

   git clone https://github.com/Nazrul-Islam-Hasib/ki-vesd

2. **Install dependencies:**

   npm install
   

3. **Start the development server:**

   npm run dev
   

   Access the app at `http://localhost:3000 `.

4. **For testing:**

   
   npm run test:unit


# Hello world Component

The `Hello world` layout component is the main component which holds the `Dashboard` and `LoginForm` component



# Dashboard Component

The `Dashboard` component is responsible for displaying employee statistics based on the user's authentication status. It fetches data from the `data.json` and renders a table to display the list of employees when the user is authenticated. When we click details button it shows specific details about the employee in a modal card.
If the user is not authenticated, it renders a `LoginForm` component.


# LoginForm Component

The `LoginForm` component is responsible for displaying employee's authentication status. It uses `Login` component with the help of AuthO to authenticate user.

