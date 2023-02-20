//playground canvas 
var blockSize = 20;
var total_row = 25; //total number of rows 
var total_col = 30; //total number of coloumns
var board;
var context;

//snake structure
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

//snake speed
var speedX = 0;
var speedY = 0;

//snake body
var snakeBody = [];

//snake food
var foodX;
var foodY;

//current game status
var gameover = false;

window.onload = function (){
    //setting board height and width
    board = document.getElementById("board");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection); //for movements
    //snake speed
    setInterval(update, 1000 / 10);

}

function update(){
    if (gameover){
        return;
    }

    //background of the game 
    context.fillStyle = "blue";
    context.fillRect(0, 0, board.width, board.height);

    //food color and position
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    //randomize food
    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    //growing body of snake 
    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "white";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for(let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    if(snakeX < 0 
        || snakeX > total_col * blockSize
        || snakeY < 0
        || snakeY > total_row * blockSize){
            //when snake touch boundry
            gameover = true;
            alert("Game Over");
    }
    // when snake touches own body
    for(let i = 0; i <  snakeBody.length; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameover = true;
            alert("Game Over");
        }
    }
}

//movement of snake
function changeDirection(e){
    if (e.code == "ArrowUp" && speedY != 1){
        //when up arrow key pressed snake will move up
        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != 1){
        //when down arrow pressed snake will move down 
        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != -1){
        //when left arrow pressed snake will move left 
        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != 1){
        //when right arrow pressed snake will move right 
        speedX = 1;
        speedY = 0;
    }
}

//Randomly place food
function placeFood(){
    //x coordinates
    foodX = Math.floor(Math.random() * total_col) * blockSize;
    //y coordinates
    foodY = Math.floor(Math.random() * total_row) * blockSize;
}
