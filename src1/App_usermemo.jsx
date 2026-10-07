import React, { useMemo, useState } from 'react';

function App_usermemo() {
    const [count, setCount] = useState(0);

    function calculateSum() {
        console.log("Calculation started...");
        let total = 0;
        for (let i = 0; i < 5000; i++) {
            total += i;
        }
        return total;
    }
    // const result = useMemo(() => {
    //     return calculateSum();
    // }, []);
    const result=calculateSum();

    return (
        <div className='hf bg5 p2 box2'>
            <h2 className='mb2'> Demo of useMemo hook</h2>
            <h3>Sum of numbers from 0 to 5000</h3>
            <h3 className='box1 bg4 fyc'>Result : {result}</h3>
            <button className='btn2 fs3' onClick={() => setCount(count + 1)}>
                Counter+1
            </button>
            <span className='mt2 sp3 fs3'>
                <strong>{count}</strong>
            </span>
            <h3 className='mt2'>
                Now click the counter and check console for messages regarding how many times calculation started.
            </h3>
        </div>
    );
}

export default App_usermemo;