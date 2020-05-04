var cursors;
import palas from '../gameObjects/palas.js'
class WorldlGollum extends Phaser.Scene{
    constructor(){
        super({key: "WorldlGollum",active:true});
    }
    preload(){
        //this is the background 
        this.load.image("bgWorld1","./assets/Fondos/Firewatch2.jpg");
        //This is the floor    
        this.load.image("ground","./assets/Fondos/Bg/PNG/3_game_background/layers/9.png");
        //This is the Player
        this.load.atlas("alienGollum","./assets/Player/PlayerAlien/Alien1/walking/alien_caminar.png","./assets/Player/PlayerAlien/Alien1/walking/alien_caminar_atlas.json" );
          //This is the image in movement
          this.load.image("movimiento", "./assets/Fondos/Bg/PNG/3_game_background/layers/7Ca.png");
          this.load.image("movimiento2", "./assets/Fondos/Bg/PNG/3_game_background/layers/5Ca.png");
    
    }    
    create(){
        //Musica
        //let sonido = this.sound.add("musica",{loop:true});
        //sonido.play();
        //Background
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "bgWorld1");
          // Imagenes en movimiento
          this.mv = this.add.tileSprite(this.sys.game.config.width/2,450,1920,1080,"movimiento");
          this.mv2 = this.add.tileSprite(this.sys.game.config.width/2,500,1920,1080,"movimiento2");
          //----------------------
        
        //Platform
        this.platforms = new palas(this,this.sys.game.config.width/2,(this.sys.game.config.height/2)-30,"ground");
       
       
       
        //Player
        this.playerG = this.physics.add.sprite(100, 120, 'alienGollum');
        this.playerG.setBounce(0.2);
        this.playerG.setCollideWorldBounds(true);
        this.playerG.body.setGravityY(300);
       
        
        
//---------------------------------------------------Animaciones-----------------------------------------------
        //Right
        this.anims.create({
            key:'alien_1_walking',
            frames: this.anims.generateFrameNames('alienGollum',{
                prefix:'alien_1_walking000_',
                suffix:'.png',
                start:1,
               end:12
            }),
            repeat: -1,
            frameRate:10
        });
        //left
        this.anims.create({
            key:'alien_1_walking_left',
            frames: this.anims.generateFrameNames('alienGollum',{
                prefix:'alien_1_walking000_',
                suffix:'.png',
                start:1,
               end:12
            }),
            repeat: -1,
            frameRate:10
        });
       

       cursors = this.input.keyboard.createCursorKeys();

      this.physics.add.collider(this.playerG, this.platforms);
}
//Up
    update(){

    // if(cursors.left.isDown){
    //     this.playerG.setVelocityX(-160);
    //     this.playerG.flipX=true;
    //     this.playerG.anims.play('alien_1_walking_left',true);
    //  }else{
    //     this.playerG.setVelocityX(0);
    //     this.playerG.anims.play('alien_1_walking_left',false);
    //  }
    if(cursors.right.isDown){
         
        this.mv.tilePositionX += 4;
        this.mv2.tilePositionX += 3;

        this.playerG.flipX=false;
        this.playerG.setVelocityX(160);
        this.playerG.anims.play('alien_1_walking',true);
        }else{
            this.playerG.setVelocityX(0);
            this.playerG.anims.play('alien_1_walking',false);
            // this.mv.tilePositionX -= 4;
            // this.mv2.tilePositionX -= 3;
        }
    // else{
    //     this.playerG.setVelocityX(0);
    //     //player.anims.play('turn');
    // }
    // if (cursors.up.isDown && this.playerG.body.touching.down){
    //     //player.setVelocityY(-330);
    // }
}


}

export default WorldlGollum;