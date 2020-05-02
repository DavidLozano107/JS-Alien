var video;
class Bootloader extends Phaser.Scene {
    constructor(){
        super({ key: "Bootloader"});
    }
    
    preload() {
       this.scene.load.video("videoInicio", "");
    }



}



export default Bootloader;