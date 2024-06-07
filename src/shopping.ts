export type Item = {
    name: string,
    price: number,
    count: number,
    image: string,
}

function getItemList(): Item[] {
    let data = localStorage.getItem('shopping')
    if (data == null) {
        data = '[]'
    }

    return JSON.parse(data)
}

function addItem(item: Item) {
    console.log(item)
    let arr = getItemList()

    let fi = arr.find((i) => i.name == item.name)
    if (fi) {
        fi.count += item.count
    } else {
        arr.push(item)
    }

    localStorage.setItem('shopping', JSON.stringify(arr))
}


function deleteItem(index: number) {
    let arr = getItemList()
    arr.splice(index, 1)
    localStorage.setItem('shopping', JSON.stringify(arr))
}

function clearAll() {
    localStorage.removeItem('shopping')
}


export {
    getItemList,
    addItem,
    deleteItem,
    clearAll,
}