import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyDLeIQCVXlfRKq6ufnKIXFk5-2W_EDkyTc",
    authDomain: "skyfoft-team-3.firebaseapp.com",
    databaseURL: "https://skyfoft-team-3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skyfoft-team-3",
    storageBucket: "skyfoft-team-3.appspot.com",
    messagingSenderId: "38608210628",
    appId: "1:38608210628:web:faa02f40281fc632c5d791"
  };

 const fire = firebase.initializeApp(firebaseConfig);
 export default fire