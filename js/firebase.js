// Firebase App (the core Firebase SDK)
const firebaseAppScript = document.createElement("script");
firebaseAppScript.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
document.head.appendChild(firebaseAppScript);

// Firebase Auth
const firebaseAuthScript = document.createElement("script");
firebaseAuthScript.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js";
document.head.appendChild(firebaseAuthScript);

firebaseAuthScript.onload = function () {
  var firebaseConfig = {
    apiKey: "AIzaSyA2-snzNhr5Cacpv6W63fe7RDN1WzzBBUo",
    authDomain: "tetratech-13e3e.firebaseapp.com",
    projectId: "tetratech-13e3e",
    storageBucket: "tetratech-13e3e.appspot.com",
    messagingSenderId: "774881231618",
    appId: "1:774881231618:web:3899d93b28a45be09fb81b"
  };

  firebase.initializeApp(firebaseConfig);
};
