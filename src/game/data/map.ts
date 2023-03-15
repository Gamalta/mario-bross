import GameInstance from '../GameInstance';
import DashMushroom from '../entity/DashMushroom';
import Goomba from '../entity/Goomba';
import Platform from '../entity/Platform';

export function getGoombas() {
  return [
    new Goomba({width: 100, height: 100}, {x: 70, y: 10}, {x: 4.5, y: 0}),
    new Goomba({width: 100, height: 100}, {x: 200, y: 10}, {x: 1, y: 0}),
  ];
}

export function getDashMushrooms() {
  return [new DashMushroom({width: 50, height: 50}, {x: 500, y: 500})];
}

export function getPlatforms() {
  return [
    new Platform(
      {width: 5750, height: 118},
      {x: 50, y: GameInstance.canvas.height - 118}
    ),
    new Platform({width: 50, height: GameInstance.canvas.height}, {x: 0, y: 0}),
    new Platform({width: 180, height: 200}, {x: 2320, y: 850}),
    new Platform({width: 180, height: 300}, {x: 220, y: 761}),
    new Platform({width: 300, height: 180}, {x: 400, y: 761}),
    new Platform({width: 300, height: 180}, {x: 700, y: 581}),
  ];
}
