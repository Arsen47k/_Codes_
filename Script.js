    Script.js

//
let color = "green"
let elem1 = document.getElementById("button1")
elem1.addEventListener("click", handleColorChange1)
function handleColorChange1(e) {
    color = "blue"
}
let color2 = "gold"
let elem2 = document.getElementById("button2")
elem1.addEventListener("mouseover", handleColorChange2)
function handleColorChange2(e) {
    color2 = "red"
}
let color3 = "black"
let elem3 = document.getElementById("button3")
elem1.addEventListener("mouseover", handleColorChange3)
function handleColorChange3(e) {
    color3 = "green"
}

function generateRandomMatrix(matrixSize, grassCount, grassEaterCount, predaterCount, tntCount) {
    let matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);

        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }

    }



    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] === 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] === 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < predaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] === 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < tntCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        if (matrix[y][x] === 0) {
            matrix[y][x] = 4
        }
    }


    return matrix;

}

let matrix = generateRandomMatrix(40, 90, 35, 15, 10)
let grassArr = []
let grassEaterArr = []
let predaterArr = []
let tntArr = []
let side = 20;

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side)
    background(200)
    frameRate(5)

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            } else if (matrix[y][x] === 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] === 3) {
                let predater = new Predater(x, y);
                predaterArr.push(predater)
            }
            else if (matrix[y][x] === 4) {
                let tnt = new TNT(x, y);
                tntArr.push(tnt)



            }


        }




    }
}
function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1) {
                fill(color)
            } else if (matrix[y][x] === 2) {
                fill(color2)
            }
            else if (matrix[y][x] === 3) {
                fill(color3)
            }
            else if (matrix[y][x] === 4) {
                fill("brown")
            }
            else {
                fill("grey")
            }
            rect(x * side, y * side, side, side)
        }

    }






    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predaterArr) {
        predaterArr[i].eat()
    }
    for (let i in tntArr) {
        tntArr[i].eat()
    }
}
//
