import {useLocation} from 'react-router-dom';

import Controller from './Controller';
import {getDashMushrooms, getGoombas, getPlatforms} from './data/map';
import GenericObject from './entity/GenericObject';
import Player from './entity/Player';

type GameInstanceType = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

export default class GameInstance {
  static canvas: HTMLCanvasElement;
  static context: CanvasRenderingContext2D;
  static controller: Controller;
  static objects: GenericObject[] = [];
  static player: Player;
  static gameX = 0;
  private backgroundImage: HTMLImageElement;
  loc = useLocation();

  constructor() {
    GameInstance.controller = new Controller();
    this.backgroundImage = new Image();
  }

  init(props: GameInstanceType) {
    GameInstance.canvas = props.canvas;
    GameInstance.context = props.context;
    GameInstance.controller.init();
    GameInstance.player = new Player();
    GameInstance.objects = [
      ...getPlatforms(),
      ...getGoombas(),
      ...getDashMushrooms(),
    ];

    this.backgroundImage.src = 'assets/img/background.png';
  }

  //animation global du jeu
  animate() {
    GameInstance.context.clearRect(
      0,
      0,
      GameInstance.canvas.width,
      GameInstance.canvas.height
    );
    //this.displayBackground();

    //add all objects to the game
    GameInstance.player.update();
    GameInstance.objects.forEach(object => {
      object.update();
    });
  }

  displayBackground() {
    GameInstance.context.drawImage(
      this.backgroundImage,
      -GameInstance.gameX,
      0,
      this.backgroundImage.width *
        (GameInstance.canvas.height / this.backgroundImage.height),
      GameInstance.canvas.height
    );
  }
}
