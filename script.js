var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const homeLink = document.getElementById('home-link');
    const productsLink = document.getElementById('products-link');
    const aboutUsLink = document.getElementById('about-us-link');
    const contactUsLink = document.getElementById('contact-us-link');

    homeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартное поведение ссылки
      window.scrollTo({
        top: 0, 
        behavior: 'smooth' // Плавная прокрутка
      });
    });

    productsLink.addEventListener('click', function(event) {
      event.preventDefault();
      const productsSection = document.getElementById('products');
      window.scrollTo({
        top: productsSection.offsetTop,
        behavior: 'smooth'
      });
    });

    aboutUsLink.addEventListener('click', function(event) {
      event.preventDefault();
      const aboutUsSection = document.getElementById('about-us');
      window.scrollTo({
        top: aboutUsSection.offsetTop,
        behavior: 'smooth'
      });
    });

    contactUsLink.addEventListener('click', function(event) {
      event.preventDefault();
      const footerSection = document.getElementById('footer');
      window.scrollTo({
        top: footerSection.offsetTop,
        behavior: 'smooth'
      });
    });











