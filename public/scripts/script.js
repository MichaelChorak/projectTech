var hamburger = document.querySelector('button');
var hamburgerMenu = document.querySelector('#menu');

function menu(){
  console.log('testjoh');

  hamburgerMenu.animate([
    //keyframes
    {transform: 'translateX(20%)'}
    ], {
    //timing options
    duration: 1000,
    fill: "forwards",
    easing: "ease-in"
  });

  
}

hamburger.addEventListener('click', menu);
