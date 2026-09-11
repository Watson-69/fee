import React, { useState } from 'react';

function Stamp() {
    const [msg, setMsg] = useState("");

    const stamp = {
        section: "G4",
        roll_number: "0907",
        name: "MAULIK"
    };

    function handleClick() {
        // Removed unnecessary localStorage.getItem("Stamp") call
        localStorage.setItem("Stamp", JSON.stringify(stamp));
        setMsg("updated");
    }

    return (
        <div className='box2 mt2'>
            <h3>We have got stamp data</h3>
            <br />
            {msg === "" && <button onClick={handleClick}>Click here</button>}
            {msg === "updated" && <p className='bg1 p1'>Stamp Created Succesfully</p>}
        </div>
    );
}

export default Stamp;