var platforms;
import palas from '../gameObjects/palas.js'
class WorldlHoggle extends Phaser.Scene{
    constructor(){
        super({key: "WorldlHoggle",active:true});
    }
    preload(){
        //this is the background 
        this.load.image("bgWorld1","./assets/Fondos/Firewatch2.jpg");
        //This is the floor    
        this.load.image("ground","./assets/Fondos/Bg/PNG/3_game_background/layers/9.png");
        //This is the Player
        this.load.atlas("alienGollum","./assets/Player/PlayerAlien/Alien3/walking/alien3_caminar.png","./assets/Player/PlayerAlien/Alien3/walking/alien3_caminar_atlas.json" );
        
        }    
        create(){
            alert("dd");
            //Musica
            this.playerG.body.setGravityY(300)
            //Background
            this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "bgWorld1");
            //Platform
            this.platforms = new palas(this,this.sys.game.config.width/2,(this.sys.game.config.height/2)-30,"ground");
            //Player
            this.playerG = this.physics.add.sprite(100, 120, 'alienGollum');
            this.playerG.setBounce(0.2);
            this.playerG.setCollideWorldBounds(true);
            this.playerG.body.setGravityY(300);
            
    
            this.anims.create({
                key:'alien_3_walking',
                frames: this.anims.generateFrameNames('alienGollum',{
                    prefix:'alien_3_walking000_',
                    suffix:'.png',
                    start:1,
                   end:12
                }),
                repeat: -1,
                frameRate:10
            });
            //Alien1
           this.playerG.anims.play('alien_3_walking');
    
           //cursors = this.input.keyboard.createCursorKeys();
    
          this.physics.add.collider(this.playerG, this.platforms);
          
          
    
        
    
    
    
    }
    
    }

export default WorldlHoggle;