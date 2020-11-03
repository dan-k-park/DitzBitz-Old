class Bitz {
    constructor(bitz, row) {
        this.id = bitz.bitzId,
        this.name = bitz.name,
        this.type = bitz.type,
        this.tags = bitz.tags,
        this.img = bitz.imgsrc
        this.url = bitz.urltogame,
        this.desc = bitz.description
        this.row = row

        this.tagLegend = {
            0: "Physics",
            1: "Pretty",
            2: "Sidescroller",
            3: "Strategy",
            4: "Action",
            5: "Survival",
            6: "Simulation",
            7: "Turn Based",
            8: "Math",
            9: "Platformer",
            10: "Evolution"
        }

        this.makeTheCard()
    }

    makeTheCard = () => {
        const card = document.createElement("div")
        const content = document.createElement("div")
        const link = document.createElement("a")
        const header = document.createElement("div")
        const desc = document.createElement("div")
        const extraContent = document.createElement("div")
        const iconSpan = document.createElement("span")
        const tagSpan = document.createElement("span")
        const imgDiv = document.createElement("div")
        const img = document.createElement("img")
        const typeIcon = document.createElement("i")
        const tagIcon = document.createElement("i")
        const column = document.createElement("div")

        column.style.padding = "10px 10px"

        card.classList.add("ui")
        card.classList.add("card")
        content.classList.add("content")
        header.classList.add("header")
        extraContent.classList.add("extra")
        extraContent.classList.add("content")
        desc.classList.add("description")
        iconSpan.classList.add("left")
        iconSpan.classList.add("floated")
        tagSpan.classList.add("right")
        tagSpan.classList.add("floated")
        tagIcon.classList.add("tags")
        tagIcon.classList.add("icon")
        tagIcon.id = "tags"

        if (this.type === 1) {
            typeIcon.classList.add("gamepad")
        } else if (this.type === 2) {
            typeIcon.classList.add("cogs")
        } else {
            typeIcon.classList.add("cube")
        }
        typeIcon.classList.add("icon")

        desc.innerText = this.desc
        link.href = this.url
        link.innerText = this.name

        let tagsString = this.tagLegend[this.tags[0]]

        if (!tagsString) {
            tagsString = "No tags"
        }

        for (let i = 1; i < this.tags.length; i++) {
            tagsString += ` | ${this.tagLegend[this.tags[i]]}`
        }

        tagSpan.setAttribute("data-tooltip", tagsString)
        tagSpan.setAttribute("data-position", "left center")

        img.src = this.img
        extraContent.appendChild(iconSpan)
        header.appendChild(link)
        content.appendChild(header)
        content.appendChild(desc)
        imgDiv.appendChild(img)
        card.appendChild(imgDiv)
        card.appendChild(content)
        iconSpan.appendChild(typeIcon)
        tagSpan.appendChild(tagIcon)
        extraContent.appendChild(iconSpan)
        extraContent.appendChild(tagSpan)
        card.appendChild(extraContent)
        column.appendChild(card)
        document.getElementById("bitzgrid").appendChild(column)

    }
}