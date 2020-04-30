const config = {
    width: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload() {
    this.load.image("alienOp", "./assets/Alien_3_Attacking0001.png");
}
function create() {
    this.alienOp = this.physics.add.image(80, 100, "alienOp");
    this.alienOp.setScale(2);
    this.alienOp.flipX = false;
    this.alienOp.setOrigin(0.5);  
    // Fisicas
    this.alienOp.setCollideWorldBounds(true);
    this.alienOp.setBounce(0.3);
    this.alienOp.setAcceleration(50, 0);

}
function update(time, delta) {
    // this.alienOp.x++; 
}