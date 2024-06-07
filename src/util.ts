import { Item, deleteItem } from "./shopping";

export function newListItem(item: any, id: number) {
    return `
    <div style="--bg-image: url('${item.image}');" onclick="window.location.href='/info.html?${id}'">
      <div>
        <div>${item.name}</div>
        <div>￥${item.price}</div>
        <div class="link">查看详情>></div>
      </div>
    </div>
    `
}

export function newCartItem(item: Item, id: number) {
    return `
<div>
    <img src="${item.image}" alt="">
    <div>
        <div>
            <div>${item.name}</div>
            <div>${item.count}</div>
        </div>
        <div>￥${(item.price * item.count).toFixed(2)}</div>
    </div>
    <div>
        <div class="btn1" onclick="deleteCartItem(${id})">删除</div>
    </div>
</div>`
}

(window as any).deleteCartItem = function (id: number) {
    deleteItem(id);
    window.location.reload();
}