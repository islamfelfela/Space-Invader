var Player = function (width, height, img, x, y) {
    console.log("Player")
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = img
    this.score = 0;
    this.lives = 3;
    this.bullets = []
}

Player.prototype.draw=function () {
     ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);


}

Player.prototype.move = function (x,y)
{
    this.clear();
    this.x = x;
    this.y = y;
    this.draw();
}

Player.prototype.clear = function()  {
    ctx.clearRect(this.x,this.y, this.width, this.height);
}

Player.prototype.fire = function () {
    var bullet = new Bullet('assets/Bomb_01_1.png',this.x+(this.width/2),this.y-15,5,15)
    this.bullets.push(bullet)
    bullet.move(30)


}