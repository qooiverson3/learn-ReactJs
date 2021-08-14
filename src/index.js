import React from 'react';
import ReactDOM from 'react-dom';
// import '@fontsource/roboto';
// import './index.css';
// import Welcome from './material-test/welcome';
// import DataTable from './material-test/dataTable';
// import CircularStatic from './material-test/process';
// import XGridDemo from './material-test/dynamicData';
//import App from './App';
// import reportWebVitals from './reportWebVitals';

import SignInSide from './login/index';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Welcome />
    <DataTable />
    <CircularStatic />
    <XGridDemo /> */}
    <SignInSide />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
