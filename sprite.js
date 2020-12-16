/*class Sprite{
    constructor(x,y,width,height){
        var option = {
            isStatic : true
        }
        
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("red");
        rect(this.body.x, this.body.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}*/