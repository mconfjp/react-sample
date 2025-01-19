import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
// import {Parent} from './components/Parent.tsx';
// import {Parent} from './components/UseCallbackParent.tsx';
import {UseMemoSample} from './components/UseMemoSample.tsx';
import reportWebVitals from './reportWebVitals.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Parent /> */}
    <UseMemoSample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
