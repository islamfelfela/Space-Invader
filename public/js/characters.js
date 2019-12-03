var btn = document.getElementsByTagName("input")

    btn[0].addEventListener("click", function(){
        window.location = "index.html?character=1"
    });

    btn[1].addEventListener("click", function(){
        window.location = "index.html?character=2"
    });
       
    btn[2].addEventListener("click", function(){
        window.location = "index.html?character=3"
    });