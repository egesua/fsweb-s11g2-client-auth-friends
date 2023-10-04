import { createContext } from "react";
import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage"
import { useHistory } from "react-router-dom";

const AuthContextProvider = ({children}) => {

    const [authUser, setAuthUser] = useLocalStorage("s11g2", {});
    const history = useHistory();

    const login = (loginFormData) => {
        axios.post("http://localhost:9000/api/login", loginFormData)
    .then(res => {
        setAuthUser(res.data);
        history.push("/friends");
    })
    .catch(err => {
        console.error(err.response.message);
    });
    }

    const logOut = () => {
        axios.post("http://localhost:9000/api/logout", null, {
            headers: { authorization: authUser.token },
          })
    .then(res => {
        setAuthUser({});
    })
    .catch(err => {
        console.error(err.response.message);
    });
    }
    
    return(
        <AuthContext.Provider value={{login, authUser, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContext = createContext();

export default AuthContextProvider;