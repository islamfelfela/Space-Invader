
"use strict";
var btn = document.getElementsByTagName("input")[0]
        btn.addEventListener("click",(e)=>{
            window.location = "carecters.html"
        })

        var btn = document.getElementsByTagName("input")[1]
        btn.addEventListener("click",(e)=>{
            window.location = "howtoplay.html"
        })

        var btn = document.getElementsByTagName("input")[2]
        btn.addEventListener("click",(e)=>{

            window.location = "aboutus.html"

        })

function main () {
   localStorage.clear
}
main();