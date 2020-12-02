class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html('Car Racing Game');
        title.position(130,0);
         var input=createInput('name');
         input.position(130,150);
         var button=createButton('play');
         button.position(250,200);
         button.mousePressed(function(){
             input.hide();
             button.hide();
             var name=input.value();
             playerCount=playerCount+1;
            player.update(name);
            player.updatecount(playerCount);
            var greeting=createElement('h3');
            greeting.position(130,150)
            greeting.html('Hello '+name) 
         })
    }
}