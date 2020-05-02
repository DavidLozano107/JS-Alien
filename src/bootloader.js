var video;
class Bootloader extends Phaser.Scene {
    constructor(){
        super({ key: "Bootloader"});
    }
    
    preload() {
        console.log("Se cargo el bootloader");
    }


}



export default Bootloader;