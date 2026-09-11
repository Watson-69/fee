import React, { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi"; // Fixed capitalization

export function Footer() {
    const [stamp, setStamp] = useState(() => {
        const savedStamp = localStorage.getItem("Stamp");
        return savedStamp ? JSON.parse(savedStamp) : {};
    });

    console.log(stamp.section);
    return (
        <>
            <div className="fx fs2 p2" style={{
                height: "4rem",
                justifyContent: "space-between",
                alignItems: "center",
                position: "fixed",
                width: "100%",
                bottom: "0px",
                backdropFilter: "blur(10px)",
                borderTop: "1px solid silver",
            }}
            >
                <button className="btn1 fs3 fyc">
                    <BiMenu /> 
                </button>

                <div>
                    {stamp.section}_{stamp.roll_number}_{stamp.name}
                </div>
                <button className="btn1 fs3 fyc">
                    <BiMenu /> 
                </button>
            </div>
        </>
    );
}