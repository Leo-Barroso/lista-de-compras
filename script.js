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

  if(!label.textContent) {
    alert("É necessário informar um item.")
    document.getElementById("new-item").focus()
    return
  }

  const img = document.createElement("img")
  img.setAttribute("src", "assets/trash.svg")
  img.setAttribute("alt", "Ícone de uma lixeira indicando a remoção do item")

  img.addEventListener("click", () => {
    li.remove()
    showMessage()
  })

  div.appendChild(input);
  div.appendChild(label);
  li.appendChild(div);
  li.appendChild(img);

  const list = document.querySelector("ul")
  list.appendChild(li)

  document.getElementById("new-item").value = ""
  document.getElementById("new-item").focus()
}

function showMessage() {
  const itemRemoveDiv = document.createElement("div")
  itemRemoveDiv.classList.add("item-remove")

  const radioWrapperDiv = document.createElement("div")
  radioWrapperDiv.classList.add("radio-wrapper")

  const imgWarnnig = document.createElement("img")
  imgWarnnig.setAttribute("src", "assets/warning-circle-filled.svg")
  imgWarnnig.setAttribute("alt", "ícone de alerta de exclusão de item")

  const removeMessage = document.createElement("span");
  removeMessage.textContent = "O item foi removido da lista";
  
  const deleteImg = document.createElement("img");
  deleteImg.setAttribute("src", "assets/delete-small.svg");
  deleteImg.setAttribute("alt", "ícone de alerta de exclusão de item");

  radioWrapperDiv.appendChild(imgWarnnig);
  radioWrapperDiv.appendChild(removeMessage);
  itemRemoveDiv.appendChild(radioWrapperDiv);
  itemRemoveDiv.appendChild(deleteImg);

  const lista = document.querySelector("ul");
  lista.insertAdjacentElement("afterend", itemRemoveDiv);

  setTimeout(() => {
    itemRemoveDiv.remove();
}, 3000);
}
const button = document.getElementById("add")
button.addEventListener("click", addItem)