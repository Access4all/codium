// elements need to be declared via id
function addAsCode(sourceElement, language) {
    let sourceString = document.getElementById(sourceElement)
    sourceString.removeAttribute('id')
    document.currentScript.parentNode.append(sourceString.outerHTML)
    document.currentScript.parentNode.getElementsByTagName("script")[0].remove()
    //document.currentScript.parentNode.classList.add("code-snippet")
    //hljs.highlightAll()
}

function toggle() {
    document.body.classList.toggle("light");
}