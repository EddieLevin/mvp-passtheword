import Phaser from 'phaser'

import BootScene from './scenes/BootScene'
import GuessScene from './scenes/GuessScene'
import PlayScene from './scenes/PlayScene'
import MainMenuScene from './scenes/MainMenuScene'
import CreatePassScene from './scenes/CreatePassScene'

export const config = {
    width:256,
    height: 272,
    backgroundColor: 0x353956,
    scene: [BootScene, PlayScene, GuessScene, MainMenuScene, CreatePassScene],
    pixleArt: true,
    physics: {
        default: "arcade",
        arcade: {debug:false}
    }
}

export const gameSettings = {
    playerSpeed : 100,
    enemySpeed : 40,
    spawnRate : 300, // lower number = more frequent spawns
    startingLives : 3,
}

export default new Phaser.Game(config)