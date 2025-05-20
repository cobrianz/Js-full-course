const bars = document.getElementById("bars");
const closeMenu = document.getElementById("close");
const navMenu = document.getElementById("nav-menu");

bars.addEventListener("click", () => {
  navMenu.style.display = "flex";
  bars.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navMenu.style.display = "none";
  closeMenu.style.display = "none";
  bars.style.display = "block";
});
