import React, { useState } from 'react';
import firebase from '../firebase';
import List from './List'

// this is responsible for authenticating the user so they can log

// to log in: 
// email: admin@harrys.ie
// password: h@77wlgc
const SignIn = () => {
    // here i used code from these tutorials: 
    // https://javascript.plainenglish.io/create-a-simple-authentication-form-with-react-and-firebase-f29f723b341c
    // https://blog.logrocket.com/user-authentication-firebase-react-apps/
    // and this github repository
    // https://github.com/mchigit/auth_form_react/tree/starter_code

    // variables and their setters
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // deals with changes the user makes whule inputting the details 
    // const onChangeHandler = (event) => {
    //     const { name, value } = event.currentTarget;

    //     if (name === 'userEmail') {
    //         setEmail(value);
    //     }
    //     else if (name === 'userPassword') {
    //         setPassword(value);
    //     }
    // };

    // signs in using firebase authentication 
    const signIn = e => {
        e.preventDefault();
        // calling a predefined signin method from the firebase library 
        // passing the email and password to check with the users credentials stored on firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                // if user logs in set loggedIn to true
                setLoggedIn(true);
            })
            .catch((error) => {
                setErrorMsg(error.message);
            });
    }

    // signs the user out of firebase
    const signOut = () => {
        // calling a predefined signout method from the firebase library 
        firebase.auth().signOut().then(function () {
            // if user logs in set loggedIn to false
            setLoggedIn(false);
        }).catch(function (error) {
            console.log(error.message);
        });

    }

    return (

        <div className='container'>
            <br></br> <br></br> <br></br> <br></br> <br></br>
            {/* if loggedIn is true */}
            {loggedIn ? (
                <div>
                    {/* display a signout button which calls the signOut method */}
                    <button className="button" onClick={signOut}> Log out </button>
                    {/* display a list component */}
                    <List />
                </div>
            ) : (

                    <div className="signin">
                        
                        <h1>Sign in</h1>
                        {/* display the error message from firebase if the credentials are incorrect  */}
                        <h6>{errorMsg}</h6>
                        {/* a from to get user input */}
                        <form action="">
                            {/* getting the email address */}
                            <input
                                type="email"
                                value={email}
                                placeholder="Email"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* getting the password */}
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