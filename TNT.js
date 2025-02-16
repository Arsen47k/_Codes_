class TNT {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = []

    }

    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];
    }

    chooseCell(char,char2,char3,) {
        this.getNewCordinates()
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {

            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === char || matrix[y][x] === char2 || matrix[y][x] === char3) {
                    found.push(this.directions[i])
                }
            }


        }
        return found;
    }




    eat() {
        let foods = this.chooseCell(1,2,3);
        let food = random(foods);

        if (food) {
            let newX = food[0];
            let newY = food[1];
            // matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 4;
            this.x = newX;
            this.y = newY

            for (let i in grassEaterArr) {
                if (newX === grassEaterArr[i].x && newY === grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }

            for (let i in grassArr) {
                if (newX === grassArr[i].x && newY === grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }


            for (let i in predaterArr) {
                if (newX === predaterArr[i].x && newY === predaterArr[i].y) {
                    predaterArr.splice(i, 1)
                    break;
                }
            }

        } else {
            // this.move()
        }


    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 4;
            let tnt = new TNT(newX, newY)
            tntArr.push(tnt)
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (let i in tntArr) {
            if (tntArr[i].x === this.x && tntArr[i].y === this.y) {
                tntArr.splice(i, 1);
                break;
            }

        }
    }



             }
