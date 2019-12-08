var btn = document.getElementsByTagName("input")

    btn[0].addEventListener("click", function(){
        sessionStorage.setItem('enemyDensity','1400');
         window.location = "game.html"
    });

    btn[1].addEventListener("click", function(){
        sessionStorage.setItem('enemyDensity','1200');
         window.location = "game.html"
    });

    btn[2].addEventListener("click", function(){
        sessionStorage.setItem('enemyDensity','1000');
        window.location = "game.html"
    });