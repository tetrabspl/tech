<script>
  // 🔐 Auth state check ke baad hi Firestore load hoga
  firebase.auth().onAuthStateChanged(function (user) {
    loadApps();
  });

  function loadApps() {
    const db = firebase.firestore();

    db.collection("apps")
      .where("active", "==", true)
      .get()
      .then(function (querySnapshot) {
        let html = "";

        querySnapshot.forEach(function (doc) {
          const app = doc.data();

          html += `
            <div class="col-md-4">
              <div class="card mb-4 shadow">
                <div class="card-body">
                  <h5 class="card-title">${app.name}</h5>
                  <p class="card-text">${app.desc}</p>
                  <button class="btn btn-primary"
                    onclick="startCheckout('${doc.id}')">
                    Buy ₹${app.price}
                  </button>
                </div>
              </div>
            </div>
          `;
        });

        document.getElementById("apps").innerHTML = html;
      })
      .catch(function (error) {
        console.error("Error loading apps:", error);
      });
  }

  function startCheckout(appId) {
    if (!firebase.auth().currentUser) {
      window.location.href = "login.html";
    } else {
      window.location.href = "checkout.html?id=" + appId;
    }
  }
</script>
