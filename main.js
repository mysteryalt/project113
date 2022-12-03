function setup() {
    canvas = createCanvas(500 , 400);
    canvas.position(350 , 250)
    video = createCapture(VIDEO);
video.hide();
}

function draw() {
    image(video , 0 , 0 , 500 , 400);


fill(171, 219, 227);
stroke(15,8,0);
ellipse(25, 25, 80, 80);
circle(25 , 375 , 80)
circle(475 , 375 , 80)
circle(475 , 25 , 80)

    
fill(255, 0, 0); // set fill color to red
  rect(50, 50, 50, 50); // draw rectangle for top petal
  rect(25, 150, 50, 50); // draw rectangle for bottom left petal
  rect(50, 250, 50, 50); // draw rectangle for bottom right petal

  rect(400, 50, 50, 50); // draw rectangle for top petal
  rect(425, 150, 50, 50); // draw rectangle for bottom left petal
  rect(400, 250, 50, 50);
}
    
    
    
    function preload() {

    }

    function take_snapshot() {
        save('custom_picture.png')
     }