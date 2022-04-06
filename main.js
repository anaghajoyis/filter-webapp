
function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(300,300);
    webcam.hide();
}
function draw(){
    image(webcam,0,0,300,300);
    posenet= ml5.poseNet(webcam,modelLoaded);
    posenet.on('pose', gotpose);
}
function modelLoaded(){
    console.log("Model Loaded :)");
}
function gotpose(result){
    console.log(result);
}
function take_snapshot(){
    save('anaghaapp.png')
}