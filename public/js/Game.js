// var canvas = document.getElementsByTagName('canvas')[0];
var rocket = sessionStorage.getItem('rocket');
var enemyDensity = sessionStorage.getItem('enemyDensity');
var rockets = ['assets/rocket_01.png', 'assets/rocket_02.png', 'assets/rocket_03.png']

var Game = function (rocket, enemyDensity,canvas) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.enemyDensity = enemyDensity;
    this.rocket = rocket
    this.player = new Player(40, 105, this.rocket, 100, 200);
    this.canvas = canvas;
    this.init();
    this.gameOverFlage = false;
    this.enemies = []

}



Game.prototype.generateEnemies = function ()
{
    this.intervalEnemiesID = setInterval( ()=> {
        var x = Math.random() * this.width
        var y = 0
        var enemy = new Enemy('assets/enemy.png', x, y, 35, 50)
        this.enemies.push(enemy)
        enemy.move(10)
    }, this.enemyDensity)
}

Game.prototype.displayScore =  function(score)  {
    //console.log(score)
    console.log(this.ctx)
    this.ctx.fillStyle = "white";
    this.ctx.font = '16px serif';
    this.ctx.clearRect(this.width - 900, this.height - 60, 1000, 500)
    this.ctx.fillText("Score : " + score, this.width - 100, this.height - 30)
}

Game.prototype.displayLives =  function(lives) {

    this.ctx.fillStyle = "white";
    this.ctx.font = '20px serif';
    this.ctx.clearRect(0, this.height - 60, 300, 500)
    var image = new Image();
    image.src = 'assets/HP_Bonus.png';
    image.onload =  ()=> {
        this.ctx.drawImage(image, 80, this.height - 50, 30, 30);
    }
    this.ctx.fillText(lives + "X", 50, this.height - 30)
}

Game.prototype.drawUI = function () {
    this.displayScore(this.player.score);
    this.displayLives(this.player.lives);
}

Game.prototype.gameOver = function() {

    this.gameOverFlage = true
    clearInterval(this.intervalEnemiesID)
    this.player.clear()
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = "white";
    this.ctx.font = '60px serif';
    this.ctx.fillText("Game Over", this.width * 0.35, this.height * 0.5)
}

Game.prototype.runner = function ()
{
    setInterval( () =>{
        for (var i = 0; i < this.enemies.length; ++i) {
            if (this.enemies[i].y > this.height - 120) {
                this.enemies[i].kill()
                this.enemies.splice(i, 1);
                continue;
            }

            if (distacne(this.player.x, this.player.y, this.enemies[i].x, this.enemies[i].y) < 40 && !this.gameOverFlage) {
                this.player.lives--;
                if (this.player.lives === 0) {
                    this.gameOver();
                    continue
                }
                this.displayLives(this.player.lives);
                this.enemies[i].kill()
                this.enemies.splice(i, 1);
                this.player.clear()
                this.player.draw()
                continue;
            }

            for (var j = 0; j < this.player.bullets.length; ++j) {
                if (this.gameOverFlage) {
                    this.player.bullets[j].kill()
                    this.player.bullets.splice(j, 1);
                    continue
                }
                if (this.player.bullets[j].y < -100) {
                    this.player.bullets[j].kill()
                    this.player.bullets.splice(j, 1);
                    continue;
                }
                if (distacne(this.enemies[i].x, this.enemies[i].y, this.player.bullets[j].x, this.player.bullets[j].y) < 40) {
                    this.enemies[i].kill()
                    this.player.bullets[j].kill()
                    this.enemies.splice(i, 1);
                    this.player.bullets.splice(j, 1);
                    this.player.score += 10;
                    this.displayScore(this.player.score);
                }
            }

            if (this.gameOverFlage) {
                this.enemies[i].kill()
                this.enemies.splice(i, 1);
            }
        }
    }, 50)
}


function distacne(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
}

Game.prototype.init = function (){
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext('2d')
    console.log(this.ctx)
    this.drawUI();
    this.runner();
    this.generateEnemies();
}
var canves = document.getElementsByTagName('canvas')[0];
var game = new Game(rockets[rocket],enemyDensity,canves)

document.addEventListener('mousemove', (event) => {
    if (!game.gameOverFlage) {
        game.player.move(event.x, event.y)
    }
});

document.addEventListener('click', function (event) {
    if (!game.gameOverFlage) {
        game.player.fire()
    }

})





