import Controller from '../Controller';
import GameInstance from '../GameInstance';
import {movePlayer} from '../Mover';
import DashMushroom from './DashMushroom';
import GenericObject from './GenericObject';

export default class Player extends GenericObject {
  controller: Controller;
  canJump = false;

  constructor() {
    super({width: 100, height: 100}, {x: 0, y: 0}, undefined, true);

    this.controller = GameInstance.controller;
    this.position = {
      x: GameInstance.canvas.width / 2 - this.size.width / 2,
      y: 100,
    };
  }

  update() {
    /*controle des deplacements du joueur*/
    if (this.controller.keys.up && this.canJump && this.velocity.y === 0) {
      this.velocity.y = -10;
      this.canJump = false;
    }
    if (this.controller.keys.down) {
      this.velocity.y = 10;
    }
    if (this.controller.keys.right) {
      this.velocity.x = 5;
    } else {
      //friction pour ralentir le joueur
      if (this.velocity.x > -0.1 && this.velocity.x < 0.1) this.velocity.x = 0;
      this.velocity.x *= 0.93;
    }
    if (this.controller.keys.left) {
      this.velocity.x = -5;
    }

    movePlayer(this);
    this.render();
  }

  render() {
    GameInstance.context.save();
    GameInstance.context.fillStyle = 'rgba(255, 0, 0, .2)';
    GameInstance.context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
    GameInstance.context.restore();
  }

  onCollision(object: GenericObject) {
    if (object instanceof DashMushroom) {
      this.size.height = 200;
      console.log('grandit');
    }
  }
}
