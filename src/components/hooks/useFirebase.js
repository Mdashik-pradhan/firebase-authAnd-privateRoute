import { GoogleAuthProvider, signOut , signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseConfig from "../../Firebase/firebase.config";
import initializeFirebaseAuth from "../../Firebase/firebase.initialize";

initializeFirebaseAuth(firebaseConfig);
const provider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const auth = getAuth();

    const googleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user);
            console.log(result.user)
        })
        .catch(error => {
            setError(error);
        })
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log(user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        googleLogin,
        logout
    }
}

export default useFirebase;