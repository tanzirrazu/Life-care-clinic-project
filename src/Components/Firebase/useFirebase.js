import { getAuth, signInWithPopup, GoogleAuthProvider,  GithubAuthProvider, updateProfile, signInWithEmailAndPassword , onAuthStateChanged , signOut, createUserWithEmailAndPassword   } from "firebase/auth";

import  { useEffect, useState } from 'react';
import initialization from "./firebase.init";
initialization()
const useFirebase = () => {
// name handel state
const [name, setName] = useState('')
// Google sign in State
const [user, setUser] = useState({})
// error state
    const [error, setError] = useState('')
// eamil state
const [email, setEmail] = useState('')
// password state
const [password, setPassword] = useState('')

    const auth = getAuth();
    const githubProvider = new GithubAuthProvider()
    const googleProvider = new GoogleAuthProvider();
    // Google sign in
    const googleSignIn = () =>{
      return signInWithPopup(auth, googleProvider)
      .catch(error => {
        setError(error.message)
    })
    }
    //  github sign in
    const githubSignIn = () =>{
      return  signInWithPopup (auth, githubProvider)
        .catch(error => {
            setError(error.message)
        })
    }

// handel registration
const handelRegistration =(e)=>{
    e.preventDefault()
    if(password.length < 6){
        setError('Password must be 6 chacrecter')
        return;
    }
    // two charecter must be uppercase
    if(/(?=.*[A-Z].*[A-Z]) /.test(password)){
        setError('Password Must Contain Two Uppercase')
        return;
    }
    createEamilPasswrod()

}
const createEamilPasswrod=()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        setUser(result.user)
        // clear the error
        setError('')
        setUserName()
    })
    .catch(error => {
        setError(error.message)
    })
}
// sign in with email
const signInWithEmail =() =>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        setUser(result.user)
        console.log(result.user);
    })
    .catch(error => {
        setError(error.message)
    })
}
//  update name
const setUserName = ()=>{
    updateProfile(auth.currentUser, {displayName: name })
    .then(res =>{

    })
}
// name handel
const nameHandel =(e)=>{
    setName(e.target.value)
}
// email handel click
    const handelEmail =(e)=>{
        setEmail(e.target.value)


    }
    // password handel click
    const handelPassword =(e)=>{
        setPassword(e.target.value)
  

    }
// log out handel
const logOut =()=>{
    signOut(auth )
    .then(()=>{
        setUser({})
    })
    }
// state change handel
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
        })
    },[auth])
   return{
       user,
       error,
       googleSignIn,
       handelEmail,
       handelPassword,
       logOut,
       handelRegistration,
       createEamilPasswrod,
       signInWithEmail,
       nameHandel,
       githubSignIn,

   }
};

export default useFirebase;