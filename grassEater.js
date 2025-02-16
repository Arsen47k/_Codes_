class GrassEater{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = []

    }

    getNewCordinates(){
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

    move(){
        this.energy--;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if(newCell){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;

        }
        if(this.energy <= 0){
            this.die()

        }
    }

    eat(){
        let foods = this.chooseCell(1);
        let food = random(foods);

        if(food){
            this.energy++;
            let newX = food[0];
            let newY = food[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY
            
            for(let i in grassArr){
                if(newX === grassArr[i].x && newY === grassArr[i].y ){
                          grassArr.splice(i,1)
                          break;
                }
               }
               if(this.energy >=10){
                   this.mul()
               }

     
        }else{
            this.move()
        }


    }

    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[newY][newX] = 2;
            let grassEater = new GrassEater(newX, newY)
            grassEaterArr.push(grassEater)
        }
    }


    die(){
        matrix[this.y][this.x] = 0;
        for(let i in grassEaterArr){
            if(grassEaterArr[i].x === this.x && grassEaterArr[i].y === this.y){
                   grassEaterArr.splice(i,1);
                   break;
            }

        }
    }



             }
