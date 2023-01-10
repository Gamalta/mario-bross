import {useLocation} from 'react-router-dom';
import Controller from './Controller';
import {getGoombas, getPlatforms} from './data/map';
import GenericObject from './Entity/GenericObject';
import Goomba from './Entity/Goomba';
import Platform from './Entity/Platform';
import Player from './Entity/Player';

type GameInstanceType = {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
};

export default class GameInstance {
  static canvas: HTMLCanvasElement;
  static context: CanvasRenderingContext2D;
  static controller: Controller;
  static platforms: Platform[] = [];
  static goombas: Goomba[] = [];
  static genericObjects: GenericObject[] = [];
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
    GameInstance.platforms = getPlatforms();
    GameInstance.goombas = getGoombas();

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
    this.displayBackground();

    GameInstance.player.update();

    GameInstance.genericObjects.forEach(genericObject => {
      genericObject.update();
    });

    GameInstance.platforms.forEach(platform => {
      platform.update();
    });

    GameInstance.goombas.forEach(goomba => {
      goomba.update();
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
