import GameInstance from '../GameInstance';
import {gravity} from '../Setttings';
export default class Goomba {
  public position: {
    x: number;
    y: number;
  };

  public velocity: {
    x: number;
    y: number;
  };

  public width: number;
  public height: number;

  constructor(
    position: {x: number; y: number},
    velocity: {x: number; y: number}
  ) {
    this.position = {
      x: position.x,
      y: position.y,
    };

    this.velocity = {
      x: velocity.x,
      y: velocity.y,
    };

    this.width = 43.33;
    this.height = 50;
  }

  render() {
    GameInstance.context.fillStyle = 'red';
    GameInstance.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.render();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (
      this.position.y + this.height + this.velocity.y <=
      GameInstance.canvas.height
    ) {
      this.velocity.y += gravity;
    }
  }
}
