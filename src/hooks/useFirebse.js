import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

// initializeFirebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user  satate
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unsubscribe;

    }, [auth])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
            })
            .catch(error => {
                setAuthError('');
            })
            .finally(() => setIsLoading(false));
    }

    return {
        registerUser,
        user,
        logOut,
        loginUser,
        authError,
        isLoading
    }

}
export default useFirebase;