class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 255;
        World.add(world, this.body);
      }
      display(){
        fill("blue")
        console.log(this.body.speed);
        if(this.body.speed < 3){
       // super.display();
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();

        }
        else{
            World.remove(world, this.body);
          //  push();
          //  this.visiblity = this.visiblity - 50;
          //  tint(255,this.visiblity);
          //  rect(this.body.position.x, this.body.position.y, 60, 70);
          //  pop();
           }
      }
}

