import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <h1>Pharmacy system</h1>
    <hr />
    <div className="links">
      <Link to="/login">Login</Link>
    </div>
  </header>
  );
};

export default Header;