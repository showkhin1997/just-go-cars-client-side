import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

// initializeFirebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
            })
            .catch((error) => {
                setAuthError(error.message);

            })
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
    }

    // observe user  satate
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

        return () => unsubscribe;

    }, [auth])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        })
            .catch((error) => {
                // An error happened.
            })
    }

    return {
        registerUser,
        user,
        logOut,
        loginUser
    }

}
export default useFirebase;