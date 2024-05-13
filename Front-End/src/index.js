import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import App from './App';
import Home from './component/Home'
import EmployeeList from './component/EmployeeList'
import Profile from './component/Profile'
import Create from './component/Create';
import Edit from './component/Edit';
import './styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element ={<App/>}
        />
        <Route
          path='/:id/home'
          // path = '/home/:id'
          element ={<Home/>}
        />
        <Route
            path='/:id/employee-list'
            element ={<EmployeeList/>}
        />
        <Route
            path='/:id/employee-list/create-employee'
            element ={<Create/>}
          />
        <Route
            path='/:id/employee-list/edit'
            element ={<Edit/>}
          />
        <Route
            path='/:id/profile'
            element ={<Profile/>}
          />
        
        <Route
          path='*'
          element={<Navigate to="/"/>}
        />
      </Routes>
    </Router>
  </>
);
