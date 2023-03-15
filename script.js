/*

// creating playground area
var SizeofBox = 20;// Size of one Block
var NumberofRows = 20; //total number of rows into the canvas
var NumberofColumns = 50; //total number of coloumns into the canvas
var Canvas;
var Context;

//snake structure
var SnakeShapeX = SizeofBox * 5;
var SnakeShapeY = SizeofBox * 5;

//snake speed
var SnakeSnakeSpeedX = 0;
var SnakeSnakeSpeedY = 0;

//snake body
var SnakeBody= [];

//snake food
var FoodPositionX;
var FoodPositionY;

//current game status
var GameOver = false;

window.onload = function (){
    //settingCanvas height and width
   Canvas = document.getElementById("canvas");
   Canvas.height = NumberofRows * SizeofBox;
   Canvas.width = NumberofColumns * SizeofBox;
    Context =Canvas.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection); //for movements
    //snake speed
    setInterval(update, 1000 / 10);

}

function update(){
    if (GameOver){
        return;
    }

    //background of the game 
    Context.fillStyle = "blue";
    Context.fillRect(0, 0,Canvas.width,Canvas.height);

    //food color and position
    Context.fillStyle = "red";
    Context.fillRect(FoodPositionX, FoodPositionY, SizeofBox, SizeofBox);

    //randomize food
    if(SnakeShapeX == FoodPositionX && SnakeShapeY == FoodPositionY){
        SnakeBody.push([FoodPositionX, FoodPositionY]);
        placeFood();
    }

    //growing body of snake 
    for(let i = SnakeBody.length - 1; i > 0; i--){
        SnakeBody[i] = SnakeBody[i-1];
    }
    if(SnakeBody.length){
        SnakeBody[0] = [SnakeShapeX, SnakeShapeY];
    }

    Context.fillStyle = "white";
    SnakeShapeX +=SnakeSnakeSpeedX * SizeofBox;
    SnakeShapeY += SnakeSnakeSpeedY * SizeofBox;
    Context.fillRect(SnakeShapeX, SnakeShapeY, SizeofBox, SizeofBox);
    for(let i = 0; i < SnakeBody.length; i++){
        Context.fillRect(SnakeBody[i][0], SnakeBody[i][1], SizeofBox, SizeofBox);
    }

    //game over conditions
    if(SnakeShapeX < 0 
        || SnakeShapeX > NumberofColumns * SizeofBox
        || SnakeShapeY < 0
        || SnakeShapeY > NumberofRows * SizeofBox){
            //when snake touch boundry
            GameOver = true;
            alert("Game Over");
    }
    // when snake touches own body
    for(let i = 0; i <  SnakeBody.length; i++){
        if(SnakeShapeX == SnakeBody[i][0] && SnakeShapeY == SnakeBody[i][1]){
            GameOver = true;
            alert("Game Over");
        }
    }
}

//movement of snake
function changeDirection(e){
    if (e.code == "ArrowUp" && SnakeSnakeSpeedY != -1 || e.code == "W" && SnakeSnakeSpeedY != -1){
        //when up arrow key pressed snake will move up
       SnakeSnakeSpeedX = 0;
        SnakeSnakeSpeedY = -1;
    }
    else if (e.code == "ArrowDown" && SnakeSnakeSpeedY != 1 || e.code == "S" && SnakeSnakeSpeedY != 1){
        //when down arrow pressed snake will move down 
       SnakeSnakeSpeedX = 0;
        SnakeSnakeSpeedY = 1;
    }
    else if (e.code == "ArrowLeft" &&SnakeSnakeSpeedX != -1 || e.code == "A" &&SnakeSnakeSpeedX != -1){
        //when left arrow pressed snake will move left 
       SnakeSnakeSpeedX = -1;
        SnakeSnakeSpeedY = 0;
    }
    else if (e.code == "ArrowRight" &&SnakeSnakeSpeedX != 1 || e.code == "D" &&SnakeSnakeSpeedX != 1){
        //when right arrow pressed snake will move right 
       SnakeSnakeSpeedX = 1;
        SnakeSnakeSpeedY = 0;
    }
}

//Randomly place food
function placeFood(){
    //x coordinates
    FoodPositionX = Math.floor(Math.random() * NumberofColumns) * SizeofBox;
    //y coordinates
    FoodPositionY = Math.floor(Math.random() * NumberofRows) * SizeofBox;
}

*/



// Making playground area 
var SizeofBox = 20;
var NumberofRows = 20; //total number of rows 
var NumberofColumns = 50; //total number of coloumns
var Canvas;
var Context;
var Canvas1;
var Context1;

//snake structure
var SnakeShapeX = SizeofBox * 5;
var SnakeShapeY = SizeofBox * 5;

