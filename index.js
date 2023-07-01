let getTheme = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : [];
if (getTheme.length === 0) {
  getTheme = [{ theme: "light" }];
  localStorage.setItem("theme", JSON.stringify(getTheme));
}
$(".fa-moon").click((e) => {
  $("body").addClass("dark");
  e.currentTarget.classList.add("theme-on");
  $(".fa-sun").removeClass("theme-on");
  getTheme[0].theme = "dark";
  localStorage.setItem("theme", JSON.stringify(getTheme));
});
$(".fa-sun").click((e) => {
  $("body").removeClass("dark");

  e.currentTarget.classList.add("theme-on");
  $(".fa-moon").removeClass("theme-on");

  getTheme[0].theme = "light";
  localStorage.setItem("theme", JSON.stringify(getTheme));
});
window.addEventListener("DOMContentLoaded", () => {
  if (getTheme[0].theme === "light") {
    $("body").removeClass("dark");

    $(".fa-sun").addClass("theme-on");
  } else {
    $(".fa-sun").removeClass("theme-on");
  }
  if (getTheme[0].theme === "dark") {
    $("body").addClass("dark");

    $(".fa-moon").addClass("theme-on");
  } else {
    $(".fa-moon").removeClass("theme-on");
  }
});
