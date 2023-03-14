import GenericObject from './Entity/GenericObject';
import Player from './Entity/Player';
import GameInstance from './GameInstance';

//TODO generalize movePlayer and moveObject

export function movePlayer(player: Player) {
  const {position, size, velocity} = player;

  //déplacement sur l'axe x (horizontalement)
  GameInstance.gameX += velocity.x;

  for (const object of GameInstance.objects) {
    if (
      position.x + size.width >= object.position.x - GameInstance.gameX &&
      position.x <= object.position.x - GameInstance.gameX + object.size.width
    ) {
      if (
        position.y + size.height >= object.position.y &&
        position.y <= object.position.y + object.size.height
      ) {
        if (velocity.x > 0) {
          velocity.x = 0;
          GameInstance.gameX =
            object.position.x - size.width - 0.01 - position.x;
          break;
        } else if (velocity.x < 0) {
          velocity.x = 0;
          GameInstance.gameX =
            object.position.x + object.size.width + 0.01 - position.x;
          break;
        }
      }
    }
  }

  //ajout de la gravité
  velocity.y += 0.1;
  //déplacement sur l'axe y (verticalement)
  position.y += velocity.y;

  for (const object of GameInstance.objects) {
    if (
      position.x + size.width >= object.position.x - GameInstance.gameX &&
      position.x <= object.position.x - GameInstance.gameX + object.size.width
    ) {
      if (
        position.y + size.height >= object.position.y &&
        position.y <= object.position.y + object.size.height
      ) {
        if (velocity.y > 0) {
          //need to be invalidate player jump when fall into void (no platform)
          player.canJump = true;
          velocity.y = 0;
          position.y = object.position.y - size.height - 0.01;
          break;
        } else if (velocity.y < 0) {
          velocity.y = 0;
          position.y = object.position.y + object.size.height + 0.01;
          break;
        }
        if (velocity.y === 0) {
          player.canJump = true;
        }
      }
    }
  }
}
export function moveObject(object: GenericObject) {
  const {position, size, velocity} = object;

  //déplacement sur l'axe x (horizontalement)
  position.x += velocity.x;

  for (const obj of GameInstance.objects) {
    if (object === obj) continue;
    if (
      position.x + size.width >= obj.position.x &&
      position.x <= obj.position.x + obj.size.width
    ) {
      if (
        position.y + size.height >= obj.position.y &&
        position.y <= obj.position.y + obj.size.height
      ) {
        if (velocity.x > 0) {
          velocity.x = 0;
          position.x = obj.position.x - size.width - 0.01;

          break;
        } else if (velocity.x < 0) {
          velocity.x = 0;
          position.x = obj.position.x + obj.size.width + 0.01;
          break;
        }
      }
    }
  }
  //ajout de la gravité
  velocity.y += 0.1;
  //déplacement sur l'axe y (verticalement)
  position.y += velocity.y;

  for (const obj of GameInstance.objects) {
    if (object === obj) continue;
    if (
      position.x + size.width >= obj.position.x &&
      position.x <= obj.position.x + obj.size.width
    ) {
      if (
        position.y + size.height >= obj.position.y &&
        position.y <= obj.position.y + obj.size.height
      ) {
        if (velocity.y > 0) {
          velocity.y = 0;
          position.y = obj.position.y - size.height - 0.01;
          break;
        } else if (velocity.y < 0) {
          velocity.y = 0;
          position.y = obj.position.y + obj.size.height + 0.01;
          break;
        }
      }
    }
  }
}
