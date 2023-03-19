// CONSTANT
const ROWS = 20;
const COLS = 12;
const BLOCK_SIZE = 30;
const COLOR_MAPPING = ['blue', 'red', 'orange', 'green', 'yellow', 'purple', 'cyan', 'gainsboro', 'black', 'white']
const GREY_ID = 7;

const KEY_NAMECODE = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    DOWN: 'ArrowDown',
    UP: 'ArrowUp'
}

const BRICK_LAYOUT = [
    [
        [
            [7, 7, 7],
            [7, 0, 7],
            [0, 0, 0]
        ],
        [
            [0, 7, 7],
            [0, 0, 7],
            [0, 7, 7]
        ],
        [
            [0, 0, 0],
            [7, 0, 7],
            [7, 7, 7]
        ],
        [
            [7, 7, 0],
            [7, 0, 0],
            [7, 7, 0]
        ],
    ],

    [
        [
            [1, 7, 7],
            [1, 7, 7],
            [1, 1, 7]
        ],
        [
            [1, 1, 1],
            [1, 7, 7],
            [7, 7, 7]
        ],
        [
            [7, 1, 1],
            [7, 7, 1],
            [7, 7, 1]
        ],
        [
            [7, 7, 7],
            [7, 7, 1],
            [1, 1, 1]
        ]
    ],

    [
        [
            [2, 7, 7],
            [2, 2, 7],
            [7, 2, 7]
        ],
        [
            [7, 2, 2],
            [2, 2, 7],
            [7, 7, 7]
        ],
        [
            [7, 2, 7],
            [7, 2, 2],
            [7, 7, 2]
        ],
        [
            [7, 7, 7],
            [7, 2, 2],
            [2, 2, 7]
        ]
    ],

    [
        [
            [3, 3],
            [3, 3]
        ],
        [
            [3, 3],
            [3, 3]
        ],
        [
            [3, 3],
            [3, 3]
        ],
        [
            [3, 3],
            [3, 3]
        ]
    ],

    [
        [
            [4, 7],
            [4, 4]
        ],
        [
            [4, 4],
            [4, 7]
        ],
        [
            [4, 4],
            [7, 4]
        ],
        [
            [7, 4],
            [4, 4]
        ]
    ],

    [
        [
            [5, 7, 7, 7],
            [5, 7, 7, 7],
            [5, 7, 7, 7],
            [5, 7, 7, 7]
        ],
        [
            [5, 5, 5, 5],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [7, 7, 7, 7]
        ],
        [
            [7, 7, 7, 5],
            [7, 7, 7, 5],
            [7, 7, 7, 5],
            [7, 7, 7, 5]
        ],
        [
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [5, 5, 5, 5]
        ],
    ],

    [
        [
            [6, 6, 6],
            [6, 6, 6],
            [6, 6, 6],
        ],
        [
            [6, 6, 6],
            [6, 6, 6],
            [6, 6, 6],
        ],
        [
            [6, 6, 6],
            [6, 6, 6],
            [6, 6, 6],
        ],
        [
            [6, 6, 6],
            [6, 6, 6],
            [6, 6, 6],
        ]
    ]
]

