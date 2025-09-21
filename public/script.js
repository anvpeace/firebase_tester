import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
// import {collection, addDoc, serverTimestamp} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBIXlMvgRjH7mbi2ERH18PWQlyXxfWYT0I",
  authDomain: "test2-questionnaire.firebaseapp.com",
  projectId: "test2-questionnaire",
  storageBucket: "test2-questionnaire.firebasestorage.app",
  messagingSenderId: "136415138046",
  appId: "1:136415138046:web:1632c11d832e2d961a15af"

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// helper for radios
function getRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

const form = document.getElementById("questionnaire");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // read the values at submit time
  const eng_proficiency = document.getElementById("eng-proficiency").value;
  const consent = document.getElementById("consent").value;
  const keyboard = getRadioValue("radioDefault-keyboard");
  const connection = getRadioValue("radioDefault-connection");

  await addDoc(collection(db, "response-info"), { 
          eng_proficiency,
          keyboard,
          consent,
          connection,
          createdAt: serverTimestamp()

   });
    console.log("Thanks! Your response was saved.");
    form.reset();
  // write to Firestore (fixed path example; use addDoc if you want auto-IDs)
  // const docRef = doc(db, "form-responses", "response-info");
  //   await setDoc(docRef, {
  //     eng_proficiency,
  //     keyboard,
  //     consent,
  //     connection,
  //     createdAt: serverTimestamp()
  //   }, { merge: true });

  //   alert("Thanks! Your response was saved.");
  //   form.reset();
});
// const firestore = getFirestore();


// const eng_proficiency = document.getElementById("eng-proficiency").value;
// const keyboard    = getRadioValue("radioDefault-keyboard");
// const consent     = document.getElementById("consent").value;
// const connection  = getRadioValue("radioDefault-connection");

// function getRadioValue(name) {
//   const el = document.querySelector(`input[name="${name}"]:checked`);
//   return el ? el.value : null;
// }

// const userInfo =doc(firestore, 'response-info/oDahKzZh8zsMEvfHyh7j');

// function addUserResponse(){
//   const docData = {
//     eng_proficiency,
//     keyboard,
//     consent,
//     connection
//   };
//   setDoc(userInfo, docData, {merge: true});
// }
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// window.db = db;
// window.addDoc = addDoc;
// window.collection = collection;
// window.serverTimestamp = serverTimestamp;

// const form = document.getElementById("questionnaire");





// form.addEventListener("submit", async(e) =>{
//   e.preventDefault();

//   addUserResponse();
//   console.log("working");
// });

    // const eng_proficiency = document.getElementById("eng-proficiency").value;
  // const keyboard    = getRadioValue("radioDefault-keyboard");
  // const consent     = document.getElementById("consent").value;
  // const connection  = getRadioValue("radioDefault-connection");

  // window.db.collection("form_response").addDoc("JVUR2yAHuZhcQ2YzA3o6")
  //   {
  //     eng_proficiency, 
  //     keyboard, 
  //     consent, 
  //     connection,
  //     window.serverTimestamp
  //   }

  // console.log("Document written with ID: ", userChoices.id);
  // db.collection('responses').doc(' aMvtwILBTK09qxwrVqhI ').set(
  //   {
  //     eng_proficiency, 
  //     keyboard, 
  //     consent, 
  //     connection,
  //     createdAt: serverTimestamp()
  //   }
  // )

  // await addDoc(collection(db, "responses"), {
  //   eng_proficiency, keyboard, consent, connection,
  //   createdAt: serverTimestamp()
    
  // })



