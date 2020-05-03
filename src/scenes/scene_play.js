class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
    }

    create(){
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "comenzarJuego");
    }

}


export default Scene_play;