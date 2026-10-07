import React, { useState } from 'react' //hook (specail variable
// rerender state variable usestate H/ook
function App3() {
    const [counter, setCounter] = useState(0);

    function handleClick1() {
        setCounter((ps) => ps + 1);
    }

    function handleClick2() {
        setCounter((ps) => ps - 1);
    }

    return (
        <section className='fyc bg1'>
            <div className='fxc b2'>
                <button className='btn3 fxc' onClick={handleClick1}>
                    +
                </button>
                <span style={{ width: "2rem", textAlign: "center" }}>{counter}</span>
                <button className='btn3 fxc' onClick={handleClick2}>
                    -
                </button>
            </div>
        </section>
    )
}

export default App3