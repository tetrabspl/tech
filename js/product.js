// Firestore reference
const db = firebase.firestore();

// URL se product id lo
const params = new URLSearchParams(window.location.search);
const appId = params.get("id");

if (!appId) {
  alert("Invalid App");
}

// Firestore se data lao
db.collection("apps").doc(appId).get()
  .then(doc => {
    if (!doc.exists) {
      alert("App not found");
      return;
    }

    const p = doc.data();

    // Text data set karo
    document.getElementById("appName").innerText = p.name;
    document.getElementById("shortDesc").innerText = p.shortDesc;
    document.getElementById("fullDesc").innerText = p.fullDesc;
    document.getElementById("price").innerText = p.price;

    // Screenshots slider
    const imageBox = document.getElementById("imageBox");
    imageBox.innerHTML = "";

    p.screenshots.forEach((url, index) => {
      imageBox.innerHTML += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${url}" class="d-block w-100"
               style="max-height:400px;object-fit:contain">
        </div>
      `;
    });
  })
  .catch(err => {
    alert("Error loading app: " + err.message);
  });
