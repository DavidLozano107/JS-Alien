var platforms;
class Worldl1 extends Phaser.Scene{
    constructor(){
        super({key: "Worldl1",active:true});
    }
    preload(){
        //this is the background 
        this.load.image("bgWorld1","./assets/Fondos/Firewatch2.jpg");
        //This is the floor    
        this.load.image("ground","./assets/Fondos/Bg/PNG/3_game_background/layers/9.png");
        //This is the Player
        this.load.spritesheet("alien1","./assets/Player/PlayerAlien/Alien1/attacking/alien.png",{ frameWidth: 148, frameHeight: 158 });
    }    
    create(){
        alert("dd");
        //Background
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "bgWorld1");
        //Platform
        platforms = this.physics.add.staticGroup();
        platforms.create(this.sys.game.config.width/2,(this.sys.game.config.height/2)-30,"ground");
        //Player

        this.playerG = this.physics.add.sprite(100, 120, 'alien1');
        this.playerG.setBounce(0.2);
        this.playerG.setCollideWorldBounds(true);


        this.anims.create({
            key: 'select',
            frames: this.anims.generateFrameNumbers('alien1',{
                frames:[0,1,2,3,4,5,6,7,8,9,10,11]
            }),
            repeat: -1,
            frameRate:10
        });
        //Alien1
      //  this.player.anims.play('select');

    



}

}

export default Worldl1;