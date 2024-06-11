let score = 0;
let logo = document.querySelector('.logo');
let closeHeader = document.querySelector('.close');
let progress = document.querySelector('.progress');
let plusPoint = document.querySelector('.point');


function hide(){
document.getElementById('ccl').style.animation = 'out 1s forwards';
document.getElementById("section").style.animation = "blur 1s forwards";
document.getElementById("header").style.animation = "blur 1s forwards";
document.getElementById("aside").style.animation = "blur 1s forwards";
}

logo.addEventListener('click',()=>{
    document.querySelector('header').style.animation ="slide 1s forwards"
})
closeHeader.addEventListener('click',()=>{
    document.querySelector('header').style.animation ="slideBack 1s forwards"
})

function slide(){
document.getElementById("header").style.animation = "slide 1s";
document.getElementById("header").style.display = "inline-block";
}
function hideback(){
document.getElementById("header").style.animation = "slideback 1s forwards";
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev)
}


progress.style.width = '0vmin';
progress.style.transition = 'width 1s'
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  
  
  var expectedAnimal = ev.target.getAttribute('data-expected-animal');
  var seconexpect = ev.target.getAttribute('data-expected-2nd-animal');
  var thirdexperct = ev.target.getAttribute('third');
  
  document.getElementById(data).draggable = false ;


  if (document.getElementById(data).alt === expectedAnimal ||document.getElementById(data).alt === seconexpect || document.getElementById(data).alt === thirdexperct) {
    console.log('true');
    score+= 1;
    plusPoint.style.animation = 'none'; // Stop the previous animation
    void plusPoint.offsetWidth; // Trigger reflow to restart the animation
    plusPoint.style.animation = 'point 2s forwards ease';
    progress.style.width = (parseInt(progress.style.width) +  10 ) + 'vmin';
    

  } else {
    console.log('false');
  }

  console.log(score)
}

function dragAnimation(){
  let dragg = document.querySelectorAll('.Animal');
  clas.style.transform= 'rotateZ(45deg)';
  console.log('run')
}





