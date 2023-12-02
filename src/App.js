import React from 'react';
import EmpDash from './pages/Emp_Dash.js'; //done
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import LandingPage from './pages/Client_LandingPage.js'
import ClientAccount from './pages/Client_AccountPage.js';
import EmpAddProduct from './pages/Emp_AddProduct.js';
import EmpProductList from './pages/Emp_Products.js'
import { Route } from 'react-router-dom/cjs/react-router-dom.min.js';
import { BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          {/* done */}
          <Route path="/employee-dashboard">
            <EmpDash />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/main">
            <LandingPage />
          </Route> 

          <Route path="/account">
            <ClientAccount />
          </Route>         

          <Route path="/employee-add-product">
            <EmpAddProduct />
          </Route>        

          <Route path="/employee-product-list">
            <EmpProductList />
          </Route>  

        </Switch>
      </div>
    </Router>
  );
}


export default App;
