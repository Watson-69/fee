// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App_usermemo from './App_usermemo';
// // import About from './About'

// import StateLifting from './StateLifting';
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <StateLifting />
//     {/* <App_usermemo /> */}
//   </StrictMode>,
// );
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import StateLifting from './StateLifting';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateLifting/>
  </StrictMode>
);