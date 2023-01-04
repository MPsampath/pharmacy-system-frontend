import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Header from '../component/Header';
import Login from '../component/Login';
import UserCreate from '../component/Users/UserCreate';
import PrescriptHome from '../component/prescription/prescriptions_home';
import PrescriptionUpload from '../component/prescription/prescription_upload';

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
          <Route path="/prescription_home" element={<PrescriptHome />} />
          <Route path="/prescription_upload" element={<PrescriptionUpload />} />
        </Routes>
      </div>
    </Router>
  );
}


