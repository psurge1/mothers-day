class flower {
    constructor(x, y, width, height=width, petals, flowerColor, petalColor) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.petals = petals;
        this.flowerColor = color(flowerColor[0], flowerColor[1], flowerColor[2]);
        this.petalColor = color(petalColor[0], petalColor[1], petalColor[2]);
        this.time = 0;
        this.petalSize = 0;
    }

    draw(width=this.width, height=this.height)
    {
        if (this.time >= this.width)
        {
            let factor = 1.25;
            for (let i = 0; i < this.petals; ++i)
            {
                push();
                translate(this.x, this.y);
                rotate(i/this.petals*2*PI);
                fill(this.petalColor);
                ellipse(0, 0+this.height*factor/2, this.petalSize/2, this.petalSize*factor);
                pop();
                if (this.petalSize < this.width) {
                    this.petalSize+=this.width/800;
                }
            }
        }

        push();
        strokeWeight(0.5);
        fill(this.flowerColor);
        ellipse(this.x, this.y, this.time, this.time);
        pop();

        if (this.time < this.width)
        {
            ++this.time;
        }
    }
}