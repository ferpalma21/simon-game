var myGame = new SimonGame();

$(document).ready(function () {
  myGame.startGame();

  $('button').click(function(){
    var colorInput = $(this).attr('id');
    var currentColor = myGame.sequence[myGame.userClickCounter];

    if (currentColor !== colorInput){
      //Game Over
      myGame.gameOver();

    }

    myGame.userClickCounter ++;

    if (myGame.userClickCounter === myGame.sequence.length) {
      alert('Sequence Complete');

      myGame.nextRound();
    }
    });

});
