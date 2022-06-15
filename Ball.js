class Ball
{
constructor(x,y,r){
    let options = {
      restitution:1
      };
    this.Body= Bodies.circle(x,y,r,options)
    World.add(world,this.Body)
this.r=r

}
show(){
  fill("blue")
    ellipse(this.Body.position.x,this.Body.position.y,this.r)
}

}