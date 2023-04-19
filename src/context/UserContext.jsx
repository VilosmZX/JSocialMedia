import { createContext, useContext, useEffect, useState } from "react";
import axios, { HttpStatusCode } from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                console.log('Bitch');
                if (response.status === HttpStatusCode.Ok) setUser(response.data[0]);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const data = {
        user,
        loading
    };

    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext);