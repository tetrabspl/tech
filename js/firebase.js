<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA-znZNn5CacpV6N3F7RDNlVzzBbU",
    authDomain: "tetratech-13e3e.firebaseapp.com",
    projectId: "tetratech-13e3e",
    storageBucket: "tetratech-13e3e.appspot.com",
    messagingSenderId: "774881231618",
    appId: "1:774881231618:web:3899d93b28a45be09f8b1b"
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
</script>
