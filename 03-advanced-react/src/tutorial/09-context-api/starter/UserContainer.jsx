import { useContext } from "react";
import { NavbarContext, useAppContext } from "./Navbar";

const UserContainer = () => {
    const isDebugEnabled = true;
    const { user, logout } = useAppContext();
    return (
        <div className="user-container">
            {user ? (
                <>
                    <p>Hello There, {user.name}</p>
                    <button type="button" className="btn" onClick={logout}>
                        logout
                    </button>
                </>
            ) : (
                <button
                    type="button"
                    className="btn"
                    onClick={() => alert("로그인 구현해야함")}
                >
                    login
                </button>
            )}
        </div>
    );
};
export default UserContainer;
