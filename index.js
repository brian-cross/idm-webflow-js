const headerNavDropdown = document.querySelector(".header-nav-dropdown");
const headerNavDropdownIcon = document.querySelector(
  ".header-nav-dropdown-icon"
);

headerNavDropdown.addEventListener("mouseover", () => {
  gsap.to(headerNavDropdown, { rotation: 90 });
});

headerNavDropdown.addEventListener("mouseout", () => {
  gsap.to(headerNavDropdown, { rotation: 0 });
});
