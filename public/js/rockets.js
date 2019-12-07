window.onload = function() {
    this.document.querySelector("audio").play();
}

var rocket_01 = document.getElementById("rocket-01");
var rocket_02 = document.getElementById("rocket-02");
var rocket_03 = document.getElementById("rocket-03");


rocket_01.addEventListener("click", function(){
        window.location = "levels.html?rocket=1"
        
    });

rocket_02.addEventListener("click", function(){
        window.location = "levels.html?rocket=2"
        
    });

rocket_03.addEventListener("click", function(){
        window.location = "levels.html?rocket=3"
        
    });

