
// const tbtn = document.querySelectorAll(".side-nav ul li");
// const tab = document.querySelectorAll(".tabs");
// function show(panelIndex) {
//   tab.forEach(function (node) {
//     node.style.display = "none";
//   });
//   tab[panelIndex].style.display = "block";
// }
// show(0);

const dash = () => {
    window.location = "profile"
}

const review = () => {
    window.location = "http://localhost:3000/profile/reviews"
}

$(".side-nav ul li").click(function () {
$(this).addClass("active").siblings().removeClass("active");
});


const bar = document.querySelector(".bars");
const navM = document.querySelector(".nav-mobile");
bar.addEventListener("click", (nav) => {
navM.classList.toggle("show");
});


const Mbar = document.querySelector(".m-bar");
const aside = document.querySelector(".sidebar");
const close = document.querySelector(".close");
Mbar.addEventListener("click", () => {
aside.classList.add("show");
});
close.addEventListener("click", () => {
aside.classList.remove("show");
});