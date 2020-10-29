import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Registration} from "./component/Auth/Login/Registration";
import {Auth} from "./component/Auth/Auth";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
             <Route path='/auth' component={Auth}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
