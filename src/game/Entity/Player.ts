import Controller from '../Controller';
import GameInstance from '../GameInstance';

export default class Player {
  controller: Controller;
  public position: {
    readonly x: number;
    y: number;
  };

  public velocity: {
    x: number;
    y: number;
  };

  public width: number;
  public height: number;

  canJump = false;

  constructor() {
    this.width = 100;
    this.height = 100;

    this.controller = GameInstance.controller;
    this.position = {
      x: GameInstance.canvas.width / 2 - this.width / 2,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  update() {
    /*controle des deplacements du joueur*/
    if (this.controller.keys.up && this.canJump) {
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

    //déplacement sur l'axe x (horizontalement)
    GameInstance.gameX += this.velocity.x;

    for (const platform of GameInstance.platforms) {
      if (
        this.position.x + this.width >=
          platform.position.x - GameInstance.gameX &&
        this.position.x <=
          platform.position.x - GameInstance.gameX + platform.width
      ) {
        if (
          this.position.y + this.height >= platform.position.y &&
          this.position.y <= platform.position.y + platform.height
        ) {
          if (this.velocity.x > 0) {
            this.velocity.x = 0;
            GameInstance.gameX =
              platform.position.x - this.width - 0.01 - this.position.x;
            break;
          } else if (this.velocity.x < 0) {
            this.velocity.x = 0;
            GameInstance.gameX =
              platform.position.x + platform.width + 0.01 - this.position.x;
            break;
          }
        }
      }
    }

    //ajout de la gravité
    this.velocity.y += 0.1;
    //déplacement sur l'axe y (verticalement)
    this.position.y += this.velocity.y;

    for (const platform of GameInstance.platforms) {
      if (
        this.position.x + this.width >=
          platform.position.x - GameInstance.gameX &&
        this.position.x <=
          platform.position.x - GameInstance.gameX + platform.width
      ) {
        if (
          this.position.y + this.height >= platform.position.y &&
          this.position.y <= platform.position.y + platform.height
        ) {
          if (this.velocity.y > 0) {
            this.canJump = true;
            this.velocity.y = 0;
            this.position.y = platform.position.y - this.height - 0.01;
            break;
          } else if (this.velocity.y < 0) {
            this.velocity.y = 0;
            this.position.y = platform.position.y + platform.height + 0.01;
            break;
          }
        }
      }
    }
    this.render();
  }

  render() {
    GameInstance.context.save();
    GameInstance.context.fillStyle = 'rgba(255, 0, 0, .2)';
    GameInstance.context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    GameInstance.context.restore();
  }
}
