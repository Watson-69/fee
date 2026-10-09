import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <nav className='bh5 bg50 p2 fxc jsb fsl'>
        <div>&#9812;</div>
        <div className='fss'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/inventory">Inventory</NavLink>
        </div>
        <button
          className='btn4 fxc fs5 bg0'
          onClick={() => navigate("/login")}
        >
          <IoMdLogOut />
        </button>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;