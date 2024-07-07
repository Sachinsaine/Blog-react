import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.json";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import { CookiesProvider } from "react-cookie";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="576750043606-ued0rm9lqlh2rrveeovlmfgk8bpirv4a.apps.googleusercontent.com">
    <Provider store={store}>
      <React.StrictMode>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </React.StrictMode>
    </Provider>
  </GoogleOAuthProvider>
);
