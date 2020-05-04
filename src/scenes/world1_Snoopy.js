var platforms;
class WorldlSnoopy extends Phaser.Scene{
    constructor(){
        super({key: "WorldlSnoopy",active:true});
    }
    preload(){
        //this is the background 
        this.load.image("bgWorld1","./assets/Fondos/Firewatch3.jpg");
        //This is the floor    
        this.load.image("ground","./assets/Fondos/Bg/PNG/3_game_background/layers/9.png");
        //This is the Player
        this.load.atlas("alien2_caminar","./assets/Player/PlayerAlien/Alien2/walking/alien2_caminar.png", "./assets/Player/PlayerAlien/Alien2/walking/alien2_caminar_atlas.json");
        //This is the sound
        this.load.audio("musica", "./assets/videos/inicioJuego.mp3");
        //This is the image in movement
        this.load.image("movimiento", "./assets/Fondos/Bg/PNG/3_game_background/layers/7.png");
        this.load.image("movimiento2", "./assets/Fondos/Bg/PNG/3_game_background/layers/5.png");
    }    
    create(){
        // Carga el Sonido
        let sonido = this.sound.add("musica",{loop:true});
        sonido.play()
        ///----------------------------------

        //Background

        //  Sirve para que el fondo se mueva 

        //this.fondo2 = this.add.tileSprite(700,0,1400,1200,"bgWorld1");

        //-----------------


        this.fondo2 = this.add.image(this.sys.game.config.width/2,this.sys.game.config.height/2,"bgWorld1");
         // Imagenes en movimiento
        this.mv = this.add.tileSprite(100,390,1920,1080,"movimiento").setScale(2.5);
        this.mv2 = this.add.tileSprite(300,100,1920,1080,"movimiento2").setScale(2);
        //----------------------
        //Platform
        platforms = this.physics.add.staticGroup();
        platforms.create(this.sys.game.config.width/2,(this.sys.game.config.height/2)-30,"ground");
        //Player

        this.playerG = this.physics.add.sprite(100, 120, 'alien2_caminar');
        this.playerG.setBounce(0.2);
        this.playerG.setCollideWorldBounds(true);

        this.anims.create({
            key: 'alien2_walk',
            frames: this.anims.generateFrameNames('alien2_caminar',{
                prefix: 'alien_2_walking000_',
                suffix: '.png',
                frames: [1,2,3,4,5,6,7,8,9,10,11,12]
            }),
            repeat: -1,
            frameRate: 10
        });

        this.playerG.anims.play('alien2_walk');

         this.cursor = this.input.keyboard.createCursorKeys();
    }


    update(time,delta){
        if(this.cursor.right.isDown){
            //Animacion para el fondo 
            //this.fondo2.tilePositionX += 2;
            //
            this.mv.tilePositionX += 4;
            this.mv2.tilePositionX += 3;
            this.playerG.setVelocityX(10);
            this.playerG.anims.play('alien2_walk',true);
        }else if(this.cursor.right.isUp){
            this.playerG.setVelocityX(0);
            this.playerG.anims.play('alien2_walk',false);
        }

        if(this.cursor.left.isDown){
            //Animacion para el fondo
            //this.fondo2.tilePositionX -= 2;
            //
            this.mv.tilePositionX -= 4;
            this.mv2.tilePositionX -= 3;
        }
        
    }
}



export default WorldlSnoopy;