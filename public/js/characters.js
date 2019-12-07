window.onload = function() {
    this.document.querySelector("audio").play();
}


var btn1 = document.getElementById("ch1");
var btn2 = document.getElementById("ch2");
var btn3 = document.getElementById("ch3");

    btn1.addEventListener("click", function(){
        // console.log("a");
        window.location = "levels.html?character=1";
    });

    btn2.addEventListener("click", function(){
        // console.log("b");
        window.location = "levels.html?character=2";
    });
       
    btn3.addEventListener("click", function(){
        // console.log("c");
        window.location = "levels.html?character=3";
    });