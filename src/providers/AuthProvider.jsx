import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext=createContext(null);
import { useState } from "react";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState();
    const[loading,setLoading]=useState(true);
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    
    }
    const logInWithGoogle=()=>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    const updateUserProfile=(name,photoUrl)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
          });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            
          });
            return ()=>{
               return unsubscribe();
            }
    },[])
    const authInfo={user,loading,logIn,logOut,createUser,logInWithGoogle,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;