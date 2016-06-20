

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

var enemy = new Enemy(0,75);

var allEnemies = [
new Enemy(0,75),
new Enemy(-200,150),
new Enemy(-300,225)
];
var player = new Player();


var enemySize = {width: 40, height: 20};
var playerSize = {width: 20, height: 30};

function checkCollisions() {

    if (enemy.x < player.x + playerSize.width &&
     enemy.x + enemySize.width > player.x &&
     enemy.y < player.y + playerSize.height &&
     enemySize.height + enemy.y > player.y) {
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
    console.log("enemy x coordinate:", enemy.x);
    console.log("player x coordinate:", player.x);

    allEnemies;

    allEnemies[0];

    table(allEnemies);

    player;
    });


