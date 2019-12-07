var btn = document.getElementsByTagName("input")

    btn[0].addEventListener("click", function(){
        sessionStorage.setItem('enemyDensity','1500');
        // console.log(sessionStorage)
         window.location = "index.html"
    });

    btn[1].addEventListener("click", function(){
        sessionStorage.setItem('enemyDensity','1250');
         window.location = "index.html"
    });

    btn[2].addEventListener("click", function(){
        sessionStorage.setItem('enemyDensity','1000');
        window.location = "index.html"
    });