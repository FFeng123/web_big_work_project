import "./style.css"
import "./cart.css"
import { getItemList } from "./shopping"
import { newCartItem } from "./util";

const empty = (document.querySelector("#listB")!.innerHTML = getItemList().map((item, id) => newCartItem(item, id)).join("")) == "";

(document.querySelector("#empty")! as HTMLDivElement).style.display = empty ? "block" : "none";
(document.querySelector("#goPay")! as HTMLDivElement).style.display = empty ? "none" : "block";


export { }