import {createContext,useState} from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const userValue = {currentUser, setCurrentUser,isAuthenticated,setIsAuthenticated};

    return <UserContext.Provider value = {userValue}>{children}</UserContext.Provider>

}