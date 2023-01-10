export default class Controller {
  public keys = {
    up: false,
    down: false,
    right: false,
    left: false,
  };

  init() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowUp':
          this.keys.up = true;
          break;
        case 'ArrowDown':
          this.keys.down = true;
          break;
        case 'ArrowRight':
          this.keys.right = true;
          break;
        case 'ArrowLeft':
          this.keys.left = true;
          break;
      }
    });
    window.addEventListener('keyup', event => {
      switch (event.key) {
        case 'ArrowUp':
          this.keys.up = false;
          break;
        case 'ArrowDown':
          this.keys.down = false;
          break;
        case 'ArrowRight':
          this.keys.right = false;
          break;
        case 'ArrowLeft':
          this.keys.left = false;
          break;
      }
    });
  }
}
