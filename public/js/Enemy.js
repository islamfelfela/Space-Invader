var Enemy = function (enemy,x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = enemy;
    this.intervalID
    this.image.onload=() => {
        game.ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
    }

}


Enemy.prototype.clear = function()  {
    game.ctx.clearRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.draw = function() {
    game.ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
}

Enemy.prototype.kill = function(){
    this.clear()
    clearInterval(this.intervalID)
}

Enemy.prototype.move = function (speed) {
        this.intervalID= setInterval(()=>{
        this.clear()
        this.y+=speed;
        this.draw();
    },100)
}