const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function contact(){
    window.location = "contact.html";
}

function services(){
    window.location = "services.html";
}
function home(){
    window.location = "index.html";
}
function about(){
    window.location = "about.html";
}