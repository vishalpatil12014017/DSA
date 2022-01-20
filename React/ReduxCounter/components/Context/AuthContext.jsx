import { createContext } from "react";
import { useState } from "react";
export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [Token, setToken] = useState("")
    
    const handleTokenchange=(e)=>{
        setToken(e)
    }
   
    return <AuthContext.Provider value={{Token,handleTokenchange}}>{children}</AuthContext.Provider>
}
//index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {ThemedContextProvider} from './component/context/ThemedContext'
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemedContextProvider>
//     <App />
//     </ThemedContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
