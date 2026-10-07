import React from 'react';

export function Child2({ count, setCount }) {
    function handleClick() {
        setCount((p) => p + 1);
    }

    return (
        <div className='bg30 p2 mt2 box1 fy jsb'> 
            <p>Child Component 2</p>
            <div>
                <button className='mt2 btn2' onClick={handleClick}>
                    Counter
                </button>
                <span className='sp2'>{count}</span>
            </div>
        </div>
    );
}

export default Child2;