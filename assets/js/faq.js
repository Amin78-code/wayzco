function toggleAccordion(part, element) {
  var main_div;
  if (part == "user_manual") {
    main_div = document.getElementById("user_manual");
  }
  if (part == "pricingAndPayment") {
    main_div = document.getElementById("pricingAndPayment");
  }
  if (part == "issues") {
    main_div = document.getElementById("issues");
  }
  if (part == "account") {
    main_div = document.getElementById("account");
  }
  if (part == "promotions") {
    main_div = document.getElementById("promotions");
  }
  if (part == "safety") {
    main_div = document.getElementById("safety");
  }
  if (part == "report") {
    main_div = document.getElementById("report");
  }
  var allDivs = main_div.querySelectorAll(".accordion-body");

  for (let i = 0; i < allDivs.length; i++) {
    console.log("allDivs[i].classList", allDivs[i].classList);

    for (let j = 0; j < allDivs[i].classList.length; j++) {
      if (allDivs[i].classList[j] == element.id) {
        allDivs[i].classList.remove("hidden");
      } else {
        allDivs[i].classList.add("hidden");
      }
    }
  }
}

//         function selectNew() {
//     var newL = document.getElementById("list");
//     newL.classList.toggle("hidden");
// }

// function selectedSmall() {
//     var text = event.target.innerText;
//     var newL = document.getElementById("list");
//     var newText = document.getElementById("textClicked");
//     newL.classList.add("hidden");
//     newText.innerText = text;
// }

// function selected() {
//     let clicked = event.target;
//     let child = clicked.parentElement.children;

//     for (let j = 0; j < child.length; j++) {
//         if (child[j].classList.contains("bg-gray-800", "text-white")) {
//             child[j].classList.remove("bg-gray-800", "text-white");
//             child[j].classList.add("bg-white", "text-gray-600");
//         }
//     }

//     clicked.classList.remove("text-gray-600", "bg-white");
//     clicked.classList.add("bg-gray-800", "text-white");
// }

// let elements = document.querySelectorAll("[data-menu]");
// for (let i = 0; i < elements.length; i++) {
//     let main = elements[i];

//     main.addEventListener("click", function () {
//         let element = main.parentElement.parentElement;
//         let indicators = main.querySelectorAll("img");
//         let child = element.querySelector("#menu");
//         let h = element.querySelector("#mainHeading>div>p");

//         h.classList.toggle("font-semibold");
//         child.classList.toggle("hidden");
//         // console.log(indicators[0]);
//         indicators[0].classList.toggle("rotate-45");
//     });
// }
