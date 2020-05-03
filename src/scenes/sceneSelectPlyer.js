class SceneSelectPlayer extends Phaser.Scene{
    constructor(){
        super({key: "SceneSelectPlayer", active:true});
    }
    preload(){
        //Fondo de seleccionar personajes
        this.load.image("bgSelect","./assets/Fondos/bgSelect.jpg");
        //Aliens
        this.load.spritesheet("aline1","./assets/Player/PlayerAlien/Alien1/attacking/alien.png",{frameWidth:148, frameHeight:158});
        // this.load.spritesheet("aline2","./assets/PlayerAlien/Alien2/");
        // this.load.spritesheet("aline3","./assets/PlayerAlien/Alien3/");
    }

    create(){
        //Fondo
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "bgSelect");
       
        this.Player = this.add.sprite(150,this.sys.game.config.height/2,'aline1');
        this.anims.create({
            key: 'select',
            frames: this.anims.generateFrameNumbers('aline1',{
                frames:[0,1,2,3,4,5,6,7,8,9,10,11]
            }),
            repeat: -1,
            frameRate:10
        });
        //Alien1
        this.Player.anims.play('select');


        
//---------------------------------------------------------------------------------------------------------------------
        let btnPlay = this.add.image(this.sys.game.config.width/2,  500, "btn").setScale(1) ;
        btnPlay.setInteractive();
        btnPlay.on("pointerup", () => {
            this.scene.add('SceneSelectPlyer.js', new SceneSelectPlyer);
        })

    }
}


export default SceneSelectPlayer;