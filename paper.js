class Paper
{
constructor(x,y) {
 var options ={
    isStatic:false,
   'restitution':0.3,
    'friction':0,
   'density':1.2
 }
 this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 75;
        this.height = 75;
        this.image = loadImage("paper.png");
        World.add(world, this.body);

} 
display(){
    
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
function keyPressed(){
    if(keyCode === UP_ARROW){
 Matter.Body.applyforce(paper.body,paper.body.postion,{x:130,y:145});
    }
}

