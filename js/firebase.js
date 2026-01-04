// Load Firebase v8 SDKs
var script1 = document.createElement("script");
script1.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
document.head.appendChild(script1);

var script2 = document.createElement("script");
script2.src = "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js";
document.head.appendChild(script2);

script2.onload = function () {
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
