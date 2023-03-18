// CONSTANT
const ROWS =  20;
const COLS = 12;
const BLOCK_SIZE = 30;
const COLOR_MAPPING = ['blue','red', 'orange', 'green', 'yellow', 'purple', 'cyan', 'gainsboro']
const GREY_ID = COLOR_MAPPING.length-1;

const KEY_NAMECODE = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    UP: 'ArrowUp'
}

const BRICK_LAYOUT = [
    [
        [
            [7,7,7],
            [7,0,7],
            [0,0,0]
        ],
        [
            [0,7,7],
            [0,0,7],
            [0,7,7]
        ],
        [
            [0,0,0],
            [7,0,7],
            [7,7,7]
        ],
        [
            [7,7,0],
            [7,0,0],
            [7,7,0]
        ],
    ],

    [
        [
            [1,7,7],
            [1,7,7],
            [1,1,7]
        ],
        [
            [1,1,1],
            [1,7,7],
            [7,7,7]
        ],
        [
            [7,1,1],
            [7,7,1],
            [7,7,1]
        ],
        [
            [7,7,7],
            [7,7,1],
            [1,1,1]
        ]
    ],

    [
        [
            [2,7,7],
            [2,2,7],
            [7,2,7]
        ],
        [
            [7,2,2],
            [2,2,7],
            [7,7,7]
        ],
        [
            [7,2,7],
            [7,2,2],
            [7,7,2]
        ],
        [
            [7,7,7],
            [7,2,2],
            [2,2,7]
        ]
    ],

    [
        [
            [3,3],
            [3,3]
        ],
        [
            [3,3],
            [3,3]
        ],
        [
            [3,3],
            [3,3]
        ],
        [
            [3,3],
            [3,3]
        ]
    ],

    [
        [
            [4,7],
            [4,4]
        ],
        [
            [4,4],
            [4,7]
        ],
        [
            [4,4],
            [7,4]
        ],
        [
            [7,4],
            [4,4]
        ]
    ],

    [
        [
            [5,7,7,7],
            [5,7,7,7],
            [5,7,7,7],
            [5,7,7,7]
        ],
        [
            [5,5,5,5],
            [7,7,7,7],
            [7,7,7,7],
            [7,7,7,7]
        ],
        [
            [7,7,7,5],
            [7,7,7,5],
            [7,7,7,5],
            [7,7,7,5]
        ],
        [
            [7,7,7,7],
            [7,7,7,7],
            [7,7,7,7],
            [5,5,5,5]
        ],
    ],

    [
        [
            [6,6,6],
            [6,6,6],
            [6,6,6],
        ],
        [
            [6,6,6],
            [6,6,6],
            [6,6,6],
        ],
        [
            [6,6,6],
            [6,6,6],
            [6,6,6],
        ],
        [
            [6,6,6],
            [6,6,6],
            [6,6,6],
        ]
    ]
]

console.log(BRICK_LAYOUT[0][0][0][0]);
console.log(BRICK_LAYOUT.lenght);

