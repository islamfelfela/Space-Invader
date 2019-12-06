var Enemy = function (enemy,x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = enemy;
    this.intervalID
    this.image.onload=() => {
        ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
    }

}
var level_speed
var level = localStorage.getItem("level")
if(level=="1")
   level_speed=100
else if (level=="2")
   level_speed=50

else if (level=="3")
   level_speed=10
Enemy.prototype.clear = function()  {
    ctx.clearRect(this.x, this.y, this.width, this.height);
}

Enemy.prototype.draw = function() {
    ctx.drawImage(this.image,this.x,this.y,this.width, this.height)
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
    },level_speed)
}