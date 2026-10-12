import { useContext } from "react";
import { DarkModeContext } from '../App';
export function Child_Gen2(){
    const darkMode=useContext(DarkModeContext);
    return(
        <div className="b1 fyc bg52 p3">
            <h3>Level C:Child of level-B</h3>
            <h2 style={{color:'yellow'}}>
                Value of Dark Mode is : {darkMode ? 'ON' : 'OFF'}
            </h2>
            <h4>Shown Value of Dark Mode using Context created at Level-A</h4>
        </div>
    );
}