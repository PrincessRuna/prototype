var rocket
var mars
var star
var meteor
var rocketImg
var marsImg
var starImg
var meteorImg
var bgspace
var bgspaceImg
var starGrp
var meteorGrp


function preload(){
rocketImg = loadImage('rocket.png')
marsImg = loadImage('mars.png')
starImg = loadImage('star.png')
meteorImg = loadImage('meteor.png')
bgspaceImg = loadImage('bgspace.jpg')
jumpSound = loadSound("RocketWoosh.wav")
dieSound = loadSound("GameOver.wav")
}

function setup() {
 createCanvas(500 , 600)
 bgspace = createSprite(250,300)
 bgspace.addImage("space" , bgspaceImg)
 bgspace.velocityY = 2   

rocket = createSprite(300 , 300 , 40, 20)
rocket.scale = 0.2
rocket.addImage("rocket" , rocketImg)

mars = createSprite(300 , 850 , 40 , 20)
mars.addImage('mars' , marsImg)
mars.scale - 0.1

//starGrp = createGroup()
meteorGrp = createGroup()

rocket.setCollider("circle",0,0,90);
rocket.debug = false;
}


function draw() {
background(22)
    if(bgspace.y >400   ){
        bgspace.y = 300
      }
        
      if(keyDown('space')){
        rocket.velocityY = -7
        jumpSound.play()
      }
    
      if(keyDown('right_arrow')){
        rocket.x += 2
        jumpSound.play()

      }
    
      if(keyDown('left_arrow')){
        rocket.x -= 2
        jumpSound.play()

      }   

      if(rocket.isTouching(meteorGrp)||rocket.isTouching(mars)){
       // starGrp.destroyEach()
        meteorGrp.destroyEach()
        rocket.y = 300
        bgspace.destroy()
        textSize(50)
        fill("maroon")
        text("X GAMEOVER X" , 45 , 100)
        fill("orange")
        text("X GAMEOVER X" , 45 , 150)
        fill("white")
        text("X GAMEOVER X" , 45 , 200)
        fill("pink")
        text("X GAMEOVER X" , 45 , 250)
        fill("Red")
        text("X GAMEOVER X" , 45 , 300)
        fill("purple")
        text("X GAMEOVER X" , 45 , 350)
        fill("blue")
        text("X GAMEOVER X" , 45 , 400)
        fill("green")
        text("X GAMEOVER X" , 45 , 450)
        fill("yellow")
        text("X GAMEOVER X" , 45 , 500)
        dieSound.play()
       // starGrp.velocityEachY(0)
        meteorGrp.velocityEachY(0)    
        rocket.velocityY=0

      }

      rocket.velocityY = rocket.velocityY+0.5
    spawnObjects();
    drawSprites();
}

function spawnObjects(){
    if(frameCount % 60 === 0){
        //star = createSprite(Math.round(random(200 , 600)) , -1 , 10 , 20)
        //star.velocityY = 2
       // star.scale = 0.2
       // star.addImage('star' , starImg)
        meteor = createSprite( Math.round(random(200 , 600)), -1 , 10 , 20)
        meteor.velocityY = 2
        meteor.scale = 0.2
        meteor.addImage('meteor' , meteorImg)
       // starGrp.add(star)
        meteorGrp.add(meteor)
        //starGrp.setLifetimeEach(180)
        meteorGrp.setLifetimeEach(180)
        meteor.depth = mars.depth
        mars.depth = mars.depth+1
        
    }
}
