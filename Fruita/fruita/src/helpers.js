const choice = (items) => items[Math.floor(Math.random() * items.length)]

function remove(item, items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] == item) {
      delete items[i]
      return items
    }
  }
  return items
}

export {choice, remove}
