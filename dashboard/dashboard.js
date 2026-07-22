import { initializeApp }
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {
getAuth,
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
getFirestore,
doc,
getDoc
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {

apiKey: "AIzaSyAv0iD_j4ROg5CL5DaGmMZfE8J7TdZ8jbg",

authDomain: "klazco-vps.firebaseapp.com",

projectId: "klazco-vps",

storageBucket: "klazco-vps.firebasestorage.app",

messagingSenderId: "357160450539",

appId: "1:357160450539:web:c48c68c56d693bad8301ae",

measurementId: "G-9NW857W51Q"

};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);



onAuthStateChanged(auth, async(user)=>{


if(!user){

console.log("No user logged in");

window.location.href="../login/";

return;

}



console.log("Logged in user:", user.email);



const ref = doc(
db,
"users",
user.uid
);



const snap = await getDoc(ref);



if(snap.exists()){


const data = snap.data();



console.log("User data:", data);



document.getElementById("name").textContent = data.name;


document.getElementById("email").textContent = data.email;


document.getElementById("id").textContent = data.klazcoID;


document.getElementById("plan").textContent = data.plan;



}

else{


console.log("No Firestore profile found");


}


});
