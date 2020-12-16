class Paper{
    constructor(x, y){
        var option = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, 25, option);
        this.r = 25;
        World.add(world, this.body);
    }

    display(){
        var p = this.body.position
        push();
        translate(p.x, p.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
    }
}