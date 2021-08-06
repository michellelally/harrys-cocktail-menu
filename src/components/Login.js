import React, { useState } from 'react';
import firebase from '../firebase';
import { auth } from '../firebase';
import List from './List'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

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
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                setLoggedIn(true);
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    const signOut = () => {
        firebase.auth().signOut().then(function () {
            setLoggedIn(false);
        }).catch(function (error) {
            console.log(error.message);
        });

    }

    return (
        <div className='container'>
            <br></br> <br></br> <br></br> <br></br> <br></br>
            {loggedIn ? (
                <div>
                    <button className="button" onClick={signOut}> Log out </button>
                    <List />
                </div>
            ) : (
                    <div className="signin">
                        <h1>Sign in</h1>
                        <h6>{errorMsg}</h6>
                        <form action="">
                            <input
                                type="email"
                                value={email}
                                placeholder="Email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                value={password}
                                placeholder="Password"
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="button" onClick={signIn}>Sign in</button>
                        </form>
                    </div>
                )}
        </div>
    )
}
export default SignIn;