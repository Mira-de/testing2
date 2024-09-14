const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");

function showMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

btn.addEventListener("click", showMenu);
