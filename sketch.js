var hr, sec, mins;
var hrAngle, secAngle, minsAngle

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background("black");
    translate(200, 200)
    rotate(-90)
    hr = hour();
    mins = minute();
    sec = second();
    hrAngle = map(hr%12,0, 12, 0, 360)
    minsAngle = map(mins, 0, 60, 0, 360)
    secAngle = map(sec, 0, 60, 0, 360)
    push ();
    rotate(secAngle)
    stroke("cyan")
    strokeWeight(7)
    line(0,0,100, 0)
    pop(); 
    push ();
    rotate(minsAngle)
    stroke("lime")
    strokeWeight(7)
    line(0,0,75, 0)
    pop();    
    push ();
    rotate(hrAngle)
    stroke("yellow")
    strokeWeight(7)
    line(0,0,50, 0)
    pop();       
    stroke("black")
    point(0,0)
    strokeWeight(10)
    noFill();
    stroke("cyan")
    arc(0,0, 300, 300, 0, secAngle)
    stroke("lime")
    arc(0,0, 280, 280, 0, minsAngle)
    stroke("yellow")
    arc(0,0, 260, 260, 0, hrAngle)
}