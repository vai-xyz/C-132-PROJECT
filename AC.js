Status="";
tv_ac="";

 function preload(){
    tv_ac=loadImage("Tv and Ac.png");
}

function setup(){
    canvas=createCanvas(450,300);
    canvas.center();
    objectDetector=ml5.objectDetector('cocussd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
    image(tv_ac,0,0,450,300);
}

function modelLoaded(){
console.log("Cocussd is intialized");
Status=true;
objectDetector.detect(tv_ac,gotResult);
}