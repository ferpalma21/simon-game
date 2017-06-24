function SimonGame (){
  this.color = ['red', 'blue', 'green','yellow'];
  this.sequence = [];
  this.userClickCounter = 0;
  this.round = 1;
}

SimonGame.prototype.startGame = function (){
  this.addColor();
  this.showSequence();
};

//Generate sequence
SimonGame.prototype.addColor = function () {
  var randomColor = Math.floor(Math.random()*4);
  this.sequence.push(this.color[randomColor]);
};

SimonGame.prototype.showSequence = function () {
  var i = 0;
  var ourSequence = this.sequence;
  var interval = setInterval(function(){
    if (!ourSequence[i]){
      clearInterval(interval);
      return;
    }

    $("#" + ourSequence[i]).addClass('active');

    setTimeout(function(){
      $('button').removeClass('active');
    }, 700);

    i ++;
  },1000);
};

SimonGame.prototype.nextRound = function () {
  this.addColor();
  this.showSequence();
  this.userClickCounter = 0;
  this.round += 1;
  $("#counter").html(this.round);
};

SimonGame.prototype.gameOver = function () {
  alert("Game over!!! Try it again!!");
  this.sequence =[];
  this.userClickCounter = 0;
  this.round = 1;
  $('#counter').html("1");

  this.startGame();

};
