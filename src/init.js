import Bootloader from './bootloader.js';
import Scene_play from './scenes/scene_play.js';
const config = {
    width: 1200,
    height: 560,
    parent: "contenedor",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        Bootloader,
        Scene_play
    ]
}

new Phaser.Game(config);