const GAME_OVER = [
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 7, 7, 7, 8, 8, 8, 7, 7, 7, 8, 8, 7, 7, 7, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 7, 7],
    [7, 7, 7, 8, 9, 9, 9, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 8, 7],
    [7, 7, 8, 9, 9, 8, 8, 8, 8, 8, 7, 8, 9, 9, 9, 9, 9, 8, 8, 9, 9, 9, 8, 9, 9, 9, 8, 9, 9, 8, 8, 8, 8, 8, 7, 7],
    [7, 8, 9, 9, 8, 7, 7, 8, 8, 8, 8, 9, 9, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 8, 9, 9, 8, 8, 8, 7, 7, 7, 7],
    [7, 8, 9, 9, 8, 7, 8, 9, 9, 9, 8, 9, 9, 8, 8, 8, 9, 9, 8, 9, 9, 8, 9, 8, 9, 9, 8, 9, 9, 9, 9, 9, 8, 7, 7, 7],
    [7, 8, 9, 9, 8, 7, 7, 8, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 8, 9, 9, 8, 8, 8, 9, 9, 8, 9, 9, 8, 8, 8, 7, 7, 7, 7],
    [7, 7, 8, 9, 9, 8, 8, 8, 9, 9, 8, 9, 9, 8, 8, 8, 9, 9, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 8, 8, 8, 8, 8, 7, 7],
    [7, 7, 7, 8, 9, 9, 9, 9, 9, 9, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 8, 7],
    [7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 7, 8, 8, 7, 7, 7, 8, 8, 7, 8, 8, 7, 7, 7, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 7, 7],
    [7, 7, 7, 8, 8, 8, 8, 8, 8, 7, 7, 8, 8, 7, 7, 7, 8, 8, 7, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8, 8, 8, 8, 8, 7, 7, 7],
    [7, 7, 8, 9, 9, 9, 9, 9, 9, 8, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 8, 9, 9, 9, 9, 9, 9, 8, 7, 7],
    [7, 8, 9, 9, 8, 8, 8, 8, 9, 9, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 8, 8, 8, 8, 8, 8, 9, 9, 8, 8, 8, 9, 9, 8, 7],
    [7, 8, 9, 9, 8, 7, 7, 8, 9, 9, 8, 9, 9, 8, 7, 8, 9, 9, 8, 9, 9, 8, 8, 8, 7, 7, 8, 9, 9, 8, 7, 8, 9, 9, 8, 7],
    [7, 8, 9, 9, 8, 7, 7, 8, 9, 9, 8, 9, 9, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 9, 8, 7, 8, 9, 9, 8, 8, 9, 9, 9, 8, 7],
    [7, 8, 9, 9, 8, 7, 7, 8, 9, 9, 8, 8, 9, 9, 9, 9, 9, 8, 8, 9, 9, 8, 8, 8, 7, 7, 8, 9, 9, 9, 9, 9, 8, 8, 7, 7],
    [7, 8, 9, 9, 8, 8, 8, 8, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 8, 8, 8, 8, 8, 8, 9, 9, 8, 9, 9, 9, 8, 7, 7],
    [7, 7, 8, 9, 9, 9, 9, 9, 9, 8, 7, 7, 7, 8, 9, 8, 7, 7, 8, 9, 9, 9, 9, 9, 9, 9, 8, 9, 9, 8, 8, 9, 9, 9, 8, 7],
    [7, 7, 7, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 7, 8, 8, 7, 7, 8, 8, 8, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]

]

