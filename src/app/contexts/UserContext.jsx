'use client';
import { createContext } from "react";

export const UserContext = createContext({}); 

const UserProvider = ({children}) => {
    return (
        <div>

            <UserContext.Provider value={{user:'sb shaon', isLoggedIn: true}}>
                {children}
            </UserContext.Provider>
            
        </div>
    );
};

export default UserProvider;