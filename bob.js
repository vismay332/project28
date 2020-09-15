class Bob {
constructor(x,y,radius){
var options={
 isStatic:true,
 restitution:0.3,
 friction:0.5,
 density:1.2   
}
this.Body = Bodies.circle(x,y,radius,options);
//this.width = width;
//this.height = height;
this.r=radius;
World.add(world,this.Body);
}
display(){
    var pos = this.Body.position;
    var angle = this.Body.angle;
    push();
    fill("pink");
    ellipse(pos.x,pos.y,this.r);
    pop();
}
}