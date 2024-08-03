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
});

/*  const searchField = document.getElementById("searchfield");
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
  */

//theme mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const currentMode = localStorage.getItem("mode");

  if (currentMode) {
      document.body.classList.add(currentMode);
  } else {
      document.body.classList.add("light-mode");
  }

  toggleButton.addEventListener("click", () => {
      if (document.body.classList.contains("light-mode")) {
          document.body.classList.replace("light-mode", "dark-mode");
          localStorage.setItem("mode", "dark-mode");
      } else {
          document.body.classList.replace("dark-mode", "light-mode");
          localStorage.setItem("mode", "light-mode");
      }
  });
});
//end

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

//searching function
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchfield');
  const searchResults = document.getElementById('search-results');
  const resultsList = document.getElementById('results-list');

  let data = [];

  // Fetch data from JSON file
  fetch('data.json')
      .then(response => response.json())
      .then(jsonData => {
          data = jsonData;
      })
      .catch(error => console.error('Error fetching data:', error));

  // Event listener for search input
  searchInput.addEventListener('input', function() {
      const query = searchInput.value.trim().toLowerCase();
      resultsList.innerHTML = '';

      if (query.length < 2) {
          searchResults.style.display = 'none';
          return;
      }

      const filteredData = data.filter(item => item.title.toLowerCase().includes(query));
      
      if (filteredData.length === 0) {
          resultsList.innerHTML = '<li>Không tìm thấy kết quả</li>';
      } else {
          filteredData.slice(0, 5).forEach(item => {
              const li = document.createElement('li');
              const img = document.createElement('img');
              img.src = item.thumbnail;
              img.alt = item.title;
              img.className = 'thumbnail'; // Apply thumbnail class for styling

              const text = document.createElement('span');
              text.textContent = item.title;

              li.appendChild(img);
              li.appendChild(text);
              li.dataset.url = item.content_file;  // Store the URL in a data attribute

              li.addEventListener('click', function() {
                  window.location.href = li.dataset.url;  // Redirect to the URL
              });

              resultsList.appendChild(li);
          });
      }

      searchResults.style.display = 'block';
  });

  // Hide results when clicking outside
  document.addEventListener('click', function(event) {
      if (!searchInput.contains(event.target) && !resultsList.contains(event.target)) {
          searchResults.style.display = 'none';
      }
  });
});
