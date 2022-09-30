// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

// // Now you can use all slider methods like
// swiper.slideNext();
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
});


function regopen() {
  console.log(document.getElementById("regi").textContent)
  if (document.getElementById("regi").innerText=="Регистрация") {
      
      document.getElementsByClassName("regcont")[0].classList.add("regcont1")
      document.getElementsByClassName("back")[0].classList.add("back1")
      document.body.style.overflow="hidden"
  }
  else{
      document.getElementById("exit").classList.add("exit1")
      document.getElementsByClassName("back")[0].classList.add("back1")
  }
}

function exit() {
  document.getElementById("regi").textContent="Регистрация"
  regclose()
}

function regclose() {
  document.getElementById("exit").classList.remove("exit1")
  document.getElementsByClassName("regcont")[0].classList.remove("regcont1")
  document.getElementsByClassName("back")[0].classList.remove("back1")
  document.body.style.overflow=""
}

eye=0
function glaz() {
  if (eye==0) {
  document.getElementById("glaz").classList.add("glaz2")
  document.getElementById("glaz").classList.remove("glaz")
  document.getElementById("glaz").classList.add("glaz1")
  document.getElementById("glaz").classList.remove("glaz2")
  document.getElementById("pass1").setAttribute("type","")
  document.getElementById("pass2").setAttribute("type","")
  eye++
  }
  else{
      document.getElementById("glaz").classList.add("glaz3")
  document.getElementById("glaz").classList.remove("glaz1")
  document.getElementById("glaz").classList.add("glaz")
  document.getElementById("glaz").classList.remove("glaz3")
  document.getElementById("pass1").setAttribute("type","password")
  document.getElementById("pass2").setAttribute("type","password")
  eye=0
  }

}

function pass() {
  if (document.getElementById("pass1").value!="") {
      if (document.getElementById("pass1").value == document.getElementById("pass2").value&&document.getElementById("pass1").value!=""){
          if (document.getElementById("fio").value!=""&&document.getElementById("login").value!="") {
              regclose() 
              document.getElementById("regi").textContent=document.getElementById("login").value  
             }
      }
      else {alert('Пароли не совпадают')}
      if (document.getElementById("pass1").value=="") {
          alert('Пароль не может быть пустым')
      }
  }

  else{
      alert('Пароль не может быть пустым')
  }
}

function kir() {
  let reg = /[a-zA-Z0-9]/g;
  
  if (!reg.test(document.getElementById("fio").value)) {
      
  } else {
      document.getElementById("fio").value=""

      alert('Используйте кириллицу')
  }

}

function log() {
  let reg = /[^a-zA-Z0-9]/g;
  
  if (!reg.test(document.getElementById("login").value)) {
      
  } else {
      document.getElementById("login").value=""

      alert('Используйте латиницу')
  }
}

