import React, { useEffect } from 'react';

export const UserContext = React.createContext();

const UserProvider = (props) => {
    const [user, setUser] = React.useState(() => {
        // Initialize user from LocalStorage or set to an empty array if it doesn't exist
        const storeduser = localStorage.getItem('user');
        return storeduser ? JSON.parse(storeduser) : [];
    });

    useEffect(() => {
        // Update LocalStorage whenever user changes
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;