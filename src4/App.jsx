import { createContext } from "react";
import { Child_Gen1 } from "./components/Child_Gen1";

export const LoginContext = createContext();
export const DarkModeContext = createContext();

export function App() {
    return (
        <LoginContext.Provider value={false}>
            <DarkModeContext.Provider value={true}>
                <section className="hf fxc bg50 p2">
                    <div className="w51 fyc b1 p2">
                        <h2>
                            Use Context Demo
                        </h2>
                        <h3>
                            Level-A(Top-Level)
                        </h3>
                        <h3>
                            Context (global variable) for login status and Dark Mode
                            have been created here and value also given at this top level
                        </h3>
                        <Child_Gen1 />
                    </div>
                </section>
            </DarkModeContext.Provider>
        </LoginContext.Provider>
    );
}