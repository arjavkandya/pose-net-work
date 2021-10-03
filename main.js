nosex=0;
nosey=0;
leftWristx=0;
rightWristx=0;
difference=0;
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(550,100);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet("video",modelLoaded);
    poseNet.on("pose",gotPoses);
    


}

function modelLoaded(){
    console.log("intialize poseNet ");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference=floor(leftWristx-rightWristx);
    }
}
function draw(){
    background("#808080");
    fill("#ADD8E6");
    stroke("#00FF00");
    square(nosex,nosey,difference);
}