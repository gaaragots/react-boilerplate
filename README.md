# react-skel

## A React.js Skeleton born with redux & redux-saga on mind

### Features

- Webpack Configured with a bunch of loaders of common use
  - NODE_ENV and API_URL Variable Replacement for a fast environment switching
  - HMR Configured as Development
  - Auto HTML Generation with `html-webpack-plugin` & `html-webpack-template`
  - Webpack Dev Server Configured for Development
  - Babel6, Babel-Polyfill and whatwg-fetch to being able to use latest ES6+ Features
  - Styled-JSX as CSS-In-JS Solution
  - normalize.css
  - React Router v4

- Use Redux as State Manager, and Redux-Observable as Side Effect Manager
- Unit Test Stack:
  - Jest, as Test Runner
  - Chai, as assertion Manager
  - Sinon, as Stub/Spy/Mock Library

- Dev
  - Eslint configured with common good practices
  - Prettier to control the code styling
  - Jest will run the test for the affected files on each commit
  - All will be validated by a git pre commit hook