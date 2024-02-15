import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems
  const initialPage = () => {
    const input = document.querySelector("input")
    input.addEventListener("input", filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (event) => {
    const userKeyword = event.target.value.toLowerCase()
    const filterItems = items.filter((item) => {
      return item.keywords.toLowerCase().includes(userKeyword)
    })
    showItems(filterItems)
  }

  const showItems = (items) => {
    const ulElement = document.getElementById("items")
    ulElement.textContent = ''
    items.forEach( (item) => {
      const liElement = document.createElement("li")
      liElement.textContent = `ID:${item.id}, NAME:${item.name} KEYWORDS:${item.keywords}`
      ulElement.appendChild(liElement)
    });
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

export { itemList }
const { initialPage } = itemList(products)
initialPage()
