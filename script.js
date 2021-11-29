function changeColor(event) {
  document.documentElement.style.setProperty(
    "--primary-color",
    event.target.value
  );
}

let picker = document.getElementById("color");

picker.addEventListener("input", changeColor, false);

