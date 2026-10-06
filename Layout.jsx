import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

function Layout() {
  const navigate = useNavigate();

  return (
    <nav className='bh5 bg50 p2 fsc jsb fsl'>
      <div>&#9812;</div>
      <div className='fx fss'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/store">Inventory</NavLink>
      </div>
      <button className='btn4 fxc fs5 bg50' onClick={() => navigate("/login")}>
        <IoMdLogOut />
      </button>
    </nav>
  );
}

export default Layout;