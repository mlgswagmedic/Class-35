class Game{
constructor(){

}
getstate(){
    database.ref('gameState').on('value',function(data){
        gameState=data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){
    if(gameState===0){
        player=new Player();
        player.getcount();
        form=new Form();
        form.display()
    }
}
}