import Platform from '../Entity/Platform';
import Goomba from '../Entity/Goomba';
import GameInstance from '../GameInstance';

export function getGoombas() {
  return [
    new Goomba({x: 200, y: 200}, {x: 0, y: 0}),
    new Goomba({x: 300, y: 200}, {x: 0, y: 0}),
  ];
}

export function getPlatforms() {
  return [
    new Platform(0, GameInstance.canvas.height - 118, 5750, 118),
    new Platform(0, 0, 50, GameInstance.canvas.height),
    new Platform(2320, 850, 180, 200),
  ];
}
