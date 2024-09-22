const menuNav = document.querySelector("header nav");
const buttonIcon = document.querySelector("header i");

function toggleMenu() {
  menuNav.classList.toggle("active");
  if(buttonIcon.classList.contains("ph-list")) {
    buttonIcon.classList.remove("ph-list");
    buttonIcon.classList.add("ph-x");
  } else if(buttonIcon.classList.contains("ph-x")) {
    buttonIcon.classList.remove("ph-x");
    buttonIcon.classList.add("ph-list");
  };
}