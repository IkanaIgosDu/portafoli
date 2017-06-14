/* @pjs preload="bubdot98-b.jpg"; */

int pantalla=0;
int tam = 40;
int y1=500;
int y2=500;
float x = 500;
float y = 500;
float speedX = random(3, 5);
float speedY = random(3, 5);
int diam;
int rectSize = 150;
boolean up;
boolean down;
boolean gameStart = false;
int scorep1=0;
int scorep2=0;
PImage bg;




void setup(){
size(1000,1000);
background(0,0,0);
stroke(255,0,0);
smooth();
ellipseMode(CENTER);
bg = loadImage("bubdot98-b.jpg");

}

void draw(){
  if (pantalla==0){
background(0,0,0);
textSize(60);
textAlign(CENTER);
text("Pong", 500, 100);
textSize(40);
textAlign(CENTER);
text("Press M to start", 500, 500);
  }
  else if (pantalla==1){
background(bg);
                                      //Escenari
  /*Linia del mig*/
line(500,1,500,999);
line(501,1,501,999);
line(499,1,499,999);

//Contorn
/*Esquerra*/
line(1,1,1,999);
line(2,1,2,999);
/*Dreta*/
line(999,1,999,999);
line(998,1,998,999);
/*Inferior*/
line(1,999,999,999);
line(1,998,999,998);
/*Superior*/
line(1,1,999,1);
line(1,2,999,2);
/*Rebotadors*/
stroke(255,0,0);
fill(0,0,0);
rect(920,y1,20,100);
rect(80,y2,20,100);
/*Contadors*/
textSize(40);
fill(255,0,0);
text(scorep1, 250, 100);
text(scorep2, 750, 100);

/*Bola*/
diam = 20;
fill(0,0,0);
  ellipse(x, y, diam, diam);
 
   if (gameStart==true) {

    x = x + speedX;
    y = y + speedY;

    // if ball hits movable bar, invert X direction and apply effects
    if ( x > 920-10 && x < 920+10 && y > y1-100 && y < y1+100 ) {
      speedX = speedX * -1;
      x = x + speedX;
    } 

    // if ball hits wall, change direction of X
    else if (y > y2-100 && y < y2+100 && x > 100-10 && x < 100+10) {
      speedX = speedX * -1.1;
      x = x + speedX;
    }

    // resets things if you lose
    if (x > width) { 
      gameStart = false;
      x = 500;
      y = 500; 
      speedX = random(3, 5);
      speedY = random(3, 5);
      scorep1=scorep1+1;
    }
    
    else if (x < 0) { 
      gameStart = false;
      x = 500;
      y = 500; 
      speedX = random(3, 5);
      speedY = random(3, 5);
      scorep2=scorep2+1;
    }

if (scorep1 == 10) { 
      pantalla=3;
    }
    
if (scorep2 == 10) { 
      pantalla=4;
    }

    // if ball hits up or down, change direction of Y   
    if ( y > height || y < 0 ) {
      speedY = speedY * -1;
      y = y + speedY;
    }
  }
}

else if (pantalla == 3){
      background(0,0,0);
      fill(255,255,255);
      textSize(60);
      textAlign(CENTER);
      text("Player 1 wins !!", 500, 100);
      textSize(40);
      textAlign(CENTER);
      text("Press M to restart", 500, 500);
      scorep1=0;
      scorep2=0;
    }

    else if (pantalla == 4){
      background(0,0,0);
      fill(255,255,255);
      textSize(60);
      textAlign(CENTER);
      text("Player 2 wins !!", 500, 100);
      textSize(40);
      textAlign(CENTER);
      text("Press M to restart", 500, 500); 
      scorep1=0;
      scorep2=0;
    }

}
void mousePressed() {
  gameStart = !gameStart;
}
/*Moviment rebotadors*/
void keyPressed(){
  switch (key){
  case 'i':
  case 'I':
    y1=y1-20;
    if(y1<2){
      y1=2;
    }
    break;
  case 'k':
  case 'K':
     y1=y1+20;
    if(y1>998){
      y1=998;
    }
    break;
  case 'w':
  case 'W':
    y2=y2-20;
    if(y2<2){
      y2=2;
    }
    break;
  case 'm':
  case 'M':
    pantalla=1;
    break;
  case 's':
  case 'S':
     y2=y2+20;
    if(y2>998){
      y2=998;
    }
    break;  
}
}