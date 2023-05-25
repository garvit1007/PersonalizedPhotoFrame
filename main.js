function preload(){

}

function setup(){
    canvas = createCanvas(1000,750);
    canvas.position(190,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill("red");
    circle(98,110,120);
    fill("orange");
    rect(158,85,675,30);
    fill("red");
    circle(875,110,120);
    fill("orange");
    rect(860,168,30,550);
    fill("red");
    circle(875,675,120);
    fill("orange");
    rect(141,660,675,30);
    fill("red");
    circle(100,675,120);
    fill("orange");
    rect(85,165,30,450);
    image(video,154,154,670,490);
}

function take_snapshot(){
    save("pic_1.png");
}

