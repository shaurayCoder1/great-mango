class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:1.0,

			}
		
		this.image=loadImage("images/mango.png");
		this.r = r
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
				
			push()
	display()
	translate(this.body.positionX,this.body.positionY);
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0, this.radius)
			pop()
			
	}

}