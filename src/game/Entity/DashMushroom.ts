import {Position, Size} from '../../types/Object';
import GenericObject from './GenericObject';

export default class DashMushroom extends GenericObject {
  constructor(size: Size, position: Position) {
    super(size, position, undefined, true, undefined, 'rgba(0, 0, 255, .3)');
  }
}
