
    let grid = document.getElementById("bitzgrid")

window.addEventListener('DOMContentLoaded', (event) =>{


STATE = {
    bitz:  [
        {
            "bitzId": "1",
            "name": "Kessler's Cleanup",
            "game": true,
            "description": "A snake-asteroids game, click and steer at the same time to help captain Kessler clean up the asteroid!",
            "urltogame": "http://ditzbitz.com/blaster.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/kessler1.png"
        },
        {
            "bitzId": "2",
            "name": "Moonshot",
            "game": true,
            "description": "Moon-colonization and simple steering with physics.",
            "urltogame": "http://ditzbitz.com/moonshot.html",
            "tags": [0,1,6],
            "imgsrc":  "http://ditzbitz.com/moonshot1.png"
        },
        {
            "bitzId": "3",
            "name": "Rollout",
            "game": true,
            "description": "A simple endless runner.",
            "urltogame": "http://ditzbitz.com/rollout.html",
            "tags": [4, 2],
            "imgsrc": "http://ditzbitz.com/rollout1.png"
        },
        {
            "bitzId": "4",
            "name": "Bacterioids",
            "game": false,
            "description": "A rock-paper-scissors population dynamics simulation themed around Bacteria!",
            "urltogame": "http://ditzbitz.com/bacterioids.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/bacteroids1.png"
        },
        {
            "bitzId": "5",
            "name": "Archeanoids",
            "game": false,
            "description": "A population dynamics simulation themed around Archeans!",
            "urltogame": "http://ditzbitz.com/animal.html",
            "tags": [6, 10],
            "imgsrc": "http://ditzbitz.com/archeanoids1.png"
        },
        {
            "bitzId": "6",
            "name": "Yeastoids",
            "game": false,
            "description": "A population dynamics simulation themed around Yeast!",
            "urltogame": "http://ditzbitz.com/yeasterealiac.html",
            "tags": [6, 10],
            "imgsrc":"http://ditzbitz.com/yeastoids1.png"
        },
        {
            "bitzId": "7",
            "name": "Zarkavoids",
            "game": true,
            "description": "Break the bricks, steer the ball.",
            "urltogame": "http://ditzbitz.com/zarkavoids.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/zarkavoids1.png"
        },
        {
            "bitzId": "8",
            "name": "Platforms",
            "game": true,
            "description": "Fall freely, but not for very long.",
            "urltogame": "http://ditzbitz.com/platforms.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/platform1.png"
        },
        {
            "bitzId": "9",
            "name": "Katamaracman",
            "game": true,
            "description": "Consume small white balls, stick to large blue walls.",
            "urltogame": "http://ditzbitz.com/katamaracman.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/kat1.png"
        },
        {
            "bitzId": "10",
            "name": "Magneato",
            "game": false,
            "description": "Watch and guide the charged particles as they orbit.",
            "urltogame": "http://ditzbitz.com/magneato.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/mag1.png"
        },
        {
            "bitzId": "11",
            "name": "Firework",
            "game": false,
            "description": "Adjust the explosion as you like.",
            "urltogame": "http://ditzbitz.com/firework.html",
            "tags": [1, 6],
            "imgsrc": "http://ditzbitz.com/firework1.png"
        },
        {
            "bitzId": "12",
            "name": "Boxclick",
            "game": true,
            "description": "Test how good you are at clicking.",
            "urltogame": "http://ditzbitz.com/boxclick.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/boxclick1.png"
        },
        {
            "bitzId": "13",
            "name": "SimonClicks",
            "game": true,
            "description": "Its an idle clicking income generation game.",
            "urltogame": "http://ditzbitz.com/simonclicks.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/simon1.png"
        },
        {
            "bitzId": "14",
            "name": "YeahBuoy",
            "game": false,
            "description": "Click and drag the bouyant masses around the pool of water.",
            "urltogame": "http://ditzbitz.com/yeahbuoy.html",
            "tags": [0,6,1],
            "imgsrc": "http://ditzbitz.com/buoy1.png"
        },
        {
            "bitzId": "15",
            "name": "Sheephole",
            "game": true,
            "description": "Click to steer your sheep-dog, scare the sheep into a bottomless pit.",
            "urltogame": "http://ditzbitz.com/sheephole.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/sheephole1.png"
        },
        {
            "bitzId": "16",
            "name": "Kessler's Comedown",
            "game": true,
            "description": "Help captain Kessler return to earth.",
            "urltogame": "http://ditzbitz.com/crashdown.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/kesslercomedown1.png"
        },
        {
            "bitzId": "17",
            "name": "Rippler",
            "game": false,
            "description": "Just a pleasant rippling pattern.",
            "urltogame": "http://ditzbitz.com/rippler.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/rippler1.png"
        },
        {
            "bitzId": "18",
            "name": "Gas Compressor",
            "game": false,
            "description": "Watch the gas compress and decompress.",
            "urltogame": "http://ditzbitz.com/duster.html",
            "tags": [1,6,0],
            "imgsrc": "http://ditzbitz.com/gascompressor1.png"
        },
        {
            "bitzId": "19",
            "name": "Cognito",
            "game": false,
            "description": "Gears making connections.",
            "urltogame": "http://ditzbitz.com/cognito.html",
            "tags": [1,6,0],
            "imgsrc": "http://ditzbitz.com/cognito1.png"
        },
        {
            "bitzId": "20",
            "name": "Make Like a Tree",
            "game": false,
            "description": "A Barnsley fern generator.",
            "urltogame": "http://ditzbitz.com/makelikeatree.html",
            "tags": [1,6],
            "imgsrc": "http://ditzbitz.com/tree1.png"
        },
        {
            "bitzId": "21",
            "name": "Rainbow Spirotron",
            "game": false,
            "description": "A rainbow spinner.",
            "urltogame": "http://ditzbitz.com/spirotron.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/rainbow1.png"
        },
        {
            "bitzId": "22",
            "name": "Waves",
            "game": false,
            "description": "A waveform toy.",
            "urltogame": "http://ditzbitz.com/waves.html",
            "tags": [1,6],
            "imgsrc": "http://ditzbitz.com/waves1.png"
        },
        {
            "bitzId": "23",
            "name": "Garbo Golf",
            "game": false,
            "description": "Space golf",
            "urltogame": "http://ditzbitz.com/garbogolf.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/garbo1.png"
        },
        {
            "bitzId": "24",
            "name": "Zen Fruit Picker",
            "game": false,
            "description": "Pick fruit.",
            "urltogame": "http://ditzbitz.com/fruitpicker.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/fruitpicker1.png"
        },
        {
            "bitzId": "25",
            "name": "MOBAsic",
            "game": true,
            "description": "A very basic facsimile of a MOBA game.",
            "urltogame": "http://ditzbitz.com/autocheckers.html",
            "tags": [6,3,4],
            "imgsrc": "http://ditzbitz.com/moba1.png"
        },
        {
            "bitzId": "26",
            "name": "Words To Your Ambiguitousnessly",
            "game": false,
            "description": "A very bad word toy.",
            "urltogame": "http://ditzbitz.com/words.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/words1.png"
        },
        {
            "bitzId": "27",
            "name": "Gradient",
            "game": false,
            "description": "A gradient making toy.",
            "urltogame": "http://ditzbitz.com/gradient.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/gradient1.png"
        },
        {
            "bitzId": "28",
            "name": "It's a Conspiratron",
            "game": false,
            "description": "Play with the conspiracy webtoy.",
            "urltogame": "http://ditzbitz.com/conspiratron.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/conspiratron1.png"
        },
        {
            "bitzId": "29",
            "name": "Wormer",
            "game": false,
            "description": "Play with the worm webtoy.",
            "urltogame": "http://ditzbitz.com/wormer.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/wormer1.png"
        },
        {
            "bitzId": "30",
            "name": "Drip Drop",
            "game": false,
            "description": "Watch the drops fall.",
            "urltogame": "http://ditzbitz.com/drops.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/drip1.png"
        },
        {
            "bitzId": "31",
            "name": "Bloomer",
            "game": false,
            "description": "Watch the bloom spin.",
            "urltogame": "http://ditzbitz.com/recurse.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/bloomer1.png"
        },
        {
            "bitzId": "32",
            "name": "LapJam",
            "game": true,
            "description": "Race your friend!",
            "urltogame": "http://ditzbitz.com/safetyrace.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/lapjam1.png"
        },
        {
            "bitzId": "33",
            "name": "Digzone",
            "game": true,
            "description": "Blast the flying grids to smithereens!",
            "urltogame": "http://ditzbitz.com/digzone.html",
            "tags": [0,4],
            "imgsrc": "http://ditzbitz.com/digzone1.png"
        },
        {
            "bitzId": "34",
            "name": "DongoDongo",
            "game": false,
            "description": "Collect the dots with your body.",
            "urltogame": "http://ditzbitz.com/dongodongo.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/dongodongo1.png"
        },
        {
            "bitzId": "35",
            "name": "StackZone",
            "game": false,
            "description": "Stack blocks and jump around.",
            "urltogame": "http://ditzbitz.com/stackzone.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/stackzone1.png"
        },
        {
            "bitzId": "36",
            "name": "Knocktapus",
            "game": true,
            "description": "Defend your young, keep the ocean clean!",
            "urltogame": "http://ditzbitz.com/corona.html",
            "tags": [0,1,4,5,6],
            "imgsrc": "http://ditzbitz.com/knocktapus1.png"
        },
        {
            "bitzId": "37",
            "name": "Pang",
            "game": true,
            "description": "Ping!",
            "urltogame": "http://ditzbitz.com/pang.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/pang1.png"
        },
        {
            "bitzId": "38",
            "name": "BullyBall",
            "game": true,
            "description": "Prevent the survival of everyone but the red dot.",
            "urltogame": "http://ditzbitz.com/bullyball.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/bullball1.png"
        },
        {
            "bitzId": "39",
            "name": "RoundBound",
            "game": true,
            "description": "Literally running in circles.",
            "urltogame": "http://ditzbitz.com/circlerunner.html",
            "tags": [2],
            "imgsrc": "http://ditzbitz.com/roundbound1.png"
        },
        {
            "bitzId": "40",
            "name": "Tractor Scheme",
            "game": false,
            "description": "A loud space shooter with a tractor beam.",
            "urltogame": "http://ditzbitz.com/tractor.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/tractorscam1.png"
        },
        {
            "bitzId": "41",
            "name": "Terrible Graphics",
            "game": true,
            "description": "A platforming adventure in a graph.",
            "urltogame": "http://ditzbitz.com/grap.html",
            "tags": [0,2, 9],
            "imgsrc": "http://ditzbitz.com/graphics1.png"
        },
        {
            "bitzId": "42",
            "name": "Trigtrials",
            "game": true,
            "description": "A deck-building math-strategy card-combat RPG.",
            "urltogame": "http://ditzbitz.com/trigtrials.html",
            "tags": [3,1,5, 8],
            "imgsrc": "http://ditzbitz.com/trigtrials1.png"
        },
        {
            "bitzId": "43",
            "name": "Wigglewall",
            "game": false,
            "description": "Watch the walls warp as you click.",
            "urltogame": "http://ditzbitz.com/wigglewall.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/wigglewall1.png"
        },
        {
            "bitzId": "44",
            "name": "Vipress",
            "game": true,
            "description": "Navigate the world as a snake-woman.",
            "urltogame": "http://ditzbitz.com/slither.html",
            "tags": [2,4, 9],
            "imgsrc": "http://ditzbitz.com/vipress1.png"
        },
        {
            "bitzId": "45",
            "name": "Felldown",
            "game": true,
            "description": "Watch the walls warp as you click.",
            "urltogame": "http://ditzbitz.com/felldown.html",
            "tags": [0,4],
            "imgsrc": "http://ditzbitz.com/felldown1.png"
        },
        {
            "bitzId": "46",
            "name": "Rainbow Runner",
            "game": false,
            "description": "Use all of your wits and fingers to controll the runner.",
            "urltogame": "http://ditzbitz.com/rainbowrunner.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/rainbowrunner1.png"
        },
        {
            "bitzId": "47",
            "name": "Hoppy Dot",
            "game": true,
            "description": "Hop the dot through the gaps in the walls.",
            "urltogame": "http://ditzbitz.com/sidewinder.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/hoppy1.png"
        },
        {
            "bitzId": "48",
            "name": "Hoppy Donut",
            "game": true,
            "description": "Hop the donut through the gaps in the walls.",
            "urltogame": "http://ditzbitz.com/sidewinderd.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/hopdonut1.png"
        },
        {
            "bitzId": "49",
            "name": "Bungi",
            "game": false,
            "description": "Manipulate the fungal evolution.",
            "urltogame": "http://ditzbitz.com/bungi.html",
            "tags": [1, 6, 10 ],
            "imgsrc": "http://ditzbitz.com/bungi1.png"
        },
        {
            "bitzId": "50",
            "name": "Beatnik Battle",
            "game": true,
            "description": "Play this fairly typical resource-management turn-based RPG.",
            "urltogame": "http://ditzbitz.com/beatnik.html",
            "tags": [7, 3, 5, 8],
            "imgsrc": "http://ditzbitz.com/beatnik1.png"
        },
        {
            "bitzId": "52",
            "name": "Spop",
            "game": false,
            "description": "A pandemic simulation.",
            "urltogame": "http://ditzbitz.com/spop.html",
            "tags": [1, 6],
            "imgsrc": "http://ditzbitz.com/spop1.png"
        },
        {
            "bitzId": "53",
            "name": "LaserScroller",
            "game": true,
            "description": "Laser the bombs before they destroy your home.",
            "urltogame": "http://ditzbitz.com/recoil.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/laserscroller1.png"
        },
        {
            "bitzId": "54",
            "name": "Power Tower",
            "game": true,
            "description": "Laser the bombs before they destroy your home, but with buildings.",
            "urltogame": "http://ditzbitz.com/powertower.html",
            "tags": [3],
            "imgsrc": "http://ditzbitz.com/towers1.png"
        },
        {
            "bitzId": "55",
            "name": "Power Towers Freeform",
            "game": true,
            "description": "Laser the bombs before they destroy your home, but with buildings, and freeform.",
            "urltogame": "http://ditzbitz.com/powertowerx.html",
            "tags": [3],
            "imgsrc": "http://ditzbitz.com/towersf1.png"
        },
        {
            "bitzId": "56",
            "name": "King of Sagittarius",
            "game": true,
            "description": "Colonize the galaxy, fight for the supremacy of your species!",
            "urltogame": "http://ditzbitz.com/sagitarius.html",
            "tags": [1,3,4,5,6],
            "imgsrc": "http://ditzbitz.com/king1.png"
        },
        {
            "bitzId": "57",
            "name": "BlastyBoxes",
            "game": true,
            "description": "Do the math, disarm the bomb!",
            "urltogame": "http://ditzbitz.com/muse.html",
            "tags": [5,7,8],
            "imgsrc": "http://ditzbitz.com/blastyboxes1.png"
        },
        {
            "bitzId": "58",
            "name": "BoxSteer",
            "game": true,
            "description": "Select the box, move the ball, violate inertia!",
            "urltogame": "http://ditzbitz.com/boxsteer.html",
            "tags": [0,4],
            "imgsrc": "http://ditzbitz.com/boxsteer1.png"
        },
        {
            "bitzId": "59",
            "name": "Swoop",
            "game": false,
            "description": "Collect the boxes, swoop the ball.",
            "urltogame": "http://ditzbitz.com/swoop.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/swoop1.png"
        },
        {
            "bitzId": "60",
            "name": "BlastyBalls",
            "game": true,
            "description": "Protect yourself with deadly force.",
            "urltogame": "http://ditzbitz.com/blastyballs.html",
            "tags": [1,4,5],
            "imgsrc": "http://ditzbitz.com/blastyballs1.png"
        },
        {
            "bitzId": "61",
            "name": "Crawler",
            "game": true,
            "description": "Protect yourself with deadly force, but in a dungeon.",
            "urltogame": "http://ditzbitz.com/crawler.html",
            "tags": [1,4,5],
            "imgsrc": "http://ditzbitz.com/crawler1.png"
        },
        {
            "bitzId": "62",
            "name": "Boggy",
            "game": false,
            "description": "Solar-powered platforming.",
            "urltogame": "http://ditzbitz.com/curveshot.html",
            "tags": [0, 9],
            "imgsrc": "http://ditzbitz.com/boggy1.png"
        },
        {
            "bitzId": "62",
            "name": "Saiiling Skylines",
            "game": true,
            "description": "Sailing around the submerged city.",
            "urltogame": "http://ditzbitz.com/swooplesssea.html",
            "tags": [2,3,4,5,6],
            "imgsrc": "http://ditzbitz.com/sailing1.png"
        },
        {
            "bitzId": "63",
            "name": "Box Dice",
            "game": true,
            "description": "Math-powered thinkforming.",
            "urltogame": "http://ditzbitz.com/box.html",
            "tags": [8],
            "imgsrc": "http://ditzbitz.com/beatbox1.png"
        },
        {
            "bitzId": "64",
            "name": "Dancer",
            "game": true,
            "description": "Shape-shiting action RPG.",
            "urltogame": "http://ditzbitz.com/dancer.html",
            "tags": [2,3,4,5],
            "imgsrc": "http://ditzbitz.com/dancer1.png"
        },
        // {
        //     "bitzId": "65",
        //     "name": "Dancer",
        //     "game": true,
        //     "description": "Shape-shiting action RPG.",
        //     "urltogame": "http://ditzbitz.com/dancer.html",
        //     "tags": [2,3,4,5],
        //     "imgsrc": "http://ditzbitz.com/placeholder1.png"
        // },
        {
            "bitzId": "66",
            "name": "OctoBreeder",
            "game": false,
            "description": "Breed patterns.",
            "urltogame": "http://ditzbitz.com/tempus.html",
            "tags": [1, 10],
            "imgsrc": "http://ditzbitz.com/octobreeder1.png"
        },
        {
            "bitzId": "67",
            "name": "Rays?",
            "game": false,
            "description": "Ray casting.",
            "urltogame": "http://ditzbitz.com/rays.html",
            "tags": [1,6],
            "imgsrc": "http://ditzbitz.com/rays1.png"
        },
        {
            "bitzId": "68",
            "name": "RaysCar",
            "game": true,
            "description": "Ray carsting.",
            "urltogame": "http://ditzbitz.com/carray.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/rayscar1.png"
        },
        {
            "bitzId": "69",
            "name": "PitSnake",
            "game": false,
            "description": "Snake, but with gravity.",
            "urltogame": "http://ditzbitz.com/pitsnake.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/pitsnake1.png"
        },
        {
            "bitzId": "70",
            "name": "Rope",
            "game": false,
            "description": "Rope, but with gravity.",
            "urltogame": "http://ditzbitz.com/springbase.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/rope1.png"
        },
        {
            "bitzId": "71",
            "name": "Structures of Slime",
            "game": false,
            "description": "Slime, but with gravity.",
            "urltogame": "http://ditzbitz.com/slime.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/structures1.png"
        },
        {
            "bitzId": "72",
            "name": "Commodity City",
            "game": true,
            "description": "Build a happy city.",
            "urltogame": "http://ditzbitz.com/commoditycity.html",
            "tags": [6,3],
            "imgsrc": "http://ditzbitz.com/city1.png"
        },
        {
            "bitzId": "73",
            "name": "Smokey",
            "game": true,
            "description": "Burn it all down.",
            "urltogame": "http://ditzbitz.com/fire.html",
            "tags": [1,4,0],
            "imgsrc": "http://ditzbitz.com/smokey1.png"
        },
        {
            "bitzId": "74",
            "name": "Fruit Squish",
            "game": true,
            "description": "Squish fruits.",
            "urltogame": "http://ditzbitz.com/fruitsquish.html",
            "tags": [1,7,3],
            "imgsrc": "http://ditzbitz.com/fruitsquish1.png"
        },
        {
            "bitzId": "75",
            "name": "Dancing In the Exploding Sky",
            "game": true,
            "description": "Film the exploding fireworks with your drone.",
            "urltogame": "http://ditzbitz.com/firedrone.html",
            "tags": [0,1,7,3],
            "imgsrc": "http://ditzbitz.com/dancing1.png"
        },
        {
            "bitzId": "76",
            "name": "Its just an anthill",
            "game": false,
            "description": "Scroll through the ant-hill.",
            "urltogame": "http://ditzbitz.com/anteslope.html",
            "tags": [0,1,7,3],
            "imgsrc": "http://ditzbitz.com/anthill1.png"
        },
        {
            "bitzId": "77",
            "name": "Boom Boom",
            "game": true,
            "description": "Blast through the walls.",
            "urltogame": "http://ditzbitz.com/grenade.html",
            "tags": [0,4,2,6],
            "imgsrc": "http://ditzbitz.com/boom1.png"
        },
        {
            "bitzId": "78",
            "name": "O",
            "game": true,
            "description": "An RPG with spell crafting. Beyond language.",
            "urltogame": "http://ditzbitz.com/O.html",
            "tags": [1,3,4,5,7,8],
            "imgsrc": "http://ditzbitz.com/o1.png"
        },
        {
            "bitzId": "79",
            "name": "Grappler",
            "game": true,
            "description": "Climb away from the lava!",
            "urltogame": "http://ditzbitz.com/grappler.html",
            "tags": [0,2,4,5,6],
            "imgsrc": "http://ditzbitz.com/grappler1.png"
        },
        {
            "bitzId": "80",
            "name": "Autorise",
            "game": true,
            "description": "Fly out of the shaft!",
            "urltogame": "http://ditzbitz.com/autorise.html",
            "tags": [0, 4],
            "imgsrc": "http://ditzbitz.com/autorise1.png"
        },
        {
            "bitzId": "81",
            "name": "Sloth",
            "game": true,
            "description": "Crawl the sloth",
            "urltogame": "http://ditzbitz.com/sloth.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/sloth1.png"
        },
        {
            "bitzId": "82",
            "name": "Sloth AI",
            "game": false,
            "description": "Direct the sloth",
            "urltogame": "http://ditzbitz.com/sloth2.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/slothai1.png"
        },
        {
            "bitzId": "83",
            "name": "Spider Sloth",
            "game": true,
            "description": "Direct the sloth to crawl",
            "urltogame": "http://ditzbitz.com/platformrpgoctopus.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/spidersloth1.png"
        },
        {
            "bitzId": "84",
            "name": "BTL",
            "game": true,
            "description": "Direct the crew to control the ship",
            "urltogame": "http://ditzbitz.com/btl.html",
            "tags": [3,4,5,6],
            "imgsrc": "http://ditzbitz.com/btl1.png"
        },
        {
            "bitzId": "85",
            "name": "Buggin",
            "game": false,
            "description": "Watch the buggin frolic. You can feed them.",
            "urltogame": "http://ditzbitz.com/buggin.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/buggin1.png"
        },
        {
            "bitzId": "86",
            "name": "DeathTower",
            "game": true,
            "description": "Watch the demons you summon be killed by your tower.",
            "urltogame": "http://ditzbitz.com/deathtower.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/death1.png"
        },
        {
            "bitzId": "87",
            "name": "Manatee Leap",
            "game": true,
            "description": "Leap freely in the flying water orbs.",
            "urltogame": "http://ditzbitz.com/manatee.html",
            "tags": [0,1,2,4],
            "imgsrc": "http://ditzbitz.com/manatee1.png"
        },
        {
            "bitzId": "88",
            "name": "Donutee Leap",
            "game": true,
            "description": "Leap freely in the flying water orbs, but you're a donut.",
            "urltogame": "http://ditzbitz.com/manateed.html",
            "tags": [0,1,2,4],
            "imgsrc": "http://ditzbitz.com/donutee1.png"
        },
        {
            "bitzId": "89",
            "name": "Endless Nanner",
            "game": false,
            "description": "Leap freely but you're a banana.",
            "urltogame": "http://ditzbitz.com/anana.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/nanner1.png"
        },
        {
            "bitzId": "90",
            "name": "Angry Breads",
            "game": false,
            "description": "Knock over a stack of balls with a donut.",
            "urltogame": "http://ditzbitz.com/flinger.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/angry1.png"
        },
        {
            "bitzId": "91",
            "name": "Island",
            "game": false,
            "description": "Plants, animals, and their visual acuity evolve over time.",
            "urltogame": "http://ditzbitz.com/evoisland.html",
            "tags": [6, 10],
            "imgsrc": "http://ditzbitz.com/island1.png"
        },
        {
            "bitzId": "92",
            "name": "Typing Tutor",
            "game": false,
            "description": "Typing with a pleasant set of sounds.",
            "urltogame": "http://ditzbitz.com/typingtutor.html",
            "tags": [2],
            "imgsrc": "http://ditzbitz.com/typing1.png"
        },
        {
            "bitzId": "93",
            "name": "Pomao's Quest",
            "game": true,
            "description": "Help Pomao get home, among other things.",
            "urltogame": "http://ditzbitz.com/pomao.html",
            "tags": [0,2,4,5,9],
            "imgsrc":  "http://ditzbitz.com/pomao1.png"
        },
        {
            "bitzId": "94",
            "name": "Julia Sets",
            "game": false,
            "description": "Julia sets.",
            "urltogame": "http://ditzbitz.com/julia.html",
            "tags": [8],
            "imgsrc": "http://ditzbitz.com/julia1.png"
        },
        {
            "bitzId": "95",
            "name": "Fiskerman",
            "game": true,
            "description": "Catch and eat fish.",
            "urltogame": "http://ditzbitz.com/fiskerman.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/fiskerman1.png"
        },
        {
            "bitzId": "96",
            "name": "Meatgrinder",
            "game": false,
            "description": "Grind up some meat.",
            "urltogame": "http://ditzbitz.com/meatgrinder.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/meatgrinder1.png"
        }
    ],
    displayBitz:  [
        {
            "bitzId": "1",
            "name": "Kessler's Cleanup",
            "game": true,
            "description": "A snake-asteroids game, click and steer at the same time to help captain Kessler clean up the asteroid!",
            "urltogame": "http://ditzbitz.com/blaster.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/kessler1.png"
        },
        {
            "bitzId": "2",
            "name": "Moonshot",
            "game": true,
            "description": "Moon-colonization and simple steering with physics.",
            "urltogame": "http://ditzbitz.com/moonshot.html",
            "tags": [0,1,6],
            "imgsrc":  "http://ditzbitz.com/moonshot1.png"
        },
        {
            "bitzId": "3",
            "name": "Rollout",
            "game": true,
            "description": "A simple endless runner.",
            "urltogame": "http://ditzbitz.com/rollout.html",
            "tags": [4, 2],
            "imgsrc": "http://ditzbitz.com/rollout1.png"
        },
        {
            "bitzId": "4",
            "name": "Bacterioids",
            "game": false,
            "description": "A rock-paper-scissors population dynamics simulation themed around Bacteria!",
            "urltogame": "http://ditzbitz.com/bacterioids.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/bacteroids1.png"
        },
        {
            "bitzId": "5",
            "name": "Archeanoids",
            "game": false,
            "description": "A population dynamics simulation themed around Archeans!",
            "urltogame": "http://ditzbitz.com/animal.html",
            "tags": [6, 10],
            "imgsrc": "http://ditzbitz.com/archeanoids1.png"
        },
        {
            "bitzId": "6",
            "name": "Yeastoids",
            "game": false,
            "description": "A population dynamics simulation themed around Yeast!",
            "urltogame": "http://ditzbitz.com/yeasterealiac.html",
            "tags": [6, 10],
            "imgsrc":"http://ditzbitz.com/yeastoids1.png"
        },
        {
            "bitzId": "7",
            "name": "Zarkavoids",
            "game": true,
            "description": "Break the bricks, steer the ball.",
            "urltogame": "http://ditzbitz.com/zarkavoids.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/zarkavoids1.png"
        },
        {
            "bitzId": "8",
            "name": "Platforms",
            "game": true,
            "description": "Fall freely, but not for very long.",
            "urltogame": "http://ditzbitz.com/platforms.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/platform1.png"
        },
        {
            "bitzId": "9",
            "name": "Katamaracman",
            "game": true,
            "description": "Consume small white balls, stick to large blue walls.",
            "urltogame": "http://ditzbitz.com/katamaracman.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/kat1.png"
        },
        {
            "bitzId": "10",
            "name": "Magneato",
            "game": false,
            "description": "Watch and guide the charged particles as they orbit.",
            "urltogame": "http://ditzbitz.com/magneato.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/mag1.png"
        },
        {
            "bitzId": "11",
            "name": "Firework",
            "game": false,
            "description": "Adjust the explosion as you like.",
            "urltogame": "http://ditzbitz.com/firework.html",
            "tags": [1, 6],
            "imgsrc": "http://ditzbitz.com/firework1.png"
        },
        {
            "bitzId": "12",
            "name": "Boxclick",
            "game": true,
            "description": "Test how good you are at clicking.",
            "urltogame": "http://ditzbitz.com/boxclick.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/boxclick1.png"
        },
        {
            "bitzId": "13",
            "name": "SimonClicks",
            "game": true,
            "description": "Its an idle clicking income generation game.",
            "urltogame": "http://ditzbitz.com/simonclicks.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/simon1.png"
        },
        {
            "bitzId": "14",
            "name": "YeahBuoy",
            "game": false,
            "description": "Click and drag the bouyant masses around the pool of water.",
            "urltogame": "http://ditzbitz.com/yeahbuoy.html",
            "tags": [0,6,1],
            "imgsrc": "http://ditzbitz.com/buoy1.png"
        },
        {
            "bitzId": "15",
            "name": "Sheephole",
            "game": true,
            "description": "Click to steer your sheep-dog, scare the sheep into a bottomless pit.",
            "urltogame": "http://ditzbitz.com/sheephole.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/sheephole1.png"
        },
        {
            "bitzId": "16",
            "name": "Kessler's Comedown",
            "game": true,
            "description": "Help captain Kessler return to earth.",
            "urltogame": "http://ditzbitz.com/crashdown.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/kesslercomedown1.png"
        },
        {
            "bitzId": "17",
            "name": "Rippler",
            "game": false,
            "description": "Just a pleasant rippling pattern.",
            "urltogame": "http://ditzbitz.com/rippler.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/rippler1.png"
        },
        {
            "bitzId": "18",
            "name": "Gas Compressor",
            "game": false,
            "description": "Watch the gas compress and decompress.",
            "urltogame": "http://ditzbitz.com/duster.html",
            "tags": [1,6,0],
            "imgsrc": "http://ditzbitz.com/gascompressor1.png"
        },
        {
            "bitzId": "19",
            "name": "Cognito",
            "game": false,
            "description": "Gears making connections.",
            "urltogame": "http://ditzbitz.com/cognito.html",
            "tags": [1,6,0],
            "imgsrc": "http://ditzbitz.com/cognito1.png"
        },
        {
            "bitzId": "20",
            "name": "Make Like a Tree",
            "game": false,
            "description": "A Barnsley fern generator.",
            "urltogame": "http://ditzbitz.com/makelikeatree.html",
            "tags": [1,6],
            "imgsrc": "http://ditzbitz.com/tree1.png"
        },
        {
            "bitzId": "21",
            "name": "Rainbow Spirotron",
            "game": false,
            "description": "A rainbow spinner.",
            "urltogame": "http://ditzbitz.com/spirotron.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/rainbow1.png"
        },
        {
            "bitzId": "22",
            "name": "Waves",
            "game": false,
            "description": "A waveform toy.",
            "urltogame": "http://ditzbitz.com/waves.html",
            "tags": [1,6],
            "imgsrc": "http://ditzbitz.com/waves1.png"
        },
        {
            "bitzId": "23",
            "name": "Garbo Golf",
            "game": false,
            "description": "Space golf",
            "urltogame": "http://ditzbitz.com/garbogolf.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/garbo1.png"
        },
        {
            "bitzId": "24",
            "name": "Zen Fruit Picker",
            "game": false,
            "description": "Pick fruit.",
            "urltogame": "http://ditzbitz.com/fruitpicker.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/fruitpicker1.png"
        },
        {
            "bitzId": "25",
            "name": "MOBAsic",
            "game": true,
            "description": "A very basic facsimile of a MOBA game.",
            "urltogame": "http://ditzbitz.com/autocheckers.html",
            "tags": [6,3,4],
            "imgsrc": "http://ditzbitz.com/moba1.png"
        },
        {
            "bitzId": "26",
            "name": "Words To Your Ambiguitousnessly",
            "game": false,
            "description": "A very bad word toy.",
            "urltogame": "http://ditzbitz.com/words.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/words1.png"
        },
        {
            "bitzId": "27",
            "name": "Gradient",
            "game": false,
            "description": "A gradient making toy.",
            "urltogame": "http://ditzbitz.com/gradient.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/gradient1.png"
        },
        {
            "bitzId": "28",
            "name": "It's a Conspiratron",
            "game": false,
            "description": "Play with the conspiracy webtoy.",
            "urltogame": "http://ditzbitz.com/conspiratron.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/conspiratron1.png"
        },
        {
            "bitzId": "29",
            "name": "Wormer",
            "game": false,
            "description": "Play with the worm webtoy.",
            "urltogame": "http://ditzbitz.com/wormer.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/wormer1.png"
        },
        {
            "bitzId": "30",
            "name": "Drip Drop",
            "game": false,
            "description": "Watch the drops fall.",
            "urltogame": "http://ditzbitz.com/drops.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/drip1.png"
        },
        {
            "bitzId": "31",
            "name": "Bloomer",
            "game": false,
            "description": "Watch the bloom spin.",
            "urltogame": "http://ditzbitz.com/recurse.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/bloomer1.png"
        },
        {
            "bitzId": "32",
            "name": "LapJam",
            "game": true,
            "description": "Race your friend!",
            "urltogame": "http://ditzbitz.com/safetyrace.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/lapjam1.png"
        },
        {
            "bitzId": "33",
            "name": "Digzone",
            "game": true,
            "description": "Blast the flying grids to smithereens!",
            "urltogame": "http://ditzbitz.com/digzone.html",
            "tags": [0,4],
            "imgsrc": "http://ditzbitz.com/digzone1.png"
        },
        {
            "bitzId": "34",
            "name": "DongoDongo",
            "game": false,
            "description": "Collect the dots with your body.",
            "urltogame": "http://ditzbitz.com/dongodongo.html",
            "tags": [1],
            "imgsrc": "http://ditzbitz.com/dongodongo1.png"
        },
        {
            "bitzId": "35",
            "name": "StackZone",
            "game": false,
            "description": "Stack blocks and jump around.",
            "urltogame": "http://ditzbitz.com/stackzone.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/stackzone1.png"
        },
        {
            "bitzId": "36",
            "name": "Knocktapus",
            "game": true,
            "description": "Defend your young, keep the ocean clean!",
            "urltogame": "http://ditzbitz.com/corona.html",
            "tags": [0,1,4,5,6],
            "imgsrc": "http://ditzbitz.com/knocktapus1.png"
        },
        {
            "bitzId": "37",
            "name": "Pang",
            "game": true,
            "description": "Ping!",
            "urltogame": "http://ditzbitz.com/pang.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/pang1.png"
        },
        {
            "bitzId": "38",
            "name": "BullyBall",
            "game": true,
            "description": "Prevent the survival of everyone but the red dot.",
            "urltogame": "http://ditzbitz.com/bullyball.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/bullball1.png"
        },
        {
            "bitzId": "39",
            "name": "RoundBound",
            "game": true,
            "description": "Literally running in circles.",
            "urltogame": "http://ditzbitz.com/circlerunner.html",
            "tags": [2],
            "imgsrc": "http://ditzbitz.com/roundbound1.png"
        },
        {
            "bitzId": "40",
            "name": "Tractor Scheme",
            "game": false,
            "description": "A loud space shooter with a tractor beam.",
            "urltogame": "http://ditzbitz.com/tractor.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/tractorscam1.png"
        },
        {
            "bitzId": "41",
            "name": "Terrible Graphics",
            "game": true,
            "description": "A platforming adventure in a graph.",
            "urltogame": "http://ditzbitz.com/grap.html",
            "tags": [0,2, 9],
            "imgsrc": "http://ditzbitz.com/graphics1.png"
        },
        {
            "bitzId": "42",
            "name": "Trigtrials",
            "game": true,
            "description": "A deck-building math-strategy card-combat RPG.",
            "urltogame": "http://ditzbitz.com/trigtrials.html",
            "tags": [3,1,5, 8],
            "imgsrc": "http://ditzbitz.com/trigtrials1.png"
        },
        {
            "bitzId": "43",
            "name": "Wigglewall",
            "game": false,
            "description": "Watch the walls warp as you click.",
            "urltogame": "http://ditzbitz.com/wigglewall.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/wigglewall1.png"
        },
        {
            "bitzId": "44",
            "name": "Vipress",
            "game": true,
            "description": "Navigate the world as a snake-woman.",
            "urltogame": "http://ditzbitz.com/slither.html",
            "tags": [2,4, 9],
            "imgsrc": "http://ditzbitz.com/vipress1.png"
        },
        {
            "bitzId": "45",
            "name": "Felldown",
            "game": true,
            "description": "Watch the walls warp as you click.",
            "urltogame": "http://ditzbitz.com/felldown.html",
            "tags": [0,4],
            "imgsrc": "http://ditzbitz.com/felldown1.png"
        },
        {
            "bitzId": "46",
            "name": "Rainbow Runner",
            "game": false,
            "description": "Use all of your wits and fingers to controll the runner.",
            "urltogame": "http://ditzbitz.com/rainbowrunner.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/rainbowrunner1.png"
        },
        {
            "bitzId": "47",
            "name": "Hoppy Dot",
            "game": true,
            "description": "Hop the dot through the gaps in the walls.",
            "urltogame": "http://ditzbitz.com/sidewinder.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/hoppy1.png"
        },
        {
            "bitzId": "48",
            "name": "Hoppy Donut",
            "game": true,
            "description": "Hop the donut through the gaps in the walls.",
            "urltogame": "http://ditzbitz.com/sidewinderd.html",
            "tags": [0,1],
            "imgsrc": "http://ditzbitz.com/hopdonut1.png"
        },
        {
            "bitzId": "49",
            "name": "Bungi",
            "game": false,
            "description": "Manipulate the fungal evolution.",
            "urltogame": "http://ditzbitz.com/bungi.html",
            "tags": [1, 6, 10 ],
            "imgsrc": "http://ditzbitz.com/bungi1.png"
        },
        {
            "bitzId": "50",
            "name": "Beatnik Battle",
            "game": true,
            "description": "Play this fairly typical resource-management turn-based RPG.",
            "urltogame": "http://ditzbitz.com/beatnik.html",
            "tags": [7, 3, 5, 8],
            "imgsrc": "http://ditzbitz.com/beatnik1.png"
        },
        {
            "bitzId": "52",
            "name": "Spop",
            "game": false,
            "description": "A pandemic simulation.",
            "urltogame": "http://ditzbitz.com/spop.html",
            "tags": [1, 6],
            "imgsrc": "http://ditzbitz.com/spop1.png"
        },
        {
            "bitzId": "53",
            "name": "LaserScroller",
            "game": true,
            "description": "Laser the bombs before they destroy your home.",
            "urltogame": "http://ditzbitz.com/recoil.html",
            "tags": [4],
            "imgsrc": "http://ditzbitz.com/laserscroller1.png"
        },
        {
            "bitzId": "54",
            "name": "Power Tower",
            "game": true,
            "description": "Laser the bombs before they destroy your home, but with buildings.",
            "urltogame": "http://ditzbitz.com/powertower.html",
            "tags": [3],
            "imgsrc": "http://ditzbitz.com/towers1.png"
        },
        {
            "bitzId": "55",
            "name": "Power Towers Freeform",
            "game": true,
            "description": "Laser the bombs before they destroy your home, but with buildings, and freeform.",
            "urltogame": "http://ditzbitz.com/powertowerx.html",
            "tags": [3],
            "imgsrc": "http://ditzbitz.com/towersf1.png"
        },
        {
            "bitzId": "56",
            "name": "King of Sagittarius",
            "game": true,
            "description": "Colonize the galaxy, fight for the supremacy of your species!",
            "urltogame": "http://ditzbitz.com/sagitarius.html",
            "tags": [1,3,4,5,6],
            "imgsrc": "http://ditzbitz.com/king1.png"
        },
        {
            "bitzId": "57",
            "name": "BlastyBoxes",
            "game": true,
            "description": "Do the math, disarm the bomb!",
            "urltogame": "http://ditzbitz.com/muse.html",
            "tags": [5,7,8],
            "imgsrc": "http://ditzbitz.com/blastyboxes1.png"
        },
        {
            "bitzId": "58",
            "name": "BoxSteer",
            "game": true,
            "description": "Select the box, move the ball, violate inertia!",
            "urltogame": "http://ditzbitz.com/boxsteer.html",
            "tags": [0,4],
            "imgsrc": "http://ditzbitz.com/boxsteer1.png"
        },
        {
            "bitzId": "59",
            "name": "Swoop",
            "game": false,
            "description": "Collect the boxes, swoop the ball.",
            "urltogame": "http://ditzbitz.com/swoop.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/swoop1.png"
        },
        {
            "bitzId": "60",
            "name": "BlastyBalls",
            "game": true,
            "description": "Protect yourself with deadly force.",
            "urltogame": "http://ditzbitz.com/blastyballs.html",
            "tags": [1,4,5],
            "imgsrc": "http://ditzbitz.com/blastyballs1.png"
        },
        {
            "bitzId": "61",
            "name": "Crawler",
            "game": true,
            "description": "Protect yourself with deadly force, but in a dungeon.",
            "urltogame": "http://ditzbitz.com/crawler.html",
            "tags": [1,4,5],
            "imgsrc": "http://ditzbitz.com/crawler1.png"
        },
        {
            "bitzId": "62",
            "name": "Boggy",
            "game": false,
            "description": "Solar-powered platforming.",
            "urltogame": "http://ditzbitz.com/curveshot.html",
            "tags": [0, 9],
            "imgsrc": "http://ditzbitz.com/boggy1.png"
        },
        {
            "bitzId": "62",
            "name": "Saiiling Skylines",
            "game": true,
            "description": "Sailing around the submerged city.",
            "urltogame": "http://ditzbitz.com/swooplesssea.html",
            "tags": [2,3,4,5,6],
            "imgsrc": "http://ditzbitz.com/sailing1.png"
        },
        {
            "bitzId": "63",
            "name": "Box Dice",
            "game": true,
            "description": "Math-powered thinkforming.",
            "urltogame": "http://ditzbitz.com/box.html",
            "tags": [8],
            "imgsrc": "http://ditzbitz.com/beatbox1.png"
        },
        // {
        //     "bitzId": "64",
        //     "name": "Dancer",
        //     "game": true,
        //     "description": "Shape-shiting action RPG.",
        //     "urltogame": "http://ditzbitz.com/dancer.html",
        //     "tags": [2,3,4,5],
        //     "imgsrc": "http://ditzbitz.com/placeholder1.png"
        // },
        {
            "bitzId": "65",
            "name": "Dancer",
            "game": true,
            "description": "Shape-shiting action RPG.",
            "urltogame": "http://ditzbitz.com/dancer.html",
            "tags": [2,3,4,5],
            "imgsrc": "http://ditzbitz.com/dancer1.png"
        },
        {
            "bitzId": "66",
            "name": "OctoBreeder",
            "game": false,
            "description": "Breed patterns.",
            "urltogame": "http://ditzbitz.com/tempus.html",
            "tags": [1, 10],
            "imgsrc": "http://ditzbitz.com/octobreeder1.png"
        },
        {
            "bitzId": "67",
            "name": "Rays?",
            "game": false,
            "description": "Ray casting.",
            "urltogame": "http://ditzbitz.com/rays.html",
            "tags": [1,6],
            "imgsrc": "http://ditzbitz.com/rays1.png"
        },
        {
            "bitzId": "68",
            "name": "RaysCar",
            "game": true,
            "description": "Ray carsting.",
            "urltogame": "http://ditzbitz.com/carray.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/rayscar1.png"
        },
        {
            "bitzId": "69",
            "name": "PitSnake",
            "game": false,
            "description": "Snake, but with gravity.",
            "urltogame": "http://ditzbitz.com/pitsnake.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/pitsnake1.png"
        },
        {
            "bitzId": "70",
            "name": "Rope",
            "game": false,
            "description": "Rope, but with gravity.",
            "urltogame": "http://ditzbitz.com/springbase.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/rope1.png"
        },
        {
            "bitzId": "71",
            "name": "Structures of Slime",
            "game": false,
            "description": "Slime, but with gravity.",
            "urltogame": "http://ditzbitz.com/slime.html",
            "tags": [0,1,6],
            "imgsrc": "http://ditzbitz.com/structures1.png"
        },
        {
            "bitzId": "72",
            "name": "Commodity City",
            "game": true,
            "description": "Build a happy city.",
            "urltogame": "http://ditzbitz.com/commoditycity.html",
            "tags": [6,3],
            "imgsrc": "http://ditzbitz.com/city1.png"
        },
        {
            "bitzId": "73",
            "name": "Smokey",
            "game": true,
            "description": "Burn it all down.",
            "urltogame": "http://ditzbitz.com/fire.html",
            "tags": [1,4,0],
            "imgsrc": "http://ditzbitz.com/smokey1.png"
        },
        {
            "bitzId": "74",
            "name": "Fruit Squish",
            "game": true,
            "description": "Squish fruits.",
            "urltogame": "http://ditzbitz.com/fruitsquish.html",
            "tags": [1,7,3],
            "imgsrc": "http://ditzbitz.com/fruitsquish1.png"
        },
        {
            "bitzId": "75",
            "name": "Dancing In the Exploding Sky",
            "game": true,
            "description": "Film the exploding fireworks with your drone.",
            "urltogame": "http://ditzbitz.com/firedrone.html",
            "tags": [0,1,7,3],
            "imgsrc": "http://ditzbitz.com/dancing1.png"
        },
        {
            "bitzId": "76",
            "name": "Its just an anthill",
            "game": false,
            "description": "Scroll through the ant-hill.",
            "urltogame": "http://ditzbitz.com/anteslope.html",
            "tags": [0,1,7,3],
            "imgsrc": "http://ditzbitz.com/anthill1.png"
        },
        {
            "bitzId": "77",
            "name": "Boom Boom",
            "game": true,
            "description": "Blast through the walls.",
            "urltogame": "http://ditzbitz.com/grenade.html",
            "tags": [0,4,2,6],
            "imgsrc": "http://ditzbitz.com/boom1.png"
        },
        {
            "bitzId": "78",
            "name": "O",
            "game": true,
            "description": "An RPG with spell crafting. Beyond language.",
            "urltogame": "http://ditzbitz.com/O.html",
            "tags": [1,3,4,5,7,8],
            "imgsrc": "http://ditzbitz.com/o1.png"
        },
        {
            "bitzId": "79",
            "name": "Grappler",
            "game": true,
            "description": "Climb away from the lava!",
            "urltogame": "http://ditzbitz.com/grappler.html",
            "tags": [0,2,4,5,6],
            "imgsrc": "http://ditzbitz.com/grappler1.png"
        },
        {
            "bitzId": "80",
            "name": "Autorise",
            "game": true,
            "description": "Fly out of the shaft!",
            "urltogame": "http://ditzbitz.com/autorise.html",
            "tags": [0, 4],
            "imgsrc": "http://ditzbitz.com/autorise1.png"
        },
        {
            "bitzId": "81",
            "name": "Sloth",
            "game": true,
            "description": "Crawl the sloth",
            "urltogame": "http://ditzbitz.com/sloth.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/sloth1.png"
        },
        {
            "bitzId": "82",
            "name": "Sloth AI",
            "game": false,
            "description": "Direct the sloth",
            "urltogame": "http://ditzbitz.com/sloth2.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/slothai1.png"
        },
        {
            "bitzId": "83",
            "name": "Spider Sloth",
            "game": true,
            "description": "Direct the sloth to crawl",
            "urltogame": "http://ditzbitz.com/platformrpgoctopus.html",
            "tags": [0,6],
            "imgsrc": "http://ditzbitz.com/spidersloth1.png"
        },
        {
            "bitzId": "84",
            "name": "BTL",
            "game": true,
            "description": "Direct the crew to control the ship",
            "urltogame": "http://ditzbitz.com/btl.html",
            "tags": [3,4,5,6],
            "imgsrc": "http://ditzbitz.com/btl1.png"
        },
        {
            "bitzId": "85",
            "name": "Buggin",
            "game": false,
            "description": "Watch the buggin frolic. You can feed them.",
            "urltogame": "http://ditzbitz.com/buggin.html",
            "tags": [6],
            "imgsrc": "http://ditzbitz.com/buggin1.png"
        },
        {
            "bitzId": "86",
            "name": "DeathTower",
            "game": true,
            "description": "Watch the demons you summon be killed by your tower.",
            "urltogame": "http://ditzbitz.com/deathtower.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/death1.png"
        },
        {
            "bitzId": "87",
            "name": "Manatee Leap",
            "game": true,
            "description": "Leap freely in the flying water orbs.",
            "urltogame": "http://ditzbitz.com/manatee.html",
            "tags": [0,1,2,4],
            "imgsrc": "http://ditzbitz.com/manatee1.png"
        },
        {
            "bitzId": "88",
            "name": "Donutee Leap",
            "game": true,
            "description": "Leap freely in the flying water orbs, but you're a donut.",
            "urltogame": "http://ditzbitz.com/manateed.html",
            "tags": [0,1,2,4],
            "imgsrc": "http://ditzbitz.com/donutee1.png"
        },
        {
            "bitzId": "89",
            "name": "Endless Nanner",
            "game": false,
            "description": "Leap freely but you're a banana.",
            "urltogame": "http://ditzbitz.com/anana.html",
            "tags": [],
            "imgsrc": "http://ditzbitz.com/nanner1.png"
        },
        {
            "bitzId": "90",
            "name": "Angry Breads",
            "game": false,
            "description": "Knock over a stack of balls with a donut.",
            "urltogame": "http://ditzbitz.com/flinger.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/angry1.png"
        },
        {
            "bitzId": "91",
            "name": "Island",
            "game": false,
            "description": "Plants, animals, and their visual acuity evolve over time.",
            "urltogame": "http://ditzbitz.com/evoisland.html",
            "tags": [6, 10],
            "imgsrc": "http://ditzbitz.com/island1.png"
        },
        {
            "bitzId": "92",
            "name": "Typing Tutor",
            "game": false,
            "description": "Typing with a pleasant set of sounds.",
            "urltogame": "http://ditzbitz.com/typingtutor.html",
            "tags": [2],
            "imgsrc": "http://ditzbitz.com/typing1.png"
        },
        {
            "bitzId": "93",
            "name": "Pomao's Quest",
            "game": true,
            "description": "Help Pomao get home, among other things.",
            "urltogame": "http://ditzbitz.com/pomao.html",
            "tags": [0,2,4,5,9],
            "imgsrc":  "http://ditzbitz.com/pomao1.png"
        },
        {
            "bitzId": "94",
            "name": "Julia Sets",
            "game": false,
            "description": "Julia sets.",
            "urltogame": "http://ditzbitz.com/julia.html",
            "tags": [8],
            "imgsrc": "http://ditzbitz.com/julia1.png"
        },
        {
            "bitzId": "95",
            "name": "Fiskerman",
            "game": true,
            "description": "Catch and eat fish.",
            "urltogame": "http://ditzbitz.com/fiskerman.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/fiskerman1.png"
        },
        {
            "bitzId": "96",
            "name": "Meatgrinder",
            "game": false,
            "description": "Grind up some meat.",
            "urltogame": "http://ditzbitz.com/meatgrinder.html",
            "tags": [0],
            "imgsrc": "http://ditzbitz.com/meatgrinder1.png"
        }
    ],
    filterType: "All",
    filterTag: 0,
    sort: "Newest"
}



// document.addEventListener("DOMContentLoaded", () => {

// })

let changeSort = e => {
    let sortStyle = e.target.text
    let displayBitz = STATE.bitz
    if (sortStyle == "Alphabetically") {
        displayBitz.sort((bitz1, bitz2) => bitz1.name > bitz2.name ? 1 : -1)
    } else if (sortStyle == "Oldest") {
        displayBitz.sort((bitz1, bitz2) => parseInt(bitz1.bitzId) >parseInt( bitz2.bitzId) ? 1 : -1)
    } else if (sortStyle == "Newest") {
        displayBitz.sort((bitz1, bitz2) =>  parseInt(bitz1.bitzId)  < parseInt( bitz2.bitzId) ? 1 : -1)
    } else {
        displayBitz.sort((bitz1, bitz2) =>  parseInt(bitz1.bitzId)  < parseInt( bitz2.bitzId) ? 1 : -1)
    }
    STATE.displayBitz = displayBitz
    makeBitzCards()
    console.log(STATE.displayBitz)
}

let changeFilterType = e => {
    let filterTypeStyle = e.target.text
    let displayBitz = STATE.bitz

    if (filterTypeStyle == "Games")
        displayBitz = displayBitz.filter(bitz => bitz.game)
    else if (filterTypeStyle == "Trinkets")
        displayBitz = displayBitz.filter(bitz => !bitz.game)
    else {
        displayBitz = STATE.bitz
    }
    STATE.displayBitz = displayBitz
    makeBitzCards()
    console.log(STATE.displayBitz)
}

let changeFilterTag = e => {
    let filterTagStyle = parseInt(e.target.id)
    let displayBitz = STATE.bitz

    displayBitz = displayBitz.filter(bitz => bitz.tags.includes(filterTagStyle))

    STATE.displayBitz = displayBitz
    makeBitzCards()
    console.log(STATE.displayBitz)
}
class Bitz {
    constructor(bitz, grid) {
        this.id = bitz.bitzId
        this.name = bitz.name
        this.game = bitz.game
        this.tags = bitz.tags
        this.img = {}
        this.img.src =bitz.imgsrc
        this.url = bitz.urltogame
        this.disc = bitz.description

        this.makeTheCard()
    }

    makeTheCard = () => {

        // <div class="ui stackable three column grid" id="bitzgrid">
        

        // <div class="ui special cards">
        //     <div class="card">
        //       <div class="blurring dimmable image">
        //         <div class="ui inverted dimmer">
        //           <div class="content">
        //             <div class="center">

        this.uispecialcard = document.createElement("div")
        this.uispecialcard.classList.add("special")
        this.uispecialcard.classList.add("cards")
        this.uispecialcard.classList.add("ui")
        this.card = document.createElement("div")
        this.card.classList.add("card")
        this.blurringdimmableimage = document.createElement("div")
        // this.blurringdimmableimage.class = "blurring dimmable image"

        this.blurringdimmableimage.classList.add("dimmable")
        this.blurringdimmableimage.classList.add("blurring")
        this.blurringdimmableimage.classList.add("image")


        this.uiinverteddimmer = document.createElement("div")
        // this.uiinverteddimmer.class = "ui inverted dimmer"
        this.uiinverteddimmer.classList.add("ui")
        this.uiinverteddimmer.classList.add("inverted")
        // this.uiinverteddimmer.classList.add("dimmer")
        this.content = document.createElement("div")
        this.content.classList.add("content") 
        this.center = document.createElement("div")
        this.center.classList.add("center")
        this.uiprimarybutton = document.createElement("div")
        this.uiprimarybutton.classList.add("ui")
        this.uiprimarybutton.classList.add("primary")
        // this.uiprimarybutton.classList.add("button")
        this.imgdiv = document.createElement("img")
        this.imgdiv.src = this.img.src
        this.content2 = document.createElement("div")
        this.content2.classList.add("content")
        this.header = document.createElement("a")
        this.header.classList.add("header")
        this.meta = document.createElement("div")
        this.meta.classList.add("meta")

        this.date = document.createElement("span")
        this.date.classList.add("date")

        this.date.innerText = this.disc

        this.header.innerText = this.name
        this.header.href =  this.url
        
        this.uispecialcard.appendChild(this.card)
        this.card.appendChild(this.blurringdimmableimage)
        this.blurringdimmableimage.appendChild(this.uiinverteddimmer)
        this.uiinverteddimmer.appendChild(this.imgdiv)
        this.uiinverteddimmer.appendChild(this.content)
        this.content.appendChild(this.center)
        this.content2.appendChild(this.header)
        this.content2.appendChild(this.meta)
        this.meta.appendChild(this.date)
        this.card.appendChild(this.content2)
        this.content.appendChild( this.uiprimarybutton )

        grid.appendChild(this.uispecialcard)
    }
}
let makeBitzCards = () => {   

    grid.innerHTML = ""
    STATE.displayBitz.forEach(bitz => {
        let card = new Bitz (bitz, grid)
        // let 
    // grid.appendChild(card.specialCardDiv)


    // let div = card.specialCardDiv
    // div.classList.add("column")
    // let text = document.createTextNode("test")
    // div.appendChild(text)
    // grid.appendChild(div)   
 })
}
document.getElementById("alph").addEventListener("click", changeSort)
document.getElementById("new").addEventListener("click", changeSort)
document.getElementById("old").addEventListener("click", changeSort)
document.getElementById("all").addEventListener("click", changeFilterType)
document.getElementById("games").addEventListener("click", changeFilterType)
document.getElementById("trinkets").addEventListener("click", changeFilterType)
document.getElementById("0").addEventListener("click", changeFilterTag)
document.getElementById("1").addEventListener("click", changeFilterTag)
document.getElementById("2").addEventListener("click", changeFilterTag)
document.getElementById("3").addEventListener("click", changeFilterTag)
document.getElementById("4").addEventListener("click", changeFilterTag)
document.getElementById("5").addEventListener("click", changeFilterTag)
document.getElementById("6").addEventListener("click", changeFilterTag)
document.getElementById("7").addEventListener("click", changeFilterTag)
document.getElementById("8").addEventListener("click", changeFilterTag)
document.getElementById("9").addEventListener("click", changeFilterTag)
document.getElementById("10").addEventListener("click", changeFilterTag)

makeBitzCards()
})