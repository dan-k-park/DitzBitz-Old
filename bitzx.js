class Bitz {
    constructor(bitz, row) {
        this.id = bitz.bitzId,
        this.name = bitz.name,
        this.game = bitz.game,
        this.tags = bitz.tags,
        this.img = bitz.imgsrc
        this.url = bitz.urltogame,
        this.desc = bitz.description
        this.row = row

        this.makeTheCard()
    }

    makeTheCard = () => {
        const card = document.createElement("div")
        const content = document.createElement("div")
        const link = document.createElement("a")
        const header = document.createElement("div")
        const desc = document.createElement("div")
        const extraContent = document.createElement("div")
        const span = document.createElement("span")
        const imgDiv = document.createElement("div")
        const img = document.createElement("img")
        const icon = document.createElement("i")
        const column = document.createElement("div")

        column.style.padding = "10px 10px"

        card.classList.add("ui")
        card.classList.add("card")
        content.classList.add("content")
        header.classList.add("header")
        extraContent.classList.add("extra")
        extraContent.classList.add("content")
        desc.classList.add("description")

        if (this.game) {
            icon.classList.add("gamepad")
        } else {
            icon.classList.add("cogs")
        }
        icon.classList.add("icon")

        desc.innerText = this.desc
        link.href = this.url
        link.innerText = this.name

        img.src = this.img
        extraContent.appendChild(span)
        header.appendChild(link)
        content.appendChild(header)
        content.appendChild(desc)
        imgDiv.appendChild(img)
        card.appendChild(imgDiv)
        card.appendChild(content)
        span.appendChild(icon)
        extraContent.appendChild(span)
        card.appendChild(extraContent)
        column.appendChild(card)
        document.getElementById("bitzgrid").appendChild(column)

    }
}