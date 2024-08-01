document.addEventListener('DOMContentLoaded', function() {
  let savedTheme = getCookie('theme');
  if (savedTheme === 'dark') {
      toggleTheme(); // Apply dark theme if it was saved
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Add scroll event to show or hide the button
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Add click event to scroll to the top
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const searchField = document.getElementById("searchfield");
  const searchForm = document.querySelector(".search-form");
  const searchIcon = document.querySelector(".search-icon");
  const clearIcon = document.querySelector(".clear-icon");

  searchField.addEventListener("input", function () {
    if (searchField.value) {
      searchIcon.style.display = "none";
      clearIcon.style.display = "block";
    } else {
      searchIcon.style.display = "block";
      clearIcon.style.display = "none";
    }
  });

  clearIcon.addEventListener("click", function () {
    searchField.value = "";
    searchIcon.style.display = "block";
    clearIcon.style.display = "none";
    searchField.focus();
  });

  document.addEventListener("click", function (event) {
    if (!searchForm.contains(event.target)) {
      searchField.value = "";
      searchIcon.style.display = "block";
      clearIcon.style.display = "none";
    }
  });

  // Function to set a cookie with a given name, value, and expiration time
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/WD-blogcanhan; domain=127.0.0.1";
}

// Function to get the value of a cookie by its name
function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(';');
  for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
      }
  }
  return null;
}

// Function to delete a cookie by its name
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// Toggle theme function with cookie integration
function toggleTheme() {
  let theme;
  if (getCookie('theme') === 'dark') {
      theme = 'light';
      document.body.classList.remove('dark-mode');
      document.getElementById('light-mode').style.display = 'none';
      document.getElementById('dark-mode').style.display = 'block';
      document.querySelector('.header-container').style.background = '';
  } else {
      theme = 'dark';
      document.body.classList.add('dark-mode');
      document.getElementById('light-mode').style.display = 'block';
      document.getElementById('dark-mode').style.display = 'none';
      document.querySelector('.header-container').style.background = '';
  }
  setCookie('theme', theme, 30); // Save theme to cookie for 30 days
}

// Check if there's a saved theme and apply it on page load
document.addEventListener('DOMContentLoaded', function() {
  let savedTheme = getCookie('theme');
  if (savedTheme === 'dark') {
      toggleTheme(); // Apply dark theme if it was saved
  }
});

// Event listeners remain the same
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
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}
