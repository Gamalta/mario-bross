import GameInstance from '../GameInstance';

export default class GenericObject {
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
  public image: ImageBitmap;

  constructor(x: number, y: number, image: ImageBitmap) {
    this.position = {
      x: x,
      y: y,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  render() {
    GameInstance.context.drawImage(
      this.image,
      this.position.x,
      this.position.y
    );
  }

  update() {
    this.render();
    this.position.x += this.velocity.x;
  }
}
