// Set the theme early (beforer we load the contents of the body to avoid a
// theme flash).
const theme = window.localStorage && window.localStorage.getItem("theme");
const isDark = theme === "dark";
var metaThemeColor = document.querySelector("meta[name=theme-color]");

if (theme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
  isDark
    ? metaThemeColor.setAttribute("content", "#252627")
    : metaThemeColor.setAttribute("content", "#fafafa");
}

