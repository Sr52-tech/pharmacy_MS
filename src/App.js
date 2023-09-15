import React from 'react';
import AdDash from './pages/AdDash.js'; // adjust the path according to your project structure
import EmpDash from './pages/EmpDash.js';
import AdEmpList from './pages/AdEmpList.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import AddEmployee from './pages/AddEmp.js';
import { Route } from 'react-router-dom/cjs/react-router-dom.min.js';
import { BrowserRouter as Router, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/admin-dashboard">
            <AdDash />
          </Route>

          <Route path="/employee-dashboard">
            <EmpDash />
          </Route>

            <Route path="/list-of-employee">
            <AdEmpList />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/add-employee">
            <AddEmployee />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


export default App;
