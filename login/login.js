import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getAuth,
GoogleAuthProvider,
signInWithPopup
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {

apiKey: "AIzaSyAv0iD_j4ROg5CL5DaGmMZfE8J7TdZ8jbg",

authDomain: "klazco-vps.firebaseapp.com",

projectId: "klazco-vps",

storageBucket: "klazco-vps.firebasestorage.app",

messagingSenderId: "357160450539",

appId: "1:357160450539:web:c48c68c56d693bad8301ae"

};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const provider = new GoogleAuthProvider();



document
.getElementById("googleLogin")
.onclick = async()=>{


try{


const result = await signInWithPopup(
auth,
provider
);


const user = result.user;


console.log(user);


alert(
"Welcome " + user.displayName
);


window.location.href="../dashboard/";



}

catch(error){

console.error(error);

alert(error.message);

}


};
