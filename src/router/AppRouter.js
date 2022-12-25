import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Header from '../component/Header';
import Login from '../component/Login';
import UserCreate from '../component/Users/UserCreate';

export default function AppRouter() {
  return (
    <Router>
      <Header/>
      <div>
        
        <Routes>
          <Route path="/login" element={<Login />} exact={true} />
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
          <Route path="/new_user" element={<UserCreate />} />
        </Routes>
      </div>
    </Router>
  );
}


