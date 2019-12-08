window.onload = function() {
    this.document.querySelector("audio").play();
}

var rocket_01 = document.getElementById("rocket-01");
var rocket_02 = document.getElementById("rocket-02");
var rocket_03 = document.getElementById("rocket-03");


rocket_01.addEventListener("click", function(){
        sessionStorage.setItem('rocket','1');
        window.location = "levels.html"

    });

rocket_02.addEventListener("click", function(){
        sessionStorage.setItem('rocket','2');
        window.location = "levels.html"

    });

rocket_03.addEventListener("click", function(){
        sessionStorage.setItem('rocket','3');
        window.location = "levels.html"

    });

