// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCJEXCtazCUt7-oo5mQOEMX7p5h5ZV61To",
//     authDomain: "instantchats-c0990.firebaseapp.com",
//     projectId: "instantchats-c0990",
//     storageBucket: "instantchats-c0990.appspot.com",
//     messagingSenderId: "685469962695",
//     appId: "1:685469962695:web:d6a49506970725547a89e2"
//   };

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDeFsgy8gfdvqwz3iPsJ93KK0_ehevIbg0",
//     authDomain: "realchat-4a915.firebaseapp.com",
//     projectId: "realchat-4a915",
//     storageBucket: "realchat-4a915.appspot.com",
//     messagingSenderId: "34815397697",
//     appId: "1:34815397697:web:34897df7438638c3809bc0"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyBooB81EO7s4YddZYaxLeCvJ6lEjDuObDk",
    authDomain: "whatschat-bf7f9.firebaseapp.com",
    projectId: "whatschat-bf7f9",
    storageBucket: "whatschat-bf7f9.appspot.com",
    messagingSenderId: "548234225166",
    appId: "1:548234225166:web:9c0344f55babe564833e5f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBooB81EO7s4YddZYaxLeCvJ6lEjDuObDk",
//   authDomain: "whatschat-bf7f9.firebaseapp.com",
//   projectId: "whatschat-bf7f9",
//   storageBucket: "whatschat-bf7f9.appspot.com",
//   messagingSenderId: "548234225166",
//   appId: "1:548234225166:web:9c0344f55babe564833e5f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);