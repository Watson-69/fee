import { useContext } from "react";
import { LoginContext } from '../App';
import { Child_Gen2 } from './Child_Gen2';
export function Child_Gen1() {
    const login = useContext(LoginContext);
    return (
        <div className="b1 fyc bg51 p3">
            <h3> Level-B:child of Level-A</h3>
            <h2 style={{ color: 'yellow' }}>
                Value of Login Status is : {login ? 'logged in' : 'logged out'}
            </h2>
            <h4> Shown Login Status using Context created at Level-A</h4>
            <Child_Gen2 />
        </div>
    );
}