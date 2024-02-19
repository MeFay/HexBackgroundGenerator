const colorPicker = document.querySelector("#colorPicker");
let selectedColor = "#ffffff";

colorPicker.addEventListener("input", (event) => {
  selectedColor = event.target.value;
});

document.addEventListener("click", (event) => {
  if (event.target !== colorPicker) {
    document.body.style.backgroundColor = selectedColor;
  }
});
