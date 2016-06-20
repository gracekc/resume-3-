

var Enemy = function(x,y,speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

Enemy.prototype.update = function(dt) {
  if (this.x > 400) {
    this.speed = -1;
} 
   if (this.x < 1) {
    this.speed = 1;
   }
this.x = this.x + this.speed;
};

Enemy.prototype.render = function() {
    
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var Player = function() {
    this.sprite = 'images/char-princess-girl.png';
    this.x = 0;
    this.y = 0;
};

Player.prototype.update = function() {
};
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var reset = function() {
    this.x = 0;
    this.y = 0;
};

Player.prototype.handleInput = function(keyCode) {
    if (keyCode === 'down') {
        this.y = this.y + 25;
    }
    if (keyCode === 'up') {
        this.y = this.y - 25;
    }
    if (keyCode === 'left') {
        this.x = this.x - 25;
    }
    if (keyCode === 'right') {
        this.x = this.x + 25;
    }
    if(this.x <= 0) {
        this.x = 0;
    }
    if (this.x >= 400) {
        this.x = 400;
    }
    if (this.y <= 0) {
        this.y = 0;
    }
    if (this.y >= 440) {
        this.y = 0;
        this.x = 0;
    }
};


var allEnemies = [
new Enemy(0,75),
new Enemy(-200,150),
new Enemy(-300,225)
];
var player = new Player();


var enemySize = {width: 40, height: 20};
var playerSize = {width: 20, height: 30};

function checkCollisions() {

    if (allEnemies[0].x < player.x + playerSize.width &&
     allEnemies[0].x + enemySize.width > player.x &&
     allEnemies[0].y < player.y + playerSize.height &&
     enemySize.height + allEnemies[0].y > player.y) {
        this.y = 0;
        this.x = 0;
    }
      if (allEnemies[1].x < player.x + playerSize.width &&
     allEnemies[1].x + enemySize.width > player.x &&
     allEnemies[1].y < player.y + playerSize.height &&
     enemySize.height + allEnemies[1].y > player.y) {
        this.y = 0;
        this.x = 0;
    }
      if (allEnemies[2].x < player.x + playerSize.width &&
     allEnemies[2].x + enemySize.width > player.x &&
     allEnemies[2].y < player.y + playerSize.height &&
     enemySize.height + allEnemies[2].y > player.y) {
        this.y = 0;
        this.x = 0;
    }

}

checkCollisions();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

    console.log("allEnemies: ", allEnemies);

    console.log("allEnemies first item: ", allEnemies[0]);

    allEnemies.forEach(function(enemy) {
        console.log("enemy: ", enemy);
    });
    console.log("Enemy: ", Enemy );
    console.log("enemy x coordinate:", allEnemies[0].x);
    console.log("enemy x coordinate:", allEnemies[1].x);
    console.log("enemy x coordinate:", allEnemies[2].x);
    console.log("player x coordinate:", player.x);
    console.log("enemy width", enemySize.width);
    console.log("enemy height", enemySize.height);
    console.log("player width", playerSize.width);
    console.log("player height", playerSize.height);



    allEnemies;

    allEnemies[0];

    table(allEnemies);

    player;
    });


