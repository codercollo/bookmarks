// Select elements
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

// Open menu
menuOpenIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  menuOpenIcon.classList.add("hidden");
  menuCloseIcon.classList.remove("hidden");
});

// Close menu
menuCloseIcon.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  menuOpenIcon.classList.remove("hidden");
  menuCloseIcon.classList.add("hidden");
});
