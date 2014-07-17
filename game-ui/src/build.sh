#!/bin/bash
cat module-begin.js main.js adapter-cocos2d.js  animation.js  cantk-override.js  uisprite.js module-end.js >game-ui-cocos2d.js
cat module-begin.js main.js adapter-pixi.js  animation.js  cantk-override.js  uisprite.js module-end.js >game-ui-pixi.js
cat module-begin.js main.js adapter-phaser.js  animation.js  cantk-override.js  uisprite.js module-end.js>game-ui-phaser.js
