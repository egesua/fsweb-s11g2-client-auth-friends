import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {

    const { logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut();
    }



    return (
        <header>
            <h2>Friends Database</h2>
            <nav>
                <NavLink to="/login">
                    Login
                </NavLink>
                <NavLink to="/friends">
                    Friend List
                </NavLink>
                <NavLink to="/friends/add">
                    Add Friend
                </NavLink>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </header>
    )
}

export default Header;