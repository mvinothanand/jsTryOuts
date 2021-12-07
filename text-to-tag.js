const addTag = (node) => {
  // console.log(node)
  console.log("input value: " + node.value)
  let tag = document.createElement("span")
  tag.setAttribute("class", "tag")

  tag.innerHTML = node.value
  node.parentNode.insertBefore(tag, node.nextSibling)
}

const handleEnter = (event) => {
  if (event.code === "Enter") {
    console.log("Enter pressed in " + event.target.id)
    addTag(event.target)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // alert("dom content loaded")

  let container = document.createElement("div")
  console.log(container)
  container.setAttribute("class", "container")
  // inputField.setAttribute()
  document.body.appendChild(container)

  let inputField = document.createElement("input")
  inputField.setAttribute("type", "text")
  inputField.setAttribute("placeholder", "Enter the tag")
  inputField.setAttribute("id", "inputField")
  inputField.addEventListener("keyup", handleEnter)
  inputField.style.display = "block"
  document.getElementsByClassName("container")[0].appendChild(inputField)

  let inputField2 = document.createElement("input")
  inputField2.setAttribute("type", "text")
  inputField2.setAttribute("placeholder", "Enter the tag")
  inputField2.setAttribute("id", "inputField2")
  inputField2.addEventListener("keyup", handleEnter)
  inputField.style.display = "block"
  document.getElementsByClassName("container")[0].appendChild(inputField2)
})
