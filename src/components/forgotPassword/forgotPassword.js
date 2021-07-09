import React from 'react'

const forgotPassword = ({ forgotPass, sendPasswordReset, email, setEmail }) => {
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="forgotPassBtn"
          onClick={() => {
              sendPasswordReset(email)}}
        >
          Submit
        </button>
        <button className="forgotPassBtn" onClick={() => forgotPass(false)}>
          Go back
        </button>
      </div>
    </section>
  )
}
export default forgotPassword