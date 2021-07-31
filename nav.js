
const toggleBtn = document.querySelector(".nav3");
const mobileNav = document.querySelector(".mob-nav");
const crossBar = document.querySelector(".cross");

toggleBtn.addEventListener("click", () => {
  mobileNav.style.display = "block";
});
crossBar.addEventListener("click", () => {
  mobileNav.style.display = "none";
});

