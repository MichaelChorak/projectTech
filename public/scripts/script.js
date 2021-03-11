var formVragen = document.querySelectorAll('.formDiv');
var formBtn = document.querySelectorAll('.formBtn');
var form = document.querySelector('form');
var current_div = 0;
var instellingen = document.querySelector('.instellingen');
var filter = document.querySelector('.filter');
var navFilter = document.querySelector('#menuIcon');
var navFilterMenu = document.querySelector('#menu');



function showFilter() {
  filter.classList.remove('filter')
  filter.classList.add('laatFilterZien');
}

function showNavFilter() {
  navFilterMenu.classList.toggle('laatMenuZien');
}






// instellingen.addEventListener('click', showFilter);
navFilter.addEventListener('click', showNavFilter);
