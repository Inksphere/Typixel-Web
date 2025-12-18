import { db } from "./firebase.js";
import { collection, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const blogsDiv = document.getElementById("blogs");

const snap = await getDocs(collection(db, "blogs"));
snap.forEach(doc => {
  const d = doc.data();
  blogsDiv.innerHTML += `
    <h3>${d.title}</h3>
    <p>${d.content}</p>
    <hr>
  `;
});
