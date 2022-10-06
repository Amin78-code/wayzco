var header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    header.classList.add("myfixedHeader");
  } else {
    header.classList.remove("myfixedHeader");
  }
});
function openMobileMenu() {
  document.getElementById("mobile_menu").classList.toggle("show");
}
function openMobileSearchMenu() {
  document
    .getElementById("mobile_search_box")
    .classList.toggle("show-from-top");
  document.getElementById("mobile_menu").classList.remove("show");
}
function changeHandler(e) {
  if (e.target.value.length > 0) {
    document.getElementById("clear_text").classList.remove("hide-it");
    document.getElementById("clear_text").classList.add("show-it");
  } else {
    document.getElementById("clear_text").classList.remove("show-it");
    document.getElementById("clear_text").classList.add("hide-it");
  }
}
function removeText() {
  document.getElementById("text_to_search").value = "";
  document.getElementById("clear_text").classList.remove("show-it");
  document.getElementById("clear_text").classList.add("hide-it");
}
