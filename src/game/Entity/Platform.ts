import GameInstance from '../GameInstance';
export default class Platform {
  public position: {
    x: number;
    y: number;
  };
  public width: number;
  public height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.position = {
      x: x,
      y: y,
    };

    this.width = width;
    this.height = height;
  }

  render() {
    GameInstance.context.fillStyle = 'rgba(0, 255, 0, .0)';
    GameInstance.context.fillRect(
      this.position.x - GameInstance.gameX,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    this.render();
  }
}
