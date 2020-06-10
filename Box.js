class Box {
  constructor(x,y,width,height) {
    var options = {
      //isStatic: false,
      restitution : 0.5,
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    //this.Visiblity = 225;
       
    World.add(world, this.body);
  }
    
  display(){
    console.log(this.body.speed);
    var pos =this.body.position;
    if(this.body.speed<6){
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity-5;
      pop();
      tint(225, this.Visiblity);
    }
  }
} 