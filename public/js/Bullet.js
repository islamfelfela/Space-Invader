var Bullet = function (bullet,x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.intervalID
    this.image.src = bullet;
    this.image.onload=() => {
        ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
    }

}

Bullet.prototype.clear = function()  {
    ctx.clearRect(this.x, this.y, this.width, this.height);
}

Bullet.prototype.draw = function() {
    ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
}

Bullet.prototype.kill = function(){
    this.clear()
    clearInterval(this.intervalID)
}

Bullet.prototype.move = function (speed) {
    this.intervalID = setInterval(()=>{
        this.clear()
        this.y-=speed;
        this.draw();
    },100)
}
