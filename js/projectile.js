function createProjectile(){
    this.x=0;
    this.y=0;
    this.speed=0;
    this.life=0;
    this.ammo=3;
    var outOfAmmo=false;
    this.checkMove=function(what,time){
        this.y=what.y-25;
        this.x=what.x;
        this.life=time;


    }
    this.move=function(){
        this.speed=0;
        
        
        if(this.life!=0){
            
             this.life--;
        

         }
         
    }
    this.projectileMove=function(check){
        if(this.ammo<0){
            this.textTime=50;
          this.ammo=0;
          this.life=0;
          outOfAmmo=true;
          this.textTime=40;  
        }
       
        this.speed=3;
       
            if(this.life!=0){
                this.life--;
                if(this.ammo>=0){
                if(check==0){
                    this.x-=this.speed;
                 }else if(check==1){
                    this.y-=this.speed;
                 }else if(check==2){
                     this.x+=this.speed;
                 }else{
                     this.y+=this.speed;
                 }
        }
        
           
           
        }
    }
    this.draw=function(direction,what){
        if(this.life!=0){
            if(direction==0){
                canvasContext.drawImage(projectileLeftPic,this.x-50,this.y);
             }else if(direction==1){
                canvasContext.drawImage(projectileUpPic,this.x-25,this.y-50);
             }else if(direction==2){
                canvasContext.drawImage(projectilePic,this.x,this.y);
             }else{
                canvasContext.drawImage(projectileDownPic,this.x-25,this.y+50);
             }
        }else{
            this.x=-100;
        }
        if(what==bluePlayer){
            if(outOfAmmo){
                if(this.textTime!=0){
                    this.textTime--;
                    rect(canvas.width-315,50,70,40,"black");
                   canvasContext.font="16px Arial";
                   canvasContext.fillStyle="red";
                   canvasContext.fillText("Ammo=0",canvas.width-315,70);
                 
                }
            }else{
                for(var i=0;i<this.ammo;i++){
                    canvasContext.drawImage(ammoPic,canvas.width-310+(i*10),50);
                }}
        }
        
            
                
        
        
        

    }
    var n=0;
    this.check=function(what){
        var dist=Math.sqrt((this.x-what.x)*(this.x-what.x)+((this.y-what.y)*(this.y-what.y)));
        if(what.type==1){
            if(dist<75){
                n+=1;
                if(n>150){
                    what.alive=false;
                    n=0;
                    trackGrid[100]=20;
                    trackGrid[101]=11;
                }
            }
        }
        else{
            if(dist<75){
                what.alive=false;
            }
            
            
        }
    }

}