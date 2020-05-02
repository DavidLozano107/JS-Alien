class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
    }

    preload(){
        console.log("SE cargo la escena");
    }
}


export default Scene_play;