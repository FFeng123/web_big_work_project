import "./style.css"
import { newListItem } from "./util"

const 菜单 = require("./shopItems.json") as []

const searchInput = document.querySelector<HTMLInputElement>("#searchInput")!
const listB = document.querySelector<HTMLDivElement>("#listB")!;



const search = () => {
    listB.innerHTML = ""

    let itms = 菜单.map((itm: any, id) => {
        return {
            ...itm,
            id
        }
    }).filter((item: any) => item.name.includes(searchInput.value)) as [];
    (document.querySelector("#notfound") as HTMLDivElement).style.display = itms.length === 0 ? "block" : "none"

    itms.sort((a: any, b: any) => a.name.localeCompare(b.name)).forEach((item: any) => {
        listB.innerHTML += newListItem(item, item.id)
    })

}
(document.querySelector(".sousuo > div") as HTMLDivElement).onclick = search

searchInput.value = decodeURI(window.location.search.substring(1))
// search()


export {

}