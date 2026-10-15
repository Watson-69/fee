import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { BrowserRouter, Routes, Route, useNavigate, Link, NavLink } from "react-router-dom";

function NavBar(props) {
    const navigate = useNavigate();
    function handleLogout() {
        props.setLogin(false);
        navigate("/");
    }
    return (
        <>
            <div className="bh5 px2 fxc jsb" style={{ borderBottom: '1px solid grey' }}>
                <div className="fsl">&#9812;</div>
                {!props.login && (
                    <div className="fx p1">
                        <button onClick={() => navigate("/signin")} className='bg41'>
                            Signin
                        </button>
                        <button onClick={() => navigate("/signup")} className="bg51">
                            Signup
                        </button>
                    </div>
                )}
                {props.login && (
                    <div className="fxc p1">
                        <NavLink to='/page1'>Page1</NavLink>
                        <NavLink to='/page2'>Page2</NavLink>
                        <NavLink to='/page3'>Page3</NavLink>
                    </div>
                )}
                {props.login && (
                    <button onClick={handleLogout} className="btn4 fsl fxc bg20">
                        <IoMdLogOut />
                    </button>
                )}
            </div>
        </>
    );
}

function SignIn({ setLogin }) {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        setLogin(true);
        navigate("/page1");
    }
    return (
        <div className="h95 p2">
            <div className="card3 p2 fyc jsb bg42">
                <h3>SignIn</h3>
                Enter Credentials
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Authenticate
                </button>
            </div>
        </div>
    );
}

function SignUp() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        navigate('/signin');
    }
    return (
        <div className="h95 p2">
            <div className="card3 bg51 p2 fyc jsb">
                <h3>SignUp</h3>
                Enter details
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                    Register
                </button>
            </div>
        </div>
    );
}

export function App() {
    const [login, setLogin] = useState(false);
    return (
        <>
            <BrowserRouter>
                <NavBar login={login} setLogin={setLogin} />
                <Routes>
                    <Route index element={<h3 className="p2">Home Page</h3>} />
                    <Route path="/signin" element={<SignIn login={login} setLogin={setLogin} />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/page1" element={<h3 className="p2">Page One</h3>} />
                    <Route path="/page2" element={<h3 className="p2">Page Two</h3>} />
                    <Route path="/page3" element={<h3 className="p2">Page Three</h3>} />
                    <Route path="/*" element={<h3 className="p2">404: Page Not Found</h3>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}