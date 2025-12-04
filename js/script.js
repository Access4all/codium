// elements need to be declared via id
function addAsCode(sourceElement, language) {
  let sourceString = document.getElementById(sourceElement);
  sourceString.removeAttribute("id");
  document.currentScript.parentNode.append(sourceString.outerHTML);
  document.currentScript.parentNode.getElementsByTagName("script")[0].remove();
  //document.currentScript.parentNode.classList.add("code-snippet")
  //hljs.highlightAll()
}

function toggleTree(btn) {
  const group = btn.parentElement.querySelector(".tree-children");
  const isOpen = btn.getAttribute("aria-expanded") === "true";

  btn.setAttribute("aria-expanded", !isOpen);
  btn.querySelector(".tree-level-toggle-indicator").textContent = isOpen
    ? "─"
    : "|";
  group.classList.toggle("hidden", isOpen);
}

// Theme management
function initTheme() {
  // Check localStorage first, fall back to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || (prefersDark.matches ? "dark" : "light");

  setTheme(theme);
}

// Set and save theme
function setTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
  localStorage.setItem("theme", theme);
  console.log("Theme set to:", theme); // Debug log
}

// Toggle theme
function toggleTheme() {
  const currentTheme = document.body.classList.contains("light")
    ? "light"
    : "dark";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme
  initTheme();

  // Add click handler to toggle button
  const themeToggle = document.querySelector("#theme-toggle"); // adjust selector as needed
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
