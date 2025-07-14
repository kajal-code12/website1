let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000); // Change every 3 seconds
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

showSlides();
