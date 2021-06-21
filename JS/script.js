


function openNav() {
    document.getElementById("Header-nav").style.display = "block";
    document.getElementById("Header-nav").style.position = "absolute";
    document.getElementById("Header-nav").style.top = "-1em";
    document.getElementById("Header-nav").style.left = "0";
    document.getElementById("Header-nav").style.width = "70vw";
    document.getElementById("Header-nav").style.backgroundColor= "black";
    document.getElementById("Header-nav").style.backgroundImage= "linear-gradient(#9900cd,#ca0273)"
    document.getElementById("Header-nav").style.height= "100vh";
    document.getElementById("Myspecial").style.display = "none";
   // document.getElementById("Header-nav").style.padding = "1em";


  }
  function closeNav() {
    document.getElementById("Header-nav").style.display = "none";
   // document.getElementById("Myspecial").style.width = "0";
    document.getElementById("Myspecial").style.display = "block"
  }

  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
  