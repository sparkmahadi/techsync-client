import React, { createContext, useEffect } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user state updated', currentUser);
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, createNewUser, logIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;