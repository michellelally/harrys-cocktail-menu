import React, { useState, useRef } from 'react';
import firebase from '../firebase';
import { auth } from '../firebase';
import List from './List'

const SignIn = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState('false');

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };

    const signIn = e => {
        alert()
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword("shelley.lally@gmail.com", "h@77wlgc")
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                setLoggedIn('true');
                alert("signed in");
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert("not signed in");
                alert(errorMessage)
            });
    }



    return (
        <div className='container'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {loggedIn ? (
                <div>
                    <button className="button" onClick={() => auth.signOut()}> Log out </button>

                    <List />

                </div>
            ) : (

                    <div className="signin">
                        <form action=""><h1>Sign in</h1>
                            <input
                                type="email"
                                value={email}
                                placeholder="Email"
                                id="email"
                                onChange={(e) => setEmail(e.nativeEvent.text)}
                            />
                            <input
                                type="text"
                                value={password}
                                placeholder="Password"
                                id="password"
                                onChange={(e) => setPassword(e.nativeEvent.text)}
                            />
                            <button className="button" onClick={signIn}>Sign in</button>
                        </form>
                    </div>
                )}
        </div>
    )
}
export default SignIn;