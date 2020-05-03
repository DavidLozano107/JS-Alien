import SceneSelectPlyer from './sceneSelectPlyer.js';

class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
    }

    create(){
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "comenzarJuego");
        this.add.image(this.sys.game.config.width/2,  this.sys.game.config.height/2, "comenzarJuego");
        let btn = this.add.image(this.sys.game.config.width/2,  400, "btn").setScale(1.5) ;

        btn.setInteractive();

        btn.on("pointerup", () => {
            this.scene.add('SceneSelectPlyer.js', new SceneSelectPlyer);
        })
        
    }

}


export default Scene_play;