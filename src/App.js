import React from 'react';
import AdminDash from './pages/Admin_Dash.js'; //done
import EmpDash from './pages/Emp_Dash.js'; //done
import AdminEmpList from './pages/Admin_EmpList.js'; //done
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import AddEmployee from './pages/Admin_AddEmp.js'; //done
import LandingPage from './pages/Client_LandingPage.js'
import ClientAccount from './pages/Client_AccountPage.js';
import AdminAddProduct from './pages/Admin_AddProduct.js'
import EmpAddProduct from './pages/Emp_AddProduct.js';
import AdminProductList from './pages/Admin_Products.js';
import EmpProductList from './pages/Emp_Products.js'
import { Route } from 'react-router-dom/cjs/react-router-dom.min.js';
import { BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          {/* done */}
          <Route path="/admin-dashboard">
            <AdminDash /> 
          </Route>

          {/* done */}
          <Route path="/employee-dashboard">
            <EmpDash />
          </Route>

            {/* done */}
            <Route path="/list-of-employee">
            <AdminEmpList />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          {/* done */}
          <Route path="/admin-add-employee">
            <AddEmployee />
          </Route>

          <Route path="/main">
            <LandingPage />
          </Route> 

          <Route path="/account">
            <ClientAccount />
          </Route>  

          <Route path="/admin-add-product">
            <AdminAddProduct />
          </Route>

          <Route path="/admin-product-list">
            <AdminProductList />
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
