document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Add scroll event to show or hide the button
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Add click event to scroll to the top
    scrollToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    const searchField = document.getElementById('searchfield');
    const searchForm = document.querySelector('.search-form');
    const searchIcon = document.querySelector('.search-icon');
    const clearIcon = document.querySelector('.clear-icon');

    searchField.addEventListener('input', function () {
        if (searchField.value) {
            searchIcon.style.display = 'none';
            clearIcon.style.display = 'block';
        } else {
            searchIcon.style.display = 'block';
            clearIcon.style.display = 'none';
        }
    });

    clearIcon.addEventListener('click', function () {
        searchField.value = '';
        searchIcon.style.display = 'block';
        clearIcon.style.display = 'none';
        searchField.focus();
    });

    document.addEventListener('click', function (event) {
        if (!searchForm.contains(event.target)) {
            searchField.value = '';
            searchIcon.style.display = 'block';
            clearIcon.style.display = 'none';
        }
    });

    let theme = 'light';

    function toggleTheme() {
        if (theme === 'light') {
            theme = 'dark';
            document.body.classList.add('dark-mode');
            document.getElementById('light-mode').style.display = 'block';
            document.getElementById('dark-mode').style.display = 'none';
            //vừa xóa black dòng dưới
            document.querySelector('.header-container').style.background = '';
        } else {
            theme = 'light';
            document.body.classList.remove('dark-mode');
            document.getElementById('light-mode').style.display = 'none';
            document.getElementById('dark-mode').style.display = 'block';
            document.querySelector('.header-container').style.background = '';
        }
    }

    document.getElementById('light-mode').addEventListener('click', toggleTheme);
    document.getElementById('dark-mode').addEventListener('click', toggleTheme);
});

let slideIndex = 1;
showSlides(slideIndex);

// Tự động chuyển slide sau mỗi 3 giây
setInterval(() => {
  plusSlides(1);
}, 3000);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  if (dots.length > 0) {
    dots[slideIndex-1].className += " active";
  }
}