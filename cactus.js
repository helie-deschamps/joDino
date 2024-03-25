class Cactus{

    constructor(){

        this.randomDistance = Math.floor(random (40,80));
        this.x = game.window_width + this.randomDistance;
        this.type = Math.floor(random(3));
        this.collisionBoxes=[];
        console.log("rh")

        switch (this.type) {
            case 0:
            case 1:
            case 2:
                // hauteur du sprite
                this.h = 26;
                // position y du sprite from top of the canvas
                this.y = 120;
                // largeur du sprite
                this.w = 25;
                // pixel en haut a gauche, en bas a gauche, en haut a droite, en bas a droite de le feuille de spite correspondant a l element
                this.img = game.sprite.get(0, 5, 26, 26);
            break;
        }
        this.createCollisionBoxes(this.randomDistance-70);
    }

    update(speed){
        this.x -= speed;
    }
    createCollisionBoxes(distanceOffset){
        for (let b of new CollisionBox(this.type,distanceOffset).getCollisionBoxes()){
            this.collisionBoxes.push(b);
        }
    }
    display(){
        image(this.img, this.x, this.y, this.w, this.h);
    }
}