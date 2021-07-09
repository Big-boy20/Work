
import React, { useState, useEffect } from 'react'
import { fire, storage } from '../fire'

const Profile = () => {
  const [currentUser, setCurrentUser] = useState('')
  const [image, SetImage] = useState(null)
  const [newPass, setNewPass] = useState(null)

  const handleChangeImg = (e) => {
    if (e.target.files[0]) {
      SetImage(e.target.files[0])
    }
  }

  let imgURL = ''
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error)
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            imgURL = url
            // console.log(url)
            currentUser.updateProfile({
              photoURL: url,
            })
            window.location.reload()
          })
      }
    )
  }

  const log = () => {
    // console.log('image:',image)
    console.log(currentUser.email)
    console.log(currentUser.photoURL)
    console.log(currentUser.displayName)
    console.log(currentUser.uid)
    console.log(currentUser.providerId)
    console.log(imgURL)
  }

  function setNewName() {
    currentUser
      .updateProfile({
        displayName: 'Yaroslav',
      })
      .then(() => {})
      .catch((error) => {})
  }

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  const setNewPasswordfromInput = (e) => {
    setNewPass(e.target.value)
    // console.log(newPass)
  }
 //   const newPassword = getASecureRandomPassword();
  const setNewPassword = (pass) => {
    currentUser
      .updatePassword(pass)
      .then(() => {
        console.log('Update successful')
      })
      .catch((error) => {
        console.log('Update not successful',error)
      })
  }

  return (
    <div className="wrap">
      <div className="profile">
        <div className="imageBlock">
          <div
            className="img"
            style={{
              backgroundImage: `url(${currentUser.photoURL})`,
            }}
          >
            {/* <input className='fileInput' type="file" onChange={handleChangeImg} /> */}
            <div className="input__wrapper">
              <input
                name="file"
                type="file"
                name="file"
                id="input__file"
                className="input input__file"
                multiple
                onChange={handleChangeImg}
              />
              <label for="input__file" className="input__file-button">
                <span className="input__file-icon-wrapper">
                  <img
                    className="input__file-icon"
                    src="https://image.flaticon.com/icons/png/512/70/70059.png"
                    alt=""
                    width="25"
                  ></img>
                </span>
                <span className="input__file-button-text">Выберите файл</span>
              </label>
            </div>
          </div>

          <button className="imgInput" onClick={handleUpload}>
            Upload
          </button>
          {/* <button onClick={log}>Logs</button> */}
        </div>

        <div className="rightBlock">
          <div className="text">
            <p>Name:</p>
            <p>{currentUser.displayName}</p>
            {/* <button onClick={setUserName} /> */}
          </div>
          <div className="text">
            <p>Email:</p>
            <p>{currentUser.email}</p>
          </div>
          <div className="text">
            <p>UserID:</p>
            <p>{currentUser.uid}</p>
          </div>
          <div className="text">
            <p>ProviderId:</p>
            <p>{currentUser.providerId}</p>
          </div>
          <div className="PasswordCont">
            <p>
              {/* {newPass} */}
              Password:
            </p>
            <input type="password" onChange={setNewPasswordfromInput}></input>
            <button className="passBtn" onClick={() => setNewPassword(newPass)}>
              Сhange
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile