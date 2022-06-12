var screenHeight = window.innerHeight;
let previewpos = 0;
let fixwhitebox = 0;

window.addEventListener('scroll', function(){
    let actualpos = window.pageYOffset;
    if (document.getElementById("sc").getBoundingClientRect().top > 10 || document.getElementById("finalx").getBoundingClientRect().top <= 10){
        document.getElementById("rectangle").style.opacity="0%"
    } else {
        document.getElementById("rectangle").style.opacity="80%"
    }
    if(document.getElementById("finalx").getBoundingClientRect().top < 1000 && actualpos > 1500){
        document.getElementById("progressbar").style.opacity="0%"
    } else{
        document.getElementById("progressbar").style.opacity="100%"
    }
    if (actualpos > previewpos && document.getElementById("finalx").getBoundingClientRect().top > 100){
        document.getElementById("nav").style.top="-70px";
    } else {
        document.getElementById("nav").style.top="0px";
    }
    previewpos=actualpos
})