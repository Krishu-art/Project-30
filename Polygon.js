class Polygon{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :3,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("polygon.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var polygonPos=this.body.position;
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;	
		push()
		translate(polygonPos.x, polygonPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}