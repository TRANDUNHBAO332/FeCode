import React from "react";
import ReactDom from 'react-dom/client'
import './index.css'
import App from "./App";
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import { store } from './redux/store';


const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
