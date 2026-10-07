import React from 'react'
import { useNavigate } from 'react-router-dom';
function P404() {
  return (
    <section className='h95 fyc'>
        <div className='box2 p2 bg50 fy jsb'>
            <div style={{textAlign:"center"}}>
                <h1 style={{color:"yellow"}}> 404 </h1>
                <h4>
                    We dont hvae the page requested by ypu
                    <br/> May bne under construction
                </h4>
            </div>
            <button onClick={()=> navigate("/")}>Go Home</button>
        </div>
    </section>
  );
}

export default P404