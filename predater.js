class Predater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 12;
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

    chooseCell(char) {
        this.getNewCordinates()
        let found = [];

        for (let i = 0; i < this.directions.length; i++) {

            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] === char) {
                    found.push(this.directions[i])
                }
            }


        }
        return found;
    }

    move() {
   
        this.energy--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;

        }
        if (this.energy <= 0) {
            this.die()

        }
    }

    eat() {
        let foods = this.chooseCell(2);
        let food = random(foods);

        if (food) {
            this.energy++;
            let newX = food[0];
            let newY = food[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY

            for (let i in grassEaterArr) {
                if (newX === grassEaterArr[i].x && newY === grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }

            }
            if (this.energy >= 12) {
                this.mul()

            }


        } else {
            this.move()
        }


    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 3;
            let predater = new Predater(newX, newY)
            predaterArr.push(predater)
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (let i in predaterArr) {
            if (predaterArr[i].x === this.x && predaterArr[i].y === this.y) {
                predaterArr.splice(i, 1);
                break;
            }

        }
    }



}
