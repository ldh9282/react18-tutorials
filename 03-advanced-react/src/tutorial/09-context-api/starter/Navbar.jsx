import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

const isDebugEnabled = true;

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
    const [user, setUser] = useState({ name: "BOB" });

    const logout = () => {
        if (isDebugEnabled) {
            console.log("logout >>> ");
        }
        setUser(null);
    };

    return (
        // 자식에게만 useContext 넘길수있음
        <NavbarContext.Provider value={{ user: user, logout: logout }}>
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    );
};
export default Navbar;
