import {Position, Size, Velocity} from '../../types/Object';
import GenericObject from './GenericObject';

export default class Goomba extends GenericObject {
  constructor(
    size: Size,
    position: Position,
    velocity: Velocity = {x: 0, y: 0}
  ) {
    super(size, position, velocity, true, undefined, 'rgba(0, 255, 0, .3)');
  }
}
