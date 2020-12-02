class Player{
    constructor(){
    
    }
    getcount(){
        database.ref('playerCount').on('value',function(data){
            playerCount=data.val()
        })
    }
    updatecount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(name){
        var playerindex='player'+playerCount;
        database.ref(playerindex).set({
            name:name
        })
    }
}