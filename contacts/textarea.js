const textarea = document.querySelectorAll("textarea");

console.dir(textarea);

for (let i = 0; i < textarea.length; i++) {
  textarea[i].addEventListener("input", autoResize);
}

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
