import SpriteSheet from './SpriteSheet';
import background from "./image/tiles.png";
import mario from './image/characters.gif';
import {loadImage} from './loader';

export function loadMarioSprite () {
    return loadImage(mario).then(image => {
        const sprites = new SpriteSheet(image,16,16);
        sprites.define('idle',276,44,16,16);
        return sprites;
    })
}

export function loadBackgroundSprites () {
    return loadImage(background).then(image => {
        const sprites = new SpriteSheet(image,16,16);
        sprites.defineTile('ground',0,0);
        sprites.defineTile('sky',3,23);
        return sprites;
    })
}