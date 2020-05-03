class Bootloader extends Phaser.Scene {
    constructor(){
        super({ key: "Bootloader"});
    }
    
    preload() {

        this.load.on("complete", () => {
            this.scene.start("Scene_play");
        });
        this.load.image("comenzarJuego", "./assets/Fondos/FondoJuego2.jpg");
        this.load.image("segundoFondo", "./assets/Fondos/Firewatch2.jpg");
        
    }

}



export default Bootloader;