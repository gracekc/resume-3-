
echo "# Resume" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/gracekc/Resume.git
git push -u origin master



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

reset = function() {
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


var Enemy = {width: 40, height: 20};
var Player = {width: 20, height: 30};

if (Enemy.x < Player.x + Player.width &&
   Enemy.x + Enemy.width > Player.x &&
   Enemy.y < Player.y + Player.height &&
   Enemy.height + Enemy.y > Player.y) {
        this.y = 0;
        this.x = 0;
}


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
