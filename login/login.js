import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getAuth,
GoogleAuthProvider,
signInWithPopup
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import { 
getFirestore,
doc,
setDoc,
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

appId: "1:357160450539:web:c48c68c56d693bad8301ae"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);



const provider = new GoogleAuthProvider();




// Google Login Button

document
.getElementById("googleLogin")
.onclick = async()=>{


try{


// Open Google Login

const result = await signInWithPopup(
auth,
provider
);



const user = result.user;



console.log("Logged in:", user);




// Check if user already exists

const userRef = doc(
db,
"users",
user.uid
);


const userSnap = await getDoc(userRef);





if(!userSnap.exists()){


// Create new Klazco account


const klazcoID =

"001-" +

Math.floor(
100 + Math.random() * 900
)

+

"-" +

Math.floor(
100 + Math.random() * 900
);



await setDoc(userRef, {


name: user.displayName,


email: user.email,


photo: user.photoURL,


klazcoID: klazcoID,


plan: "No Plan",


servers: [],


createdAt: new Date()


});



console.log(
"New Klazco account created"
);



}

else{


console.log(
"Existing Klazco account"
);


}




alert(
"Welcome " + user.displayName
);



// Go dashboard

window.location.href="../dashboard/";



}


catch(error){


console.error(error);


alert(
"Login failed: " + error.message
);


}


};
