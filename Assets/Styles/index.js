const cursor = document.getElementById("cursor");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  circle1.style.left = x + "px";
  circle1.style.top = y + "px";

  circle2.style.left = x + "px";
  circle2.style.top = y + "px";
});

const scrollDown = document.querySelector(".scroll-down");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    scrollDown.classList.add("hidden");
  } else {
    scrollDown.classList.remove("hidden");
  }
});


