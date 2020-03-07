const list = document.querySelector(".taskList");
const input = document.querySelector("#task");
const trash = document.querySelector(".trash");

function addTask(text) {
  let task = document.createElement("li");
  task.innerHTML = `<i class="far fa-circle done"></i>
<p>${text}</p>
<i class="fas fa-trash-alt trash"></i>`;

  list.appendChild(task);
}

document.addEventListener("keyup", event => {
  if (event.keyCode == 13) {
    addTask(input.value);
  }
});
console.log(trash);

trash.addEventListener("click", event => {
  console.log("he pulsado trash");
});
