// const navigation = document.querySelector(".menu");
// const menu = document.querySelector(".menuItem");
// const hamburger = document.querySelector(".hamburger");
// const menuIcon = document.querySelector(".hamburger-bar");
// const closeIcon = document.querySelector(".close");

// function toggleHamburger() {
//   if (navigation.classList.contains("xxx")) {
//     navigation.classList.remove("xxx");
//     navigation.style.display = "block";
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     navigation.classList.add("xxx");
//     navigation.style.display = "none";
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleHamburger);

// menu.forEach(
//   function(menu) {
//     menu.addEventListener("click", toggleHamburger)
//   }
// )

const hamButton = document.querySelector(".hamburger-button");
const menuList = document.querySelector(".menu");

hamButton.onclick = function() {
  console.log("a");
  // menuList.classList.toggle()
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    menuList.style.display = "block";
  }
}