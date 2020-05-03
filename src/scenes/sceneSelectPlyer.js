import Worldl1 from './world1.js';
class SceneSelectPlayer extends Phaser.Scene{
    constructor(){
        super({key: "SceneSelectPlayer", active:true});
    }
    preload(){
        //Fondo de seleccionar personajes
        this.load.image("bgSelect","./assets/Fondos/bgSelect.jpg");

        //Aliens Imagenes
            // Alien 1
            this.load.spritesheet("aline1","./assets/Player/PlayerAlien/Alien1/attacking/alien.png",{frameWidth:148, frameHeight:158});

            // Alien 2
            this.load.spritesheet("aline2","./assets/Player/PlayerAlien/Alien2/attacking/alien2_ataque.png",{frameWidth:148, frameHeight:158});

            // Alien 3
            this.load.spritesheet("aline3","./assets/Player/PlayerAlien/Alien3/attacking/alien3_ataque.png",{frameWidth:148, frameHeight:158});

            //Botones de Seleccion
            //Boton 1 para seleccionar el personaje 1
            this.load.image("Boton1Gollum", "./assets/Boton/botonGollum1.png");
            //Boton 2 para seleccionar el personaje 2
            this.load.image("Boton2Snoopy", "./assets/Boton/botonSnoopy1.png");
            //Boton 3 para seleccionar el personaje 3
            this.load.image("Boton3Hoggle", "./assets/Boton/botonHoggle.png");
    }

    create(){
        //Fondo
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "bgSelect");
       // ---------------------------//

       // Titulo de Selección de personajes
       let texto = "SELECCIONA  TU  PERSONAJE";
       let style = {font: "40px Endor", fill:"#fff", align:"center"};
       let mostarTexto = this.add.text(300, 30, texto, style);
       //------------------


       // Añadir a los Aliens 
            //Alien 1
        this.Player1 = this.add.sprite(350,this.sys.game.config.height/2,'aline1');
            //Alien 2
        this.Player2 = this.add.sprite(620,this.sys.game.config.height/2,'aline2');
            //Alien 3
        this.Player3 = this.add.sprite(910,this.sys.game.config.height/2,'aline3');

        //Añadir Botones para la seleccion de personajes
            //Boton 1
        this.BotonGollum = this.add.image(340,370,'Boton1Gollum');
        this.BotonGollum.setScale(0.3);
          //Boton 2
          this.BotonSnoopy = this.add.image(610,370,'Boton2Snoopy');
          this.BotonSnoopy.setScale(0.3);
            //Boton 3
        this.BotonHoggle = this.add.image(880,370,'Boton3Hoggle');
        this.BotonHoggle.setScale(0.3);

        //Seleccion de personaje


        
         /*Animaciones de los spraits
        this.anims.create({
            key: 'select',
            frames: this.anims.generateFrameNumbers('aline1',{
                frames:[0,1,2,3,4,5,6,7,8,9,10,11]
            }),
            repeat: -1,
            frameRate:10
        });
        // Alien 1 comenzara a hacer la animación
        this.Player1.anims.play('select');
        */ 

//---------------------------------------------------------------------------------------------------------------------
        let btnPlay = this.add.image(this.sys.game.config.width/2, 500, "btn").setScale(1) ;
        btnPlay.setInteractive();
        btnPlay.on("pointerup", () => {
            this.scene.add('Worldl1.js',new Worldl1);
        })
    }
}


export default SceneSelectPlayer;