class Cannon{
   

    constructor(x,y,width,height){
    
        this.x = x;
        this.y = y;
        this.width = width ;
        this.height = height;
        this.Cannon_image=loadImage("assets/canon.png");
        this.canon_Base = loadImage("assets/cannonBase.png")
    }
    
    
    
    show(){
    push()
    imageMode(CENTER);
    image(this.canon_image,700,420,this.width,this.height)
    pop()
    imageMode(CENTER)
    image(this.canon_Base,700,460,200,200);
    
    
    
    
    }
    
    
    
    }