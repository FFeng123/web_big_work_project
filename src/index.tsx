import "./style.css"
import { newListItem } from "./util"
const listAData = require("./shopItems.json")
const listBData = require("./shopItems.json");

(document.querySelector(".sousuo > div") as HTMLDivElement).onclick = () => {
    window.location.href = `/search.html?${encodeURI((document.querySelector(".sousuo > input") as HTMLInputElement).value)}`
}

let root = document.querySelector("#listA")!
for (let i = 0; i < listAData.length; i++) {
    const item = listAData[i]

    root.innerHTML += newListItem(item, i)
}



root = document.querySelector("#listB")!
for (let i = 0; i < listBData.length; i++) {
    const item = listBData[i]
    // if (item.name.includes("炒")) {
    root.innerHTML += newListItem(item, i)
    // }

}




export { }