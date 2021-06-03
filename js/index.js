//canvas
var canvas;
var canvasContext;
canvas=document.getElementById("gameCanvas");
canvasContext=canvas.getContext("2d");
var bluePlayer=new playerclass();
var npc = new bat();
var zombies = new zombie();
var shooterZombies=new shooter();




window.onload=function(){
    loadImages();
}
function imageLoadingDoneSoStartGame(){
   loadlevel(levelOne);
    var framesPerSec=50;
    setInterval(all,1000/framesPerSec);
       
        
}

function loadlevel(whichLevel){
    
    trackGrid=whichLevel.slice();
    keys=0;
    trophieCount();
    console.log(projectileShooterCollision);

}
function trophieCount(){
    for(var i=0;i<trackGrid.length;i++){
        if(trackGrid[i]==goal){
            trophies++;
        }
        projectileShooterCollision=true;
        projectileBatCollision=true;
        projectileZombieCollision=true;
    }
}


function all(){
    moveAll();
    drawAll();
}


function moveAll(){
    zombies.checkMove();
    shooterZombies.checkMove();
    bluePlayer.playerMove();
    bluePlayer.tracksmh();
    npc.edgeWrap();
    npc.move(projectileBatCollision);
    zombies.tracsmh();
    shooterZombies.tracksmh(bluePlayer,projectileShooterCollision);
    shooterZombies.move(projectileShooterCollision);
    zombies.move(projectileZombieCollision);
    

    
    
}

rect(0,0,canvas.width,canvas.height,"black");

function drawAll(){
shooterZombies.shooterReset();
 zombies.reset();
bluePlayer.playerReset();
trackCreate();
zombies.draw(projectileZombieCollision); 
shooterZombies.draw(projectileShooterCollision);
bluePlayer.check(npc);
bluePlayer.check(shooterZombies.shot);
zombies.checkCollison(bluePlayer,projectileZombieCollision);

bluePlayer.draw();
npc.draw(projectileBatCollision);
}



