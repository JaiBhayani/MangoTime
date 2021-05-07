class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0.5,
		
			

			}
		this.x=x;
		this.y=y;
		this.r = r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
		this.image = loadImage("Pluckingmangoes/mango.png");

	}
	display()
	{
			
			var mangopos=this.body.position;		
			var mangoangle = this.body.angle;
			push()
			translate(mangopos.x, mangopos.y);
			rotate(mangoangle);
			imageMode(CENTER)
			//strokeWeight(3);
			//fill("red")
			image(this.image,0,0,this.r*2,this.r*2);
			pop()
			
			
			
	}

}