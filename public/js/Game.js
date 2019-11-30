var mainContainer = document.getElementsByTagName('canvas')[0];
var ctx = mainContainer.getContext('2d');
mainContainer.height = window.innerHeight;
mainContainer.width = window.innerWidth;

var player = new Player(40,105,'assets/Missile_01.png',100,200);

document.addEventListener('mousemove',(event) => {
   player.move(event.x,event.y)
});

document.addEventListener('click',function (event) {
    player.fire()

})

function distacne(x1,y1,x2,y2) {
    return Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2));
}

var enemies = []

setInterval(function () {
    var x = Math.random()*mainContainer.width
    var y = 0
    var enemy = new Enemy('assets/Crystal_02.png',x,y,35,50)
    enemies.push(enemy)
    enemy.move(10)
},1500)



setInterval(function () {
    for(var i = 0;i<enemies.length;++i)
    {
        if(enemies[i].y>mainContainer.height+500)
        {
            enemies[i].kill()
            enemies.splice(i,1);
            continue;
        }

        for(var j = 0;j<player.bullets.length;++j)
        {
            if(player.bullets[j].y<-100)
            {
                player.bullets[j].kill()
                player.bullets.splice(j,1);
                continue;
            }
            if(distacne(enemies[i].x,enemies[i].y,player.bullets[j].x,player.bullets[j].y)<40)
            {
            console.log(distacne(enemies[i].x,enemies[i].y,player.bullets[j].x,player.bullets[j].y))
                enemies[i].kill()
                player.bullets[j].kill()
                enemies.splice(i,1);
                player.bullets.splice(j,1);
            }
        }
    }
},50)




