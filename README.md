# Airport Transfer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app contains a booking form for Airport transfers.

It uses GrqphQL mutation for creating booking. The mock server is located at https://github.com/anupamsmaurya/AirportTransferServer.

## Field validations

### UK phone numbers
Matches     +447222555555   | +44 7222 555 555 | (0722) 5555555 #2222

Non-Matches (+447222)555555 | +44(7222)555555  | (0722) 5555555 #22

### UK Date
mm/dd/yy and mm/dd/yyyy

### Flight number
Following this doc for flight number validation: https://gist.github.com/yectep/4372d1166a192d5e9754

Regex: /^[A-Z0-9]{3,}$/	Example: BA026

## Steps to run

### Server

1. Clone the server repo https://github.com/anupamsmaurya/AirportTransferServer.git
2. Install dependecies (yarn or npm i)
3. Start the server using `node index.js` . It will start a sever at http://localhost:4000/

### Client

1. Clone this repo and install dependecies.
2. yarn start or npm run start

## Pending features/ enhancements

* Right now this app uses custom validations. For handling a more enhanced/bigger app we should use some react form library (Formik, useForm etc) which provides robust form handling and validation features out of the box.
* The form submissions are currently not stored/cached locally. For demo purpose these can be stored locally to show a list of bookings. 
* Currently this app relies only on apollo-react features for error handling which are good enough but it could be enhanced.



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
