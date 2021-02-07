let Cells = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]

function setup(){
    createCanvas(400, 400);
}
  
function draw(){
  drawBoard();
}

let drawBoard = () => {
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            drawCell(i, j);
        }
    }
}

// x:i, y:jのCellを描画します。返り値はなし
let drawCell = (i, j) => {
    let info = Cells[j][i];
    fill(0, 255, 0);
    rect(i * 50, j * 50, 50, 50);
}