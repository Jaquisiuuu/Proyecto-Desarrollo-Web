window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var backToTopButton = document.querySelector(".back-to-top");

    if (scrollPosition > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

