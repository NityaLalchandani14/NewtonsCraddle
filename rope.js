class Rope{
	constructor(body1,body2,pointA,pointB)
	{
this.pointA = pointA
this.pointB = pointB
var options = {
	bodyA: body1,
	bodyB: body2,
	pointB : {x:this.pointA, y:this.pointB}
}
	//create rope constraint here
this.rope = Constraint.create (options)
World.add (world,this.rope);
	}


    //create display() here 
display (){
	strokeWeight(2)
	line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y )
}
}
