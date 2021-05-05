class Launcher{
	constructor(body1,point1)
	{
		var options={
			bodyA:body1,
            pointB:point1,
			stiffness:0.04,
			length:1.2
			}
            
		this.launch=Constraint.create(options);
		World.add(world, this.launch);
        
    }
     display(){
         if(this.launch.bodyA !== null){
         push();
         var posA=this.launch.bodyA.position
         var posB=this.launch.pointB
         line(posA.x,posA.y,posB.x,posB.y);
         pop();
         }
     }
     fly(){
         this.launch.bodyA=null
     }
     attach(bodyA){
        this.launch.bodyA=bodyA;
    }
}

    