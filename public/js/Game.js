var mainContainer = document.getElementsByTagName('canvas')[0];
var ctx = mainContainer.getContext('2d');
mainContainer.height = window.innerHeight;
mainContainer.width = window.innerWidth;
ctx.font = '16px serif';

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

function displayScore(score) {
    console.log(score)
    ctx.fillStyle = "white";
    ctx.clearRect(mainContainer.width-100,mainContainer.height-30,500,500)
    ctx.fillText("score : "+score,mainContainer.width-100,mainContainer.height-20)
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
        if(enemies[i].y > mainContainer.height+500)
        {
            enemies[i].kill()
            enemies.splice(i,1);
            continue;
        }

        if(distacne(player.x,player.y,enemies[i].x,enemies[i].y)<40)
        {

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
            //console.log(distacne(enemies[i].x,enemies[i].y,player.bullets[j].x,player.bullets[j].y))
                enemies[i].kill()
                player.bullets[j].kill()
                enemies.splice(i,1);
                player.bullets.splice(j,1);
                player.score+=10;
                displayScore(player.score);
            }
        }
    }
},50)




