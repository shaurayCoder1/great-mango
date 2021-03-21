class Stone{

	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,

			}
		
		this.image=loadImage("images/stone.png");
		this.r = r
		this.body=Bodies.circle(x, y, r, options)
		World.add(world, this.body);

	}
	display()
	{
				
			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0, this.radius)
			pop()
			
	}

}