var movingrect, fixedrect;


function setup() {
  createCanvas(1200,800);
 movingrect = createSprite(600,400,50,80);
 fixedrect = createSprite(400,400,50,80);
  fixedrect.debug = true;
  movingrect.debug = true;
  fixedrect.shapeColor = "blue"
  movingrect.shapeColor = "blue"
  fixedrect.velocityX = 4;
  movingrect.velocityX = -4;

}

function draw() {
  background(0,0,0);  
  if(fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    ){
      fixedrect.velocityX = fixedrect.velocityX *(-1)
      movingrect.velocityX = movingrect.velocityX *(-1)
    }
    if(fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2
      && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
      ){
        fixedrect.velocityY = fixedrect.velocityY *(-1)
        movingrect.velocityY = movingrect.velocityY *(-1)
      }
    
  
  
  
  
  
  
  
  
  
  drawSprites();
}