// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("header");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }


 


var who_we_are = document.getElementById("who_we_are");
var what_we_do = document.getElementById("what_we_do")
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.onclick =  function hide() {
  if (what_we_do.style.display == "block") {
    who_we_are.style.display ="block";
    what_we_do.style.display = "none";
  } else {
    who_we_are.style.display ="block";
    what_we_do.style.display = "none";
  }
  btn1.style.background ="brown";
  btn2.style.background ="white";
  btn2.style.color ="black"
  btn1.style.color ="white"
};

btn2.onclick =  function hide2() {
  if (who_we_are.style.display == "block") {
    who_we_are.style.display = "none";
    what_we_do.style.display = "block"; 
  } 
  btn2.style.background ="brown";
  btn1.style.background ="white";
  btn1.style.color ="black"
  btn2.style.color ="white"
};

/**
   * Header fixed top on scroll
   */
 // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 0) {
   mybutton.style.display = "block";
 } else {
   mybutton.style.display = "none";
 }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}