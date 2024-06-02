document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Add scroll event to show or hide the button
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Add click event to scroll to the top
    scrollToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    const searchField = document.getElementById('searchfield');
    const searchForm = document.querySelector('.search-form');
    const searchIcon = document.querySelector('.search-icon');
    const clearIcon = document.querySelector('.clear-icon');

    searchField.addEventListener('input', function() {
        if (searchField.value) {
            searchIcon.style.display = 'none';
            clearIcon.style.display = 'block';
        } else {
            searchIcon.style.display = 'block';
            clearIcon.style.display = 'none';
        }
    });

    clearIcon.addEventListener('click', function() {
        searchField.value = '';
        searchIcon.style.display = 'block';
        clearIcon.style.display = 'none';
        searchField.focus();
    });

    document.addEventListener('click', function(event) {
        if (!searchForm.contains(event.target)) {
            searchField.value = '';
            searchIcon.style.display = 'block';
            clearIcon.style.display = 'none';
        }
    });

    var sf = document.getElementById("searchfield");

    const lightFuncBtn = document.querySelector('.glb-btn-container');
    const lightModeIcon = document.getElementById('light-mode');
    const darkModeIcon = document.getElementById('dark-mode');

    lightFuncBtn.addEventListener('click', function() {
        if (lightModeIcon.style.display === 'none') {
            lightModeIcon.style.display = 'block';
            darkModeIcon.style.display = 'none';
            header.style.backgroundImage = 'url("somt/aesthetic-stars.gif")';
            sf.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        } else {
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
            header.style.backgroundImage = 'none';
        }
    });
});
