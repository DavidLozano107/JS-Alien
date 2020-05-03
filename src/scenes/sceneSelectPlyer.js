class SceneSelectPlayer extends Phaser.Scene{
    constructor(){
        super({key: "SceneSelectPlayer", active:true});
    }
    preload(){
                //Fondo de seleccionar personajes
                this.load.image("bgSelect","./assets/Fondos/bgSelect.jpg");
    }

    create(){
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "bgSelect");

        let btnPlay = this.add.image(this.sys.game.config.width/2,  500, "btn").setScale(1) ;

        btnPlay.setInteractive();

        btnPlay.on("pointerup", () => {
            alert("Inicia el juego");
        })

    }
}


export default SceneSelectPlayer;