//snake speed
var SnakeSpeedX = 0;
var SnakeSpeedY = 0;

//snake body
var SnakeBody = [];

//snake food
var FoodPositionX;
var FoodPositionY;

//current game status
var GameOver = false;



window.onload = function (){
    //setting Canvas height and width
    Canvas = document.getElementById("canvas");
    Canvas.height = NumberofRows * SizeofBox;
    Canvas.width = NumberofColumns * SizeofBox;
    Context = Canvas.getContext("2d");

    /*Canvas1 = document.getElementById("border");
    Canvas1.height = (NumberofRows-1) * SizeofBox;
    Canvas1.width = (NumberofColumns-1) * SizeofBox;
    Context1 = Canvas1.getContext("2d");
*/

    placeFood();
    document.addEventListener("keyup", changeDirection); //for movements
    //snake speed
    setInterval(update, 1000 / 10);

}



function update(){
    if (GameOver){
        return;
    }

    //background of the game 
    Context.fillStyle = "#2b3636";
    Context.fillRect(0, 0, Canvas.width, Canvas.height);

    /*//border
    Context1.fillStyle = "#16e34d";
    Context1.fillRect(0, 0, Canvas1.width, Canvas1.height);*/

    //food color and position
    Context.fillStyle = "white";
    Context.fillRect(FoodPositionX, FoodPositionY, SizeofBox, SizeofBox);

    //randomize food
    if(SnakeShapeX == FoodPositionX && SnakeShapeY == FoodPositionY){
        SnakeBody.push([FoodPositionX, FoodPositionY]);
        placeFood();
    }

    //growing body of snake 
    for(let i = SnakeBody.length - 1; i > 0; i--){
        SnakeBody[i] = SnakeBody[i-1];
    }
    if(SnakeBody.length){
        SnakeBody[0] = [SnakeShapeX, SnakeShapeY];
    }

    Context.fillStyle = "red";
    SnakeShapeX += SnakeSpeedX * SizeofBox;
    SnakeShapeY += SnakeSpeedY * SizeofBox;
    Context.fillRect(SnakeShapeX, SnakeShapeY, SizeofBox, SizeofBox);
    for(let i = 0; i < SnakeBody.length; i++){
        Context.fillRect(SnakeBody[i][0], SnakeBody[i][1], SizeofBox, SizeofBox);
    }

    //game over conditions
    if(SnakeShapeX < 0 
        || SnakeShapeX > NumberofColumns * SizeofBox
        || SnakeShapeY < 0
        || SnakeShapeY > NumberofRows * SizeofBox){
            //when snake touch boundry
            GameOver = true;
            alert("Game Over");
            
    }
    // when snake touches own body
    for(let i = 0; i <  SnakeBody.length; i++){
        if(SnakeShapeX == SnakeBody[i][0] && SnakeShapeY == SnakeBody[i][1]){
            GameOver = true;
            alert("Game Over");
            
        }
    }
}

//movement of snake
function changeDirection(e){
    if (e.code == "ArrowUp" && SnakeSpeedY != -1 || e.key === "W" && SnakeSpeedY != -1 || e.key === "w" && SnakeSpeedY != -1){
        //when up arrow key pressed snake will move up
        SnakeSpeedX = 0;
        SnakeSpeedY = -1;
    }
    else if (e.code == "ArrowDown" && SnakeSpeedY != 1 || e.key === "S" && SnakeSpeedY != 1 || e.key === "s" && SnakeSpeedY != 1){
        //when down arrow pressed snake will move down 
        SnakeSpeedX = 0;
        SnakeSpeedY = 1;
    }
    else if (e.code == "ArrowLeft" && SnakeSpeedX != -1 || e.key === "A" && SnakeSpeedX != -1 || e.key === "a" && SnakeSpeedX != -1){
        //when left arrow pressed snake will move left 
        SnakeSpeedX = -1;
        SnakeSpeedY = 0;
    }
    else if (e.code == "ArrowRight" && SnakeSpeedX != 1 || e.key === "D" && SnakeSpeedX != 1 || e.key === "d" && SnakeSpeedX != 1){
        //when right arrow pressed snake will move right 
        SnakeSpeedX = 1;
        SnakeSpeedY = 0;
    }
}

//Randomly place food
function placeFood(){
    //x coordinates
    FoodPositionX = Math.floor(Math.random() * NumberofColumns) * SizeofBox;
    //y coordinates
    FoodPositionY = Math.floor(Math.random() * NumberofRows) * SizeofBox;
}

document.addEventListener('keydown', PageReload);
function PageReload(e){
    if(GameOver = true && e.code == "Enter")
    location.reload();
}
