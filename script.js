function addItem() {
  const newItem = document.getElementById("new-item")

  const li = document.createElement("li")
  li.classList.add("item-list")

  const div = document.createElement("div")
  div.classList.add("radio-wrapper")

  const input = document.createElement("input")
  input.setAttribute("name", "item")
  input.setAttribute("id", "item")
  input.setAttribute("type", "radio")

  const label = document.createElement("label")
  label.setAttribute("for", "item")
  label.textContent = newItem.value

  const img = document.createElement("img")
  img.setAttribute("src", "assets/trash.svg")
  img.setAttribute("alt", "Ícone de uma lixeira indicando a remoção do item")

  div.appendChild(input);
  div.appendChild(label);
  li.appendChild(div);
  li.appendChild(img);

  const list = document.querySelector("ul")
  list.appendChild(li)

  document.getElementById("new-item").value = "";
  document.getElementById("new-item").focus()
}
const button = document.getElementById("add")
button.addEventListener("click", addItem)