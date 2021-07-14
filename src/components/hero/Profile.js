import React, { useState, useEffect } from 'react'
import { fire, storage } from '../fire'

const Profile = () => {
  const [currentUser, setCurrentUser] = useState('')
  const [image, SetImage] = useState(null)
  const [newPass, setNewPass] = useState(null)
  const [wantTosetNewName, setWantTosetNewName] = useState(false)
  const [wantTosetNewEmail, setWantTosetNewEmail] = useState(false)
  const [newName, setNewName] = useState(null)
  const [newEmail, setNewEmail] = useState(null)

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

  // function setNewName() {
  //   currentUser
  //     .updateProfile({
  //       displayName: 'Yaroslav',
  //     })
  //     .then(() => {})
  //     .catch((error) => {})
  // }

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
        console.log('Update not successful', error)
      })
  }

  const setNewNamefromInput = (e) => {
    setNewName(e.target.value)
  }

  const setingNewName=(str)=>{
    currentUser.updateProfile({
      displayName: `${str}`,
    }).then(() => {
      console.log('Update successful') 
    }).catch((error) => {
      console.log('Update not successful')
    });  
    setWantTosetNewName(false)
    window.location.reload()
  }
  const setNewEmailfromInput = (e) => {
    setNewEmail(e.target.value)
  }

  const setingNewEmail=(str)=>{
    currentUser.updateEmail(`${str}`).then(() => {
      console.log('Update successful')
    }).catch((error) => {
      console.log('Update not successful')
    });
    setWantTosetNewEmail(false)
    window.location.reload()
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

            {!wantTosetNewName ? (
              <div className="strCont">
                <p>{currentUser.displayName}</p>
                <button
                  className="passBtn NameBtn"
                  onClick={() => setWantTosetNewName(true)}
                >
                  Сhange
                </button>
              </div>
            ) : (
              <div className="strCont">
                <input
                  className="changeInput"
                  onChange={setNewNamefromInput}
                ></input>
                <button
                  className="passBtn NameBtn"
                  onClick={() => setingNewName(newName)}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
          <div className="text">
            <p>Email:</p>

            {!wantTosetNewEmail ? (
              <div className="strCont">
                <p>{currentUser.email}</p>
                <button
                  className="passBtn EmailBtn"
                  onClick={() => setWantTosetNewEmail(true)}
                >
                  Сhange
                </button>
              </div>
            ) : (
              <div className="strCont">
                <input
                  className="changeInput"
                  onChange={setNewEmailfromInput}
                ></input>
                <button
                  className="passBtn EmailBtn"
                  onClick={() => setingNewEmail(newEmail)}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
          {/* <div className="text">
            <p>UserID:</p>
            <p>{currentUser.uid}</p>
          </div>
          <div className="text">
            <p>ProviderId:</p>
            <p>{currentUser.providerId}</p>
          </div> */}
          <div className="PasswordCont">
            <p>Password:</p>
            <input type="password" onChange={setNewPasswordfromInput}></input>
            <button
              className="passBtn passBTN"
              onClick={() => setNewPassword(newPass)}
            >
              Сhange
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
