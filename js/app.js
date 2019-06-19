"use strict ";
// initializing all the required variables
let gamescore = 0;
let count = document.querySelector('.gamescore');
count.innerHTML = "total score is :" + gamescore;
// definig enemy
let Enemy = function(x, y, speed) {
 // Variables applied to each of our instances go here,
 // we've provided one for you to get started
 this.x = x;
 this.y = y;
 this.speed = speed;
 // The image/sprite for our enemies, this uses
 // a helper we've provided to easily load images
 this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
 // You should multiply any movement by the dt parameter
 // which will ensure the game runs at the same speed for
 // all computers.
 // initializing speed for Enemy
 this.x = this.x + this.speed * dt;
 if (this.x == 0) {
   this.speed = 100 + Math.floor(Math.random() * 250);
 }
 if (this.x > 500) {
   this.x = 0;
   this.speed = 100 + Math.floor(Math.random() * 250);
 }
 // initial position of player
 //reloading player after touching bug or top
 if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 80 && player.y + 80 > this.y) {
   player.x = 200;
   player.y = 400;
   // sweet alert for ending pop up
   Swal.fire({
     title: 'Game over',
     html: 'total points earned : ' + gamescore,
     confirmButtonText: '<i class="fa fa-thums-up"></i> Restart',
   }).then(() => {
     document.location.reload();
   });
 }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// describing the position of player
class Player {
 constructor(x, y, sprite) {
   this.x = x;
   this.y = y;
   this.sprite = 'images/char-boy.png';
 }
}
Player.prototype.update = function(dt) {
 // gamescore defining
 if (this.y < 40) {
   this.x = 200;
   this.y = 380;
   gamescore += 1;
   count.innerText = "total gamescore is " + gamescore;
   if (gamescore === 1000) {
     openWinModal();
   }
 }
}
// opening images on canvas
Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = [];
let enemyLocations = [60, 143, 226]
enemyLocations.map((positionY) => {
 var enemyItem = new Enemy(0, positionY, 150);
 allEnemies.push(enemyItem);
});
let player = new Player(200, 400);
Player.prototype.handleInput = function(key) {
 // for functioning of arrow keys
 switch (key) {
   case 'left':
     if (this.x >= 0) {
       this.x = this.x - 101;
     }
     break;
   case 'right':
     if (this.x < 350) {
       this.x = this.x + 101;
     }
     break;
   case 'down':
     this.y = this.y + 81;
     if (this.y > 404) {
       this.y = 404;
     }
     break;
   case 'up':
     this.y = this.y - 83;
     if (this.y < 60) {
       setTimeout(() => {
         this.x = 200;
         this.y = 400;
       }, 100)
     }
     break;
     4
   default:
 }
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
 var allowedKeys = {
   37: 'left',
   38: 'up',
   39: 'right',
   40: 'down'
 };
 player.handleInput(allowedKeys[e.keyCode]);
});
