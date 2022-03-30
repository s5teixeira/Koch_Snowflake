//Koch Snowflake//
let x1 = 1;
let y1 = 3;
let x2 = 2;
let y2 = 4;

function setup() {
  createCanvas(400, 600);
  angleMode(DEGREES);
  strokeWeight(2);
//coordinates a,b,c
  let a = createVector(x1,y1);
  let b = createVector(x2, y2);
  let c = createVector(x2-x1,y2-y1);

  koch(0,height/2,width,height/2,5);
  koch(width,height/2,width/2,height,5);
  koch(width/2,height,0,height/2,5);
}
function draw() {   
}

function koch(x1,y1,x2,y2,n){
  if(n == 1){
     line(x1,y1,x2,y2); }
  else{
     let temp = createVector(x2-x1,y2-y1);
     temp.div(3);
     let s = createVector(x1,y1);
     let a = p5.Vector.add(temp,s);
     temp.rotate(-60);
     let b = p5.Vector.add(temp,a);
     temp.rotate(120);
     let c = p5.Vector.add(temp,b);
     koch(x1,y1,a.x,a.y,n-1);
     koch(a.x,a.y,b.x,b.y,n-1);
     koch(b.x,b.y,c.x,c.y,n-1);
     koch(c.x,c.y,x2,y2,n-1);
  }
}
