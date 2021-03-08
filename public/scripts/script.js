var formVragen = document.querySelectorAll('.formDiv');
var formBtn = document.querySelectorAll('.formBtn');
// var p = document.getElementById('nextIcons').querySelectorAll('p');
var form = document.querySelector('form');
var current_div = 0;
var instellingen = document.querySelector('.instellingen');
var filter = document.querySelector('.filter');




function showFilter(){
  filter.classList.remove('filter')
  filter.classList.add('laatFilterZien');
}


instellingen.addEventListener('click', showFilter);
























// var submitBtn = document.querySelector('submitBtn');
// form.onsubmit =()=>{return false}
//
// console.log(current_div);
// formVragen[current_div].style.display = "block";
// if (current_div == 0) {
//   formBtn[0].style.display = "none";
//   p[0].style.backgroundColor = "royalblue";
// }
//
//
// formBtn[1].onclick = () => {
//   current_div++;
//   var back_div = current_div - 1;
//   if ((current_div > 0) && (current_div < 3)) {
//     formBtn[0].style.display = "block";
//     formVragen[current_div].style.display = "block";
//     formVragen[back_div].style.display = "none";
//     p[current_div].style.backgroundColor = "royalblue";
//     p[back_div].style.backgroundColor = "#ededed";
//     if (current_div == 2) {
//       formBtn[1].innerHTML = "Let's play";
//     } else {
//       if (current_div > 2) {
//         form.onsubmit = () => {
//           return true
//         }
//       }
//     }
//   }
//
//   formBtn[0].onclick = () => {
//     if (current_div > 0) {
//       current_div--;
//       var back_div = current_div + 1;
//       formVragen[current_div].style.display = "block";
//       formVragen[back_div].style.display = "none";
//       p[current_div].style.backgroundColor = "royalblue";
//       p[back_div].style.backgroundColor = "#ededed";
//       if (current_div < 2) {
//         formBtn[1].innerHTML = "Volgende";
//       }
//     }
//     if (current_div == 0) {
//       formBtn[0].style.display = "none";
//     }
//   }
// }



// function volgendeForm() {
//   event.preventDefault();
// }
//
// volgendeBtn.addEventListener("click", volgendeForm);
