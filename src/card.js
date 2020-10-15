class Bitz {
    constructor(bitz) {
        this.id = bitz.bitzId,
        this.name = bitz.name,
        this.game = bitz.game,
        this.tags = bitz.tags,
        this.img = "https://pbs.twimg.com/media/EeIHdguVoAAfU5y?format=jpg&name=large"
        // this.url = bitz.urltogame,
        // this.desc = bitz.description

        makeTheCard()
    }

    makeTheCard = () => {
        const specialCardDiv = document.createElement("div")
        const dimmingImageDiv = document.createElement("div")
        const dimmerDiv = document.createElement("div")
        const contentDiv = document.createElement("div")
        const centerDiv = document.createElement("div")
        const descriptionDiv = document.createElement("div")
        const img = document.createElement("img")

        dimmingImageDiv.appendChild
        specialCardDiv.classList.addChild(dimmingImageDiv)
    }
}