if (typeof document !== undefined) {
    const canvas = document.getElementById('board');
    const ctx = canvas.getContext('2d');

    ctx.canvas.height = ROWS * BLOCK_SIZE;
    ctx.canvas.width = COLS * BLOCK_SIZE;

    class Board {
        constructor(ctx) {
            this.ctx = ctx;
            this.grid = this.generalWhiteBoard();
            this.score = 0;
            this.flagGameover = false;
            this.clearAudio = new Audio('../sounds/clear.wav');
            this.gameoverAudio = new Audio('../sounds/success.wav');
        }

        generalWhiteBoard() {
            return Array.from({ length: ROWS }, () => Array(COLS).fill(GREY_ID));
        }

        drawCell(x, y, colorID, size, boder) {
            this.ctx.fillStyle = COLOR_MAPPING[colorID] || COLOR_MAPPING[GREY_ID];
            this.ctx.fillRect(x * size, y * size, size, size);
            if (boder) {
                this.ctx.fillStyle = 'black';
                this.ctx.strokeRect(x * size, y * size, size, size);
            }
        }

        drawNewBoard() {
            for (let i = 0; i < COLS; i++) {
                for (let j = 0; j < ROWS; j++) {
                    this.drawCell(i, j, this.grid[j][i], BLOCK_SIZE, true);
                }
            }
        }

        compeleteRows() {

            var newGrid = board.grid.filter((row) => {
                return row.some(col => col === GREY_ID);
            })
            var getScore = ROWS - newGrid.length;;
            var newRows = Array.from({ length: getScore }, () => Array(COLS).fill(GREY_ID));
            board.grid = [...newRows, ...newGrid];
            this.updateScore(getScore * COLS);

        }

        updateScore(newscore) {
            this.score += newscore;
            document.getElementById('score').innerHTML = this.score;
            if(newscore>0)
                this.clearAudio.play();
        }

        gameOver() {
            this.flagGameover = true;
            this.gameoverAudio.play();
            this.grid = this.generalWhiteBoard();
            for (let i = 0; i < GAME_OVER[0].length; i++) {
                for (let j = 0; j < GAME_OVER.length; j++) {
                    this.drawCell(i, j, GAME_OVER[j][i], 10, false);
                }
            }
        }

        reset(){
            this.grid = this.generalWhiteBoard();
            this.score = 0;
            this.flagGameover = false;
            document.getElementById('score').innerHTML = this.score;
            this.drawNewBoard();
        }

    }

    class Brick {
        constructor(id) {
            this.id = id;
            this.layout = BRICK_LAYOUT[id];
            this.activeIndex = 0;
            this.colPos = 5;
            this.rowPos = -2;
        }

        drawBrick() {
            for (let c = 0; c < this.layout[this.activeIndex].length; c++) {
                for (let r = 0; r < this.layout[this.activeIndex][0].length; r++) {
                    if (this.layout[this.activeIndex][r][c] !== GREY_ID) {
                        board.drawCell(c + this.colPos, r + this.rowPos, this.id, BLOCK_SIZE, true);
                    }
                }
            }
        }

        clear() {
            for (let c = 0; c < this.layout[this.activeIndex].length; c++) {
                for (let r = 0; r < this.layout[this.activeIndex][0].length; r++) {
                    board.drawCell(c + this.colPos, r + this.rowPos, GREY_ID, BLOCK_SIZE, true);
                }
            }
        }

        moveLeft() {
            if (!this.checkwall(this.rowPos, this.colPos - 1, this.layout[this.activeIndex])) {
                this.clear();
                this.colPos--;
                this.drawBrick();
            }
        }

        moveRight() {
            if (!this.checkwall(this.rowPos, this.colPos + 1, this.layout[this.activeIndex])) {
                this.clear();
                this.colPos++;
                this.drawBrick();
            }
        }

        moveDown() {
            if (!this.checkwall(this.rowPos + 1, this.colPos, this.layout[this.activeIndex])) {
                this.clear();
                this.rowPos++;
                this.drawBrick();
                return;
            }
            this.handleLand();
            createRandomBrick();
        }

        rotate() {
            if (!this.checkwall(this.rowPos, this.colPos, this.layout[(this.activeIndex + 1) % 4])) {
                this.clear();
                this.activeIndex = (this.activeIndex + 1) % 4;
                this.drawBrick();
            }
        }

        checkwall(nextRow, nextCol, nextLayout) {
            if (nextRow < 0) return false;
            for (let c = 0; c < nextLayout.length; c++) {
                for (let r = 0; r < nextLayout[0].length; r++) {
                    if (nextLayout[r][c] !== GREY_ID) {
                        if ((r + nextRow >= ROWS) || (c + nextCol >= COLS || c + nextCol < 0
                            || board.grid[r + nextRow][c + nextCol]) !== GREY_ID) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        handleLand() {
            if (this.rowPos <= 0) {
                board.gameOver();
            } else {
                for (let c = 0; c < this.layout[this.activeIndex].length; c++) {
                    for (let r = 0; r < this.layout[this.activeIndex][0].length; r++) {
                        if (this.layout[this.activeIndex][r][c] !== GREY_ID) {
                            board.grid[r + this.rowPos][c + this.colPos] = this.id;
                        }
                    }
                }

                board.compeleteRows();
                board.drawNewBoard();
            }
        }

    }

    function createRandomBrick() {
        if (!this.flagGameover)
            brick = new Brick(Math.floor((Math.random() * 10)) % BRICK_LAYOUT.length);
    }

    board = new Board(ctx);
    board.drawNewBoard();
    brick = new Brick(1);

    document.getElementById("btn-play").addEventListener('click', () =>{
        board.reset();
    })

    setInterval(() => {
        if (!board.flagGameover) {
            brick.moveDown();
        } else {
            clearInterval();
        }
    }, 1000);

    document.addEventListener('keydown', (e) => {
        if (!board.flagGameover) {
            switch (e.code) {
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
        }
    })
} else {
    console.log('you are on server not in browser');
}
