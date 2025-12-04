// elements need to be declared via id
function addAsCode(sourceElement, language) {
  let sourceString = document.getElementById(sourceElement);
  sourceString.removeAttribute("id");
  document.currentScript.parentNode.append(sourceString.outerHTML);
  document.currentScript.parentNode.getElementsByTagName("script")[0].remove();
  //document.currentScript.parentNode.classList.add("code-snippet")
  //hljs.highlightAll()
}

function toggle() {
  document.body.classList.toggle("light");
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
