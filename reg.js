const firebaseConfig = {
    apiKey: "AIzaSyCAnGGyHidcbhLuaIpkZN_92USfgXddKEk",
    authDomain: "contactform-aef4d.firebaseapp.com",
    databaseURL: "https://contactform-aef4d-default-rtdb.firebaseio.com",
    projectId: "contactform-aef4d",
    storageBucket: "contactform-aef4d.appspot.com",
    messagingSenderId: "850499234345",
    appId: "1:850499234345:web:f1c2334f79507601274a38"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference database
var contactFormDB = firebase.database().ref('contactForm');

// contactFormDB.once("value",function(snapshot)){
//     snapshot.forEach(function(element)){
//         document.querySelector('#contactForm').innerHTML += '
//         <div>${element.val()}</div>
//         '
//     };
// }

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('nameID');
    var second_name = getElementVal('second_nameID');
    var email = getElementVal('emailID');

    saveMessages(second_name, name, email);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (second_name, name, email) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        second_name: second_name,
        name: name,
        email: email,
    });
}

function getElementVal(id) {
    return document.getElementById(id).value;
}