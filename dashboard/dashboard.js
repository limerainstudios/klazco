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

same config here

};



const app = initializeApp(firebaseConfig);


const auth=getAuth(app);


const db=getFirestore(app);



onAuthStateChanged(auth, async(user)=>{


if(!user){

window.location.href="../login/";

return;

}



const ref=doc(
db,
"users",
user.uid
);


const snap=await getDoc(ref);


const data=snap.data();



document.getElementById("name").textContent=data.name;

document.getElementById("email").textContent=data.email;

document.getElementById("id").textContent=data.klazcoID;

document.getElementById("plan").textContent=data.plan;


});
