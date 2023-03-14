import {Position, Size, Velocity} from '../../types/Object';
import GameInstance from '../GameInstance';
import {moveObject} from '../Mover';

export default class GenericObject {
  public size: Size;
  public position: Position;
  public velocity: Velocity;
  public image?: ImageBitmap;
  public movable: boolean;
  public collision = false;
  public color: string;

  constructor(
    size: Size,
    position: Position,
    velocity: Velocity = {x: 0, y: 0},
    movable = false,
    image?: ImageBitmap,
    color = 'rgba(0, 0, 0, .3)'
  ) {
    this.size = size;
    this.position = position;
    this.velocity = velocity;
    this.image = image;
    this.movable = movable;
    this.color = color;
  }

  render() {
    if (this.image) {
      GameInstance.context.drawImage(
        this.image,
        this.position.x,
        this.position.y
      );
    } else {
      GameInstance.context.fillStyle = this.color;
      GameInstance.context.fillRect(
        this.position.x - GameInstance.gameX,
        this.position.y,
        this.size.width,
        this.size.height
      );
    }
  }

  update() {
    if (this.movable) {
      moveObject(this);
    }
    this.render();
  }
}
