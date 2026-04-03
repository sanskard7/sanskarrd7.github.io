// Typing effect
const words = ["Sanskar", "Developer", "Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.getElementById("typing");

function type() {
  if (i < words.length) {
    if (!isDeleting && j <= words[i].length) {
      current = words[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = words[i].substring(0, j--);
    }
    typing.innerHTML = current;

    if (j == words[i].length) isDeleting = true;
    if (j == 0) { isDeleting = false; i++; }
  } else i = 0;

  setTimeout(type, isDeleting ? 50 : 100);
}
type();
