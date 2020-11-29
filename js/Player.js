
  
class Player {
  constructor(){}

  getCount(){
    var PlayercountRef = database.ref('Playercount');
    PlayercountRef.on("value",function(data){
      Playercount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }

  update(name){
    var playerIndex = "player" + Playercount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}
