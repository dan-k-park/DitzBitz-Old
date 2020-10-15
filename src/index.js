STATE = {
    bitz: [
        {
        "bitzId": "1",
        "name": "a",
        "game": true,
        "tags": [1,2,3]
        },
        {
        "bitzId": "2",
        "name": "b",
        "game": false,
        "tags": [5]
        },
        {
        "bitzId": "3",
        "name": "c",
        "game": false,
        "tags": [2,4]
        },
        {
        "bitzId": "4",
        "name": "d",
        "game": true,
        "tags": [1,3,5]
        },
        {
        "bitzId": "5",
        "name": "e",
        "game": true,
        "tags": [2,4,5]
        },
        {
        "bitzId": "6",
        "name": "f",
        "game": true,
        "tags": [1,2,3,4,5]
        },
        {
        "bitzId": "7",
        "name": "g",
        "game": false,
        "tags": [3,4]
        },
        {
        "bitzId": "8",
        "name": "h",
        "game": true,
        "tags": [1,4,5]
        }
    ],
    displayBitz: [
        {
            "bitzId": "1",
            "name": "gfa",
            "game": true,
            "tags": [1,2,3]
            },
            {
            "bitzId": "2",
            "name": "bag",
            "game": false,
            "tags": [5]
            },
            {
            "bitzId": "3",
            "name": "jag",
            "game": false,
            "tags": [2,4]
            },
            {
            "bitzId": "4",
            "name": "qag",
            "game": true,
            "tags": [1,3,5]
            },
            {
            "bitzId": "5",
            "name": "oag",
            "game": true,
            "tags": [2,4,5]
            },
            {
            "bitzId": "6",
            "name": "fog",
            "game": true,
            "tags": [1,2,3,4,5]
            },
            {
            "bitzId": "7",
            "name": "gaf",
            "game": false,
            "tags": [3,4]
            },
            {
            "bitzId": "8",
            "name": "hag",
            "game": true,
            "tags": [1,4,5]
            }
    ],
    filterType: "All",
    filterTag: 0,
    sort: "Newest"
}



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("alph").addEventListener("click", changeSort)
    document.getElementById("new").addEventListener("click", changeSort)
    document.getElementById("old").addEventListener("click", changeSort)
    document.getElementById("all").addEventListener("click", changeFilterType)
    document.getElementById("games").addEventListener("click", changeFilterType)
    document.getElementById("trinkets").addEventListener("click", changeFilterType)
    document.getElementById("1").addEventListener("click", changeFilterTag)
    document.getElementById("2").addEventListener("click", changeFilterTag)
    document.getElementById("3").addEventListener("click", changeFilterTag)
    document.getElementById("4").addEventListener("click", changeFilterTag)
    document.getElementById("5").addEventListener("click", changeFilterTag)
    
    console.log(STATE.displayBitz)
})

const changeSort = e => {
    const sortStyle = e.target.text
    console.log(sortStyle)
    let displayBitz = STATE.displayBitz
    if (sortStyle == "Alphabetically") {
        displayBitz.sort((bitz1, bitz2) => bitz1.name > bitz2.name ? 1 : -1)
    } else if (sortStyle == "Oldest") {
        displayBitz.sort((bitz1, bitz2) => bitz1.bitzId > bitz2.bitzId ? 1 : -1)
    } else if (sortStyle == "Newest") {
        displayBitz.sort((bitz1, bitz2) => bitz1.bitzId < bitz2.bitzId ? 1 : -1)
    } else {
        displayBitz.sort((bitz1, bitz2) => bitz1.bitzId < bitz2.bitzId ? 1 : -1)
    }
    STATE.displayBitz = displayBitz
    console.log(STATE.displayBitz)
}

const changeFilterType = e => {
    STATE.filterType = e.target.text
}

const changeFilterTag = e => {
    STATE.filterTag = e.target.text
}