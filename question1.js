function Newprod() {
    const addInputValue = document.getElementById("inputValue")
    const addAllList = document.getElementById("product-list")
    const addNewDiv = document.createElement("div")
    addNewDiv.id = addInputValue.value
    addNewDiv.className = 'product-item'

    const exitsInput = document.getElementById(addInputValue.value) !== null

    const para = document.createElement("p")
    para.textContent = addInputValue.value

    const newButton = document.createElement("button")
    newButton.textContent = 'Remove'
    
    addNewDiv.appendChild(para)
    addNewDiv.appendChild(newButton)
    addAllList.appendChild(addNewDiv)

    addInputValue.value = ''
}

function removeProd(id) {
  const productID = document.getElementById(id)
  productID.remove()
}

function removeAllProd() {
  const alldiv = document.getElementsByClassName("product-item")
  Array.from(alldiv).forEach((element) => {
    element.remove()
  })
}
