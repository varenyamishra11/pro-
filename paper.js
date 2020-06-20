class paper{
  constructor(x,y,radius){   

    var options={
      isStatic:false,
      resitution:0.3,
      friction:0.5,
      density:1.2
    }

    this.body = Bodies.circle(x,y,radius,options)
    

    World.add(world, this.body)
  }

  display(){
    var pos =this.body.position;
   // var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    //rotate(angle);
    fill("pink");
    ellipse(0,-25,this.radius);
    pop();


  }
}