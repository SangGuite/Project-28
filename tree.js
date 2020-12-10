class Tree {
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            density:1
        }
        this.width=width;
        this.height=height;
        this.image=loadImage("tree.png");
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}