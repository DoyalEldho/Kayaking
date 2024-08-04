const btn1=document.getElementById('learn-more1');
const btn2=document.getElementById('learn-more2');
const btn3=document.getElementById('learn-more3');
const article1=document.querySelector('.btn-more1');
const article2=document.querySelector('.btn-more2');
const article3=document.querySelector('.btn-more3');

btn1.addEventListener('click',myfn1);
btn2.addEventListener('click',myfn2);
btn3.addEventListener('click',myfn3);
function myfn1(){
    article1.classList.toggle('show1');
    if(article1.classList.contains('show1')){
      btn1.textContent='Read less';   
    }
    else{
        btn1.textContent='Read More';
    }

}
function myfn2(){
  article2.classList.toggle('show2');
  if(article2.classList.contains('show2')){
    btn2.textContent='Read less';   
  }
  else{
      btn2.textContent='Read More';
  }

}
function myfn3(){
  article3.classList.toggle('show3');
  if(article3.classList.contains('show3')){
    btn3.textContent='Read less';   
  }
  else{
      btn3.textContent='Read More';
  }

}

// product
// bags
const c_blue=document.getElementById('c-blue');
const c_offwhite=document.getElementById('c-offwhite');
const c_white=document.getElementById('c-white');

const img=document.getElementById('img')

c_blue.addEventListener('click',fnColor2);
c_offwhite.addEventListener('click',fnColor3);
c_white.addEventListener('click',fnColor1);

 function fnColor2() {
 img.classList.remove('card-img-default')
 img.classList.remove('card-img-offwhite')
 img.classList.add('card-img-blue');
}

function fnColor3(){
    img.classList.remove('card-img-default')
    img.classList.remove('card-img-blue');
    img.classList.add('card-img-offwhite');
}

function fnColor1(){
    img.classList.remove('card-img-blue');
    img.classList.remove('card-img-offwhite');
    img.classList.add('card-img-default');
}

// jackets
const jacket1=document.getElementById("jacket1");
const jacket2=document.getElementById("jacket2");
const jacket3=document.getElementById("jacket3");
const jack_img=document.getElementById("jack_img");

jacket1.addEventListener("click",myJack1);
jacket2.addEventListener("click",myJack2);
jacket3.addEventListener("click",myJack3);

function myJack1(){
   jack_img.classList.remove("card-img-jacket2");
   jack_img.classList.remove("card-img-jacket3");
   jack_img.classList.add("card-img-jacket1");
   
}

function myJack2(){
  jack_img.classList.remove("card-img-jacket1");
  jack_img.classList.remove("card-img-jacket3");
  jack_img.classList.add("card-img-jacket2");
  
}

function myJack3(){
  jack_img.classList.remove("card-img-jacket2");
  jack_img.classList.remove("card-img-jacket1");
  jack_img.classList.add("card-img-jacket3");
  
}

// cap
const cap1=document.getElementById("cap1");
const cap2=document.getElementById("cap2");
const cap3=document.getElementById("cap3");
const cap_img=document.getElementById("cap_img");

cap1.addEventListener("click",myCap1);
cap2.addEventListener("click",myCap2);
cap3.addEventListener("click",myCap3);

function myCap1(){
   cap_img.classList.remove("card-img-cap2");
   cap_img.classList.remove("card-img-cap3");
   cap_img.classList.add("card-img-cap1");
}

function myCap2(){
   cap_img.classList.remove("card-img-cap1");
   cap_img.classList.remove("card-img-cap3");
   cap_img.classList.add("card-img-cap2");
}

function myCap3(){
   cap_img.classList.remove("card-img-cap1");
   cap_img.classList.remove("card-img-cap2");
   cap_img.classList.add("card-img-cap3");
}

// ............................................
// Get the notification
  // Get the notification, overlay, and buttons
  var notification = document.getElementById("productNotification");
  var overlay = document.getElementById("overlay");
  var okBtn = document.querySelector(".ok-btn");
  var cancelBtn = document.querySelector(".cancel-btn");

  // Get the <span> element that closes the notification
  var closeBtn = document.getElementsByClassName("close")[0];

  // Show the notification and overlay when the product section is in view
  window.onscroll = function() {
    var productsSection = document.getElementById("products");
    var rect = productsSection.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      notification.style.display = "block";
      overlay.style.display = "block";
    } else {
      notification.style.display = "none";
      overlay.style.display = "none";
    }
  }

  // When the user clicks on <span> (x), close the notification and overlay
  closeBtn.onclick = function() {
    notification.style.display = "none";
    overlay.style.display = "none";
  }

  // When the user clicks on the Cancel button, close the notification and overlay
  cancelBtn.onclick = function() {
    notification.style.display = "none";
    overlay.style.display = "none";
  }

  // Optionally, you can close the notification if the user clicks outside of it
  overlay.onclick = function() {
    notification.style.display = "none";
    overlay.style.display = "none";
  }

  // When the user clicks on the OK button, close the notification and overlay (and perform any other actions you want)
  okBtn.onclick = function() {
    notification.style.display = "none";
    overlay.style.display = "none";
  }
  // .........................................

  // flip card on clicking toggle button
const check = document.getElementById('check');
const cards = document.querySelectorAll('.tog-card');

check.addEventListener('change', myFlip);

// function with  for each loop for cards
function myFlip() {
    if (this.checked) {
        cards.forEach(card => card.classList.add('flip'));
    } else {
        cards.forEach(card => card.classList.remove('flip'));
    }
}
