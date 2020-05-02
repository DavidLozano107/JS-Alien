class Bootloader extends Phaser.Scene {
    constructor(){
        super({ key: "Bootloader"});
    }

    preload() {
       this.game.load.video("Introduccion", "assets/videos/Video_Introduccion.mp4");
    }



}



export default Bootloader;