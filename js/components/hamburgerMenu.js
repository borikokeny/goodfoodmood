const hamButton = document.querySelector(".hamburger-bar");
const menuList = document.querySelector(".menu");
const hamMode = document.querySelector(".main-recipe-container");

hamButton.onclick = function() {
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
    hamMode.classList.remove("ham-mode");
  } else {
    menuList.style.display = "block";
    hamMode.classList.add("ham-mode");
  }
}