if(typeof document !== undefined){
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

ctx.canvas.height = ROWS * BLOCK_SIZE;
ctx.canvas.width = COLS * BLOCK_SIZE;

class Board {
    constructor(ctx){
        this.ctx =ctx;
        this.grid = this.generalWhiteBoard();
        this.score = 0;
    }

    generalWhiteBoard() {
        return Array.from({length: ROWS}, () => Array(COLS).fill(GREY_ID));
    }

    drawCell(x,y, colorID){
        this.ctx.fillStyle = COLOR_MAPPING[colorID] || COLOR_MAPPING[GREY_ID];
        this.ctx.fillRect(x*BLOCK_SIZE,y*BLOCK_SIZE,BLOCK_SIZE, BLOCK_SIZE);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(x*BLOCK_SIZE,y*BLOCK_SIZE,BLOCK_SIZE, BLOCK_SIZE);
    }

    drawNewBoard(){
        for(let i = 0; i< COLS; i++){
            for(let j=0; j< ROWS; j++){
                this.drawCell(i,j,this.grid[j][i]);
            }
        }
    }

    compeleteRows() {

        var newGrid = board.grid.filter((row)=> {
            return row.some(col => col === GREY_ID);
        })
        var getScore = ROWS - newGrid.length;;
        var newRows = Array.from({length: getScore}, () => Array(COLS).fill(GREY_ID));
        board.grid = [...newRows,...newGrid];
        this.updateScore(getScore*COLS);

    }

    updateScore(newscore){
        this.score += newscore;
        document.getElementById('score').innerHTML = this.score;
    }
}

class Brick {
    constructor(id){
        this.id = id;
        this.layout = BRICK_LAYOUT[id];
        this.activeIndex = 0;
        this.colPos = 5;
        this.rowPos = -2;
    }

    drawBrick(){
        for (let c = 0; c < this.layout[this.activeIndex].length; c ++){
            for (let r = 0; r< this.layout[this.activeIndex][0].length; r++){
                if(this.layout[this.activeIndex][r][c] !== GREY_ID){
                    board.drawCell( c + this.colPos, r+this.rowPos,this.id);
                }
            }
        }
    }

    clear(){
        for (let c = 0; c < this.layout[this.activeIndex].length; c ++){
            for (let r = 0; r< this.layout[this.activeIndex][0].length; r++){
                    board.drawCell( c + this.colPos, r+this.rowPos,GREY_ID);
            }
        }
    }

    moveLeft(){
        if(!this.checkwall(this.rowPos, this.colPos-1, this.layout[this.activeIndex])){
            this.clear();
            this.colPos--;
            this.drawBrick();
        }
    }

    moveRight(){
        if(!this.checkwall(this.rowPos, this.colPos+1, this.layout[this.activeIndex])){
            this.clear();
            this.colPos++;
            this.drawBrick();
        }
    }

    moveDown(){
        if(!this.checkwall(this.rowPos+1, this.colPos, this.layout[this.activeIndex])){
            this.clear();
            this.rowPos++;
            this.drawBrick();
            return;
        }
        this.handleLand();
        createRandomBrick();
    }

    rotate(){
        if(!this.checkwall(this.rowPos, this.colPos, this.layout[(this.activeIndex +1) % 4])){
            this.clear();
            this.activeIndex = (this.activeIndex +1) % 4;
            this.drawBrick();
        }
    }
    
    checkwall(nextRow, nextCol, nextLayout) {
        if (nextRow<0) return false;
        for (let c = 0; c < nextLayout.length; c ++){
            for (let r = 0; r< nextLayout[0].length; r++){
                if(nextLayout[r][c] !== GREY_ID){
                    if((r + nextRow >= ROWS) || (c + nextCol >= COLS || c + nextCol <0
                        || board.grid[r + nextRow][c + nextCol]) !== GREY_ID){
                        return true;
                    }
                }
            }
        }

        return false;
    }

    handleLand() {
        if(this.rowPos <=0){
            alert('GAME OVER');
            return;
        }
        for (let c = 0; c < this.layout[this.activeIndex].length; c ++){
            for (let r = 0; r< this.layout[this.activeIndex][0].length; r++){
                if(this.layout[this.activeIndex][r][c] !== GREY_ID){
                    board.grid[r+this.rowPos][c + this.colPos] =  this.id;
                }
            }
        }

        board.compeleteRows();
        board.drawNewBoard();
    }

}

function createRandomBrick(){
    brick = new Brick(Math.floor((Math.random() * 10)) % BRICK_LAYOUT.length);
}

board = new Board(ctx);
board.drawNewBoard();
brick = new Brick(1);

setInterval(()=>{
    brick.moveDown();
}, 1000);

document.addEventListener('keydown', (e) => {
    console.log(e);
    switch(e.code){
        case KEY_NAMECODE.LEFT:
            brick.moveLeft();
            break;
        case KEY_NAMECODE.RIGHT:
            brick.moveRight();
            break;
        case KEY_NAMECODE.DOWN:
            brick.moveDown();
            break;
        case KEY_NAMECODE.UP:
            brick.rotate();
            break;
    }
})
console.log(board.grid);
}else {
    console.log('you are on server not in browser');
}
