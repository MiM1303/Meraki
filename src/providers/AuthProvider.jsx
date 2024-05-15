import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';
import axios from "axios";

export const AuthContext  = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    // REGISTER USING EMAIL/PASSWORD
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, image) => {
        setLoading(false)
        return updateProfile(auth.currentUser, 
            {
                displayName: name, 
                photoURL: image
            })
    }


    // LOGIN USING EMAIL/PASSWORD
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SIGNOUT
    // useEffect(()=>{
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            
    //         setUser(currentUser);
    //         const userEmail = currentUser?.email || user.email;
    //         const loggedUser = {email: userEmail};
            
    //         console.log('current user', currentUser)
    //         setLoading(false);
            
    //         // if user exists then issue a token
    //         if(currentUser){
    //             axios.post('https://meraki-server.vercel.app/jwt', loggedUser, {withCredentials: true})
    //             .then(res => {
    //                 console.log('token response', res.data);
    //             })
    //         }
    //         else{
    //             axios.post('https://meraki-server.vercel.app/logout', loggedUser, {withCredentials: true})
    //             .then(res => {
    //                 console.log(res.data)
    //             })
    //         }
    //     })
    //     return ()=> unsubscribe();
    // },[])

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            const Email = currentUser?.email || user?.email;
            const loggedMail = {email: Email};
            setUser(currentUser);
            setLoading(false);

            if(currentUser){
                axios.post("https://meraki-server.vercel.app/jwt",loggedMail, {withCredentials: true})
                .then(res=>console.log(res.data))
            }
            else{
                axios.post("https://meraki-server.vercel.app/logout",loggedMail, {withCredentials: true})
                .then(res=>console.log(res.data))
            }
        })
        return ()=> unsubscribe();
    },[])

    const logOut = () =>{
        return signOut(auth);
    }

    // GOOGLE LOGIN
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const AuthInfo = {
        user,
        login,
        googleLogin,
        logOut,
        loading,
        setUser,
        createUser,
        updateUserInfo
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;