import "./style.css"
import "./info.css"
import { newListItem } from "./util"
import { addItem } from "./shopping"

const listBData = require("./shopItems.json")

const id = Number(window.location.search.substring(1))

let root = document.querySelector("#listB")!
for (let i = 0; i < listBData.length; i++) {
    const item = listBData[i]

    root.innerHTML += newListItem(item, i)
}

const item = listBData[id];

(document.querySelector("#mainimg")! as HTMLImageElement).src = item.image
document.querySelector("#titleA")!.innerHTML = item.name
document.querySelector("#priceA")!.innerHTML = "￥" + item.price;
console.log(item);

(document.querySelector("#addCart")! as HTMLElement).onclick = () => {
    addItem({
        count: 1,
        name: item.name,
        price: item.price,
        image: item.image
    })
    alert("已添加到购物车")
}

export { }