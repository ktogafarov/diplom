const firebaseConfig = {
    apiKey: "AIzaSyCAnGGyHidcbhLuaIpkZN_92USfgXddKEk",
    authDomain: "contactform-aef4d.firebaseapp.com",
    databaseURL: "https://contactform-aef4d-default-rtdb.firebaseio.com",
    projectId: "contactform-aef4d",
    storageBucket: "contactform-aef4d.appspot.com",
    messagingSenderId: "850499234345",
    appId: "1:850499234345:web:f1c2334f79507601274a38"
};

//инициализация базы данных
firebase.initializeApp(firebaseConfig);

//ссылка на базу данных
var contactFormDB = firebase.database().ref('contactForm');

var DB = firebase.database();




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

    //записываем в переменные значения введенные в форму 
    var second_name = getElementVal('second_nameID');
    var email = getElementVal('emailID');
    var password = getElementVal('passwordID');

    saveMessages(second_name, name, email, password);

    //   показать оповещение
    document.querySelector(".alert").style.display = "block";

    //   удаление оповещения
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();


}

const saveMessages = (second_name, name, email, password) => {
    //добавление элементов в массив
    var newContactForm = contactFormDB.push();

    //сохранение данных
    newContactForm.set({
        second_name: second_name,
        name: name,
        email: email,
        password: password,
    });


    
}

function getElementVal(id) {
    return document.getElementById(id).value;
}