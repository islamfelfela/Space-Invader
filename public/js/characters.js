window.onload = function() {
    this.document.querySelector("audio").play();
}

var btn = document.getElementsByTagName("img")

    btn[1].addEventListener("click", function(){
        window.location = "levels.html?character=1"
        
    });

    btn[2].addEventListener("click", function(){
        window.location = "levels.html?character=2"
        
    });
       
    btn[3].addEventListener("click", function(){
        window.location = "levels.html?character=3"
        
    });

