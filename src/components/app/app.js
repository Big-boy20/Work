import React, { useState, useEffect } from 'react'
import {fire} from '../fire'
import Login from '../login/login'
import Hero from '../hero/hero'
import ForgotPassword from '../forgotPassword/forgotPassword'
import './app.css'
const USER_STATE = ['UNAUTHORIZED', 'AUTHORIZED', 'DEFAULT']

const App = () => {
  const [user, setUser] = useState(USER_STATE[2])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [forgotPassword, setForgotPassword] = useState(false)
  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message)
            break
          case 'auth/wrong-password':
            setPasswordError(err.massage)
            break
          default:
            break
        }
      })
  }

  const handleLogout = () => {
    // debugger
    fire.auth().signOut()
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user === null) setUser(USER_STATE[2])
      if (user) {
        clearInputs()
        setUser(USER_STATE[1])
      } else {
        setUser(USER_STATE[0])
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  const forgotPass = (value) => {
    setForgotPassword(value)
  }

  const sendPasswordReset = (email) => {
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        // ..
      })
  }

  return (
    <div className="App">
      {user === USER_STATE[1] ? (
        <Hero handleLogout={handleLogout} />
      ) : forgotPassword ? (
        <ForgotPassword
          forgotPass={forgotPass}
          sendPasswordReset={sendPasswordReset}
          email={email}
          setEmail={setEmail}
        />
      ) : user === USER_STATE[2] ? (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          emailError={emailError}
          passwordError={passwordError}
          forgotPass={forgotPass}
        />
      )}
    </div>
  )
}
export default App
