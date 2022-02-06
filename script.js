const theme = document.querySelector(":root");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.classList;

    if (color.contains("btn1")) {
      theme.style.setProperty("--theme-color", "#8a273b");
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme-color", "#fee030");
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme-color", "#1f2944");
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme-color", "#81fe00");
    } else if (color.contains("btn5")) {
      theme.style.setProperty("--theme-color", "#21b0aa");
    } else {
      theme.style.setProperty("--theme-color", "#9644d6");
    }
  });
});

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});
