class Bitz {
    constructor(bitz) {
        this.id = bitz.bitzId,
        this.name = bitz.name,
        this.game = bitz.game,
        this.tags = bitz.tags,
        this.img = "https://pbs.twimg.com/media/EeIHdguVoAAfU5y?format=jpg&name=large"
        // this.url = bitz.urltogame,
        // this.desc = bitz.description

        this.makeTheCard()
    }

    makeTheCard = () => {
        const specialCardDiv = document.createElement("div")
        const cardDiv = document.createElement("div")
        const dimmingImageDiv = document.createElement("div")
        const dimmerDiv = document.createElement("div")
        const contentDiv = document.createElement("div")
        const centerDiv = document.createElement("div")
        const descriptionDiv = document.createElement("div")
        const img = document.createElement("img")

        specialCardDiv.classList.add("ui")
        specialCardDiv.classList.add("special")
        specialCardDiv.classList.add("cards")
        cardDiv.classList.add("card")
        dimmingImageDiv.classList.add("blurring")
        dimmingImageDiv.classList.add("dimmable")
        dimmingImageDiv.classList.add("image")
        dimmerDiv.classList.add("ui")
        dimmerDiv.classList.add("inverted")
        dimmerDiv.classList.add("dimmer")
        contentDiv.classList.add("content")
        centerDiv.classList.add("center")
        descriptionDiv.classList.add("ui")
        descriptionDiv.classList.add("primary")
        descriptionDiv.classList.add("button")

        img.src = this.img
        centerDiv.appendChild(descriptionDiv)
        contentDiv.appendChild(centerDiv)
        dimmerDiv.appendChild(contentDiv)
        dimmingImageDiv.appendChild(dimmerDiv)
        dimmingImageDiv.appendChild(img)
        cardDiv.appendChild(dimmingImageDiv)
        specialCardDiv.appendChild(cardDiv)
        document.getElementById("bitzgrid").appendChild(specialCardDiv)
    }
}