var Adapter = {};

Adapter.init = function() {
	Adapter.engine = cc;
	var scaleX = cc.view.getScaleX();
	var scaleY = cc.view.getScaleX();

	GameUI.viewWidth = GameUI.viewWidth / scaleX;
	GameUI.viewHeight = GameUI.viewHeight / scaleY;

	Adapter.loadAssets = function(srcs) {
		return;
	}
	
	Adapter.createTextureFromCanvas = function(canvas) {
		return canvas;
	}

	Adapter.createSpriteFromImage = function(src, x, y, w, h) {
		y = GameUI.viewHeight - y;

		var image = new Image();
		image.crossOrigin = "Anonymous";
		image.src = src;

		var rect = cc.rect(x,y,w,h);
		var sprite = cc.Sprite.create(image, rect);

		sprite.anchorX = 0;
		sprite.anchorY = 0;
		sprite.setPositionX(x);
		sprite.setPositionY(y);
		sprite.width = w;
		sprite.height = h;

		return sprite;
	}
	
	Adapter.createTextureFromImage = function (src) {
		var image = new Image();
		image.src = src;

		return image;
	}
	
	Adapter.setTexture = function(sprite, texture) {
		var texture2d = sprite.texture;

		texture2d.initWithElement(texture);
		texture2d.handleLoadedTexture();

		sprite.setTexture(texture2d);

		return;
	}
	
	Adapter.setBeforePaintCallback= function(sprite, onBeforePaint) {
		sprite.orgDraw = sprite.draw;
		sprite.draw = function() {
			if(this.isVisible()) {
				onBeforePaint.call(this);
				this.orgDraw();
			}

			return;
		}

		return;
	}

	Adapter.createSprite = function(texture, x, y, w, h) {
		y = Math.round(GameUI.viewHeight - y - h);
		var rect = cc.rect(x,y,w,h);
		var sprite = cc.Sprite.create(texture, rect);
	
		sprite.getAbsPosition = function() {
			var point = {};
			var canvas = cc._canvas;
			var pos = GameUI.getHTMLElementPosition(canvas);

			point.x = this.getX();
			point.y = this.getY();
			point = sprite.convertToWorldSpace(point);

			point.x += pos.left;
			point.y += pos.top;

			return point;
		}
		
		sprite.getViewScale = function() {
			return cc.view._scaleX;
		}

		sprite.getX = function() {
			return this.getPositionX();
		}
		
		sprite.setX = function(x) {
			this.setPositionX(x);

			return;
		}
		
		sprite.getY = function() {
			return this.getPositionY();
		}
		
		sprite.setY = function(y) {
			this.setPositionY(y);

			return;
		}
		
		sprite.getAnchorX = function() {
			return this.anchorX;
		}
		
		sprite.setAnchorX = function(anchorX) {
			this.anchorX = anchorX;

			return;
		}
		
		sprite.getAnchorY = function() {
			return this.anchorY;
		}
		
		sprite.setAnchorY = function(anchorY) {
			this.anchorY = anchorY;

			return;
		}

		sprite.getPivotX = function() {
			return this.pivotX;
		}
		
		sprite.setPivotX = function(pivotX) {
			this.pivotX = pivotX;

			return;
		}
		
		sprite.getPivotY = function() {
			return this.pivotY;
		}
		
		sprite.setPivotY = function(pivotY) {
			this.pivotY = pivotY;

			return;
		}
/*		
		sprite.getScale = function() {
			return this.scale;
		}
		
		sprite.setScale = function(scale) {
			this.scale = scale;

			return;
		}
*/		
		sprite.getAlpha = function() {
			return this.getOpacity()/255;
		}
		
		sprite.setAlpha = function(alpha) {
			var opacity = Math.round(alpha * 255);
			this.setOpacity(opacity);

			return;
		}

		sprite.rotationFromRadian = function(radian) {
			return 180 * radian/Math.PI;
		}
/*		
		sprite.getRotation = function() {
		}
		
		sprite.setRotation = function(rotation) {
			this.rotation = rotation;

			return;
		}
*/

		sprite.movePivotToCenter = function() {
			var pivotX = sprite.getWidth() >> 1;
			var pivotY = sprite.getHeight() >> 1;
			
			var x = sprite.getX() + pivotX;
			var y = sprite.getY() + pivotY;

			this.setAnchorX(0.5);
			this.setAnchorY(0.5);

			this.setX(x);
			this.setY(y);

			return;
		}

		sprite.enableInput = function() {
			this._touchListener = cc.EventListener.create({
				event: cc.EventListener.TOUCH_ONE_BY_ONE,
				swallowTouches: true,
				onTouchBegan: this._onTouchBegan,
				onTouchMoved: this._onTouchMoved,
				onTouchEnded: this._onTouchEnded,
				onTouchCancelled: this._onTouchCancelled
				});

			var locListener = this._touchListener;
			if (!locListener._isRegistered())
				cc.eventManager.addListener(locListener, this);
		}

		sprite.orgDraw = sprite.draw;
		sprite.draw = function() {
			if(this.isVisible()) {
				this.updateWidgetIfDirty();
				this.orgDraw();
			}

			return;
		}

		sprite.orgTransform = sprite.transform;
		sprite.transform = function() {
			this.updateTransform();
			this.orgTransform();

			return;
		}

		sprite.updateTransform = function() {
		}

		sprite.updateTexture = function() {
			var texture2d = this.texture ? this.texture : new cc.Texture2D();

			texture2d.initWithElement(this.canvas);
			texture2d.handleLoadedTexture();

			sprite.setTexture(texture2d);
		}

		sprite.getNormalY = function() {
			var ny = GameUI.viewHeight - sprite.getY();

			return ny;
		}

		sprite.translatePoint = function(touch, event) {
			var touchLocation = touch.getLocation();
			var point = sprite.convertToNodeSpace(touchLocation);

			point.x = Math.round(point.x);
			point.y =  sprite.height - Math.round(point.y);

			return point;
		}

		sprite._onTouchBegan =  function (touch, event) { 
			var point = sprite.translatePoint(touch, event);
			sprite.pointerDown = sprite.handlePointerDown(point) != 0;

			return sprite.pointerDown;
		}

		sprite._onTouchEnded = function (touch, event) {
			var point = sprite.translatePoint(touch, event);
		
			if(sprite.pointerDown) {
				sprite.handlePointerUp(point);
				sprite.pointerDown = false;
				
				return true;
			}
		
			return false;
		}

		sprite._onTouchCancelled = function (touch, event) {
		}

		sprite._onTouchMoved = function (touch, event) {
			var point = sprite.translatePoint(touch, event);
			
			if(sprite.pointerDown) {
				sprite.handlePointerMove(point);

				return true;
			}

			return false;
		}

		sprite.cleanup = function() {
			console.log("cleanup:" + this.name);
		}

		sprite.setPositionX(x);
		sprite.setPositionY(y);
		return sprite;
	}
};

