import React from 'react'
import {Link,Routes,Route,Outlet} from "react-router-dom";
function Product() {
  return (
    <div className='h95 fx'> 
      <aside className='fy w10 p3 bg52'>
        <Link to=".">Product1</Link>
        <Link to="product2">Product2</Link>
        <Link to="product3">Product3</Link>
      </aside>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Product;;