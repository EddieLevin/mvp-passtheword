import Phaser from 'phaser'

export default class CreatePassScene extends Phaser.Scene {

    enterPasswordText: string[] = []

    constructor(){
        super("createPassword");
    }
    create(){
        this.enterPasswordText['Select keywords to create password'] = this.add.text(40,40,"Select keywords \n to create password").setPosition(40,70);
        this.input.on('pointerup', function (pointer) {

            this.scene.start('guess');

        }, this);
        // Left Click advances to next scene

    }
    
}