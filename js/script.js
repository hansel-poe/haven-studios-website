document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-list");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  // Insturctors scroll
  let leftScroll = document.querySelector(".fa-chevron-left");
  let rightScroll = document.querySelector(".fa-chevron-right");
  const scrollContainer = document.querySelector(".instructors__scroller");
  const scrollCard = document.querySelector(".instructors__scroller-item");

  leftScroll.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= scrollCard.clientWidth;
  });

  rightScroll.addEventListener("click", function () {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += scrollCard.clientWidth;
  });
});
