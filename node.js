class Node {
  
    constructor(x, y){
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D()
      this.maxVel = 20;
      this.edgeDist = 0
    }
    
    show(){
        strokeWeight(1)
      point(this.pos.x, this.pos.y)
    //   vertex(this.pos.x, this.pos.y)
    }
    
    update(){
      this.pos.add(this.vel);
    //   if( this.pos.x < 0 + this.edgeDist || this.pos.x > width - this.edgeDist || this.pos.y < 0 + this.edgeDist|| this.pos.y > height - this.edgeDist){
  
        
    //     this.vel = p5.Vector.random2D()
        
    //   }

      if ((this.pos.x <= 0) || (this.pos.x >= width)) {
        this.vel.x *= -1;
        this.pos.x = constrain(this.pos.x, 0, width-1);
      }
      if ((this.pos.y <= 0) || (this.pos.y >= height)) {
        this.vel.y *= -1;
        this.pos.y = constrain(this.pos.y, 0, height-1);
      }
      this.vel.limit(this.maxVel)
    }
    
  }