# My Dream Board 🌟

This is a personal motivational dashboard built with React. This application is designed to help you visualize your goals, manage your energy, and stay productive.

## Features

This project is built as a single-page application (SPA) with several key features:

* **🏠 Homepage / Vision Board:** A dynamic homepage featuring a 3x3 grid. The center displays a random motivational quote, while the 8 surrounding cells show a randomized, shuffling collage of your personal images.
* **💪 Motivation:** A full "posts" page built with complete CRUD (Create, Read, Update, Delete) functionality. You can share motivational thoughts, text, and images, and other users can react with multiple emoji types (👍, ❤️, 💡).
* **⚡ Energy:** An interactive page to track your current energy level. It features a slider that reveals different content based on your input—from activity suggestions (movies, songs, anime) for low energy to inspiring quotes for high energy.
* **⏰ Clock:** A multi-functional utility page featuring:
    * A customizable Pomodoro Timer for study/break intervals.
    * A live Digital Clock with multiple themes (light, dark, gradient).
    * A Stopwatch with start, stop, and reset.

## Tech Stack

* **React:** All components, state management (`useState`, `useEffect`), and logic are built with React.
* **React Router (`react-router-dom`):** Used for client-side routing between the Home, Motivation, Energy, and Clock pages.
* **CSS:** All styling is done with custom CSS, including Flexbox, CSS Grid, and animations to create a modern, responsive layout.

---

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!