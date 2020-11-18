class Rectangle{
    constructor(x, y, width, height, angle){
        var option={
            restitution:1,
            friction:1.5,
        }
        this.body=Bodies.rectangle( x, y, width, height, option);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
    push();
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle);
    imageMode(CENTER);
    fill("red");
    image(this.image, 0, 0, this.width, this.height);
    pop();
    }
}