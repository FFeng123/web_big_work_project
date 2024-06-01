import "./style.css"

const listAData = [
    {
        name: "优质白豆干",
        price: "￥15.00",
        button: "立即购买"
    }, {
        name: "优质黑豆干",
        price: "￥15.00",
        button: "我不要"
    }, {
        name: "优质黑豆干",
        price: "￥15.00",
        button: "我不要"
    }, {
        name: "优质黑豆干",
        price: "￥15.00",
        button: "我不要"
    }, {
        name: "优质黑豆干",
        price: "￥15.00",
        button: "我不要"
    }
]

let root = document.querySelector("#listA")!
for (let i = 0; i < listAData.length; i++) {
    const item = listAData[i]

    root.innerHTML += `
    <!-- 这里是列表 -->
    <div>
      <div>
        <div>` + item.name + `</div>
        <div>` + item.price + `</div>
        <div>` + item.button + `</div>
      </div>
    </div>
    `
}




export { }