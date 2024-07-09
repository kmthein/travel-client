import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import firebase from "firebase/compat/app";
import { Provider } from "react-redux";
import store from "./store/store.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJsVFOsT5SkdlqUbledGvaB9__jKGjxXU",
  authDomain: "travel-3b0bf.firebaseapp.com",
  projectId: "travel-3b0bf",
  storageBucket: "travel-3b0bf.appspot.com",
  messagingSenderId: "1066420552062",
  appId: "1:1066420552062:web:e650aaacabc6976ed5732f",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
