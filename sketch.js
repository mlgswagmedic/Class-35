var database;
var playerCount,gameState=0,form,player,game

function setup(){
  database = firebase.database();
game=new Game();
game.getstate();
game.start();

}

function draw(){
}
