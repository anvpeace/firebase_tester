
// import { timeStamp } from "console";
import {getFirestore, collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const form = document.getElementById("questionnaire");

function getRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

form.addEventListener(onclick("submit"), async(e) =>{
        e.preventDefault();

  const eng_proficiency = document.getElementById("eng-proficiency").value;
  const keyboard    = getRadioValue("radioDefault-keyboard");
  const consent     = document.getElementById("consent").value;
  const connection  = getRadioValue("radioDefault-connection");

  await addDoc(collection(db, "responses"), {
    eng_proficiency, keyboard, consent, connection,
    createdAt: serverTimestamp()
    
  })
});


