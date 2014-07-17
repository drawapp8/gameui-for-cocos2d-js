GameUI = function() {

};

GameUI.preloadAssetsInUIData = function(uiData, engine) {
	var images = [];
	var wm = findWindowManager(uiData);

	foreachAsset(wm ? wm : uiData, function(src) {
		src = toAbsoluteURL(src);

		if(images.indexOf(src) < 0) {
			images.push(src);
		}

		return src;
	});

	Adapter.init();
	Adapter.loadAssets(images);

	return;
}

GameUI.init = function(game, stage, uiData, viewWidth, viewHeight) {
	var wm = findWindowManager(uiData);

	GameUI.game = game;
	GameUI.stage = stage;
	GameUI.uiData = uiData;
	GameUI.viewWidth = viewWidth;
	GameUI.viewHeight = viewHeight;

	CanTK.init();

	var config = CanTK.detectDeviceConfig();
	GameUI.rootWidget = CanTK.createElementWithJson(wm ? wm : uiData);
	GameUI.rootWidget.setDeviceConfig(uiData.config);	
	GameUI.rootWidget.setDeviceConfig(config);	

	Adapter.init();

	return;
}

GameUI.setStage = function(stage) {
	GameUI.stage = stage;

	return;
}

GameUI.openWindow = function(windowName, x, y, width, height, onWindowClose, initData) {
	var cantkWidget = lookUpWidget(GameUI.rootWidget, windowName);
	var win = GameUI.createUISprite(cantkWidget, x, y, width, height, onWindowClose, initData);
	
	if(win) {
		GameUI.stage.addChild(win);
	}

	return win;
};

GameUI.createWidget = function(windowName, widgetName, x, y, width, height) {
	var cantkWidget = lookUpWidget(GameUI.rootWidget, windowName, widgetName);
	var widget = GameUI.createSprite(cantkWidget, x, y, width, height);
		
	GameUI.stage.addChild(widget);
	
	return widget;
}

GameUI.loadScene = function(windowName, onSpriteCreate, initData) {
	var w = GameUI.viewWidth;
	var h = GameUI.viewHeight;
	var win = lookUpWidget(GameUI.rootWidget, windowName, null);

	win.setSize(w, h);
	win.setPosition(0, 0);
	win.relayoutChildren();
	win.callOnBeforeOpen(initData);

	var bgImage = win.getImageSrcByType(CanTK.UIElement.DEFAULT_IMAGE);

	if(bgImage) {
		bgImage = toAbsoluteURL(bgImage);
		var bgSprite = Adapter.createSpriteFromImage(bgImage, 0, 0, w, h);

		GameUI.stage.addChild(bgSprite);
	}

	var n = win.children.length;
	for(var i = 0; i < n; i++) {
		var iter = win.children[i];

		iter.onInit();
		iter.saveState();

		var sprite = GameUI.createSprite(iter);
		sprite.name = iter.name;

		onSpriteCreate(sprite);
	}
	
	win.callOnOpen(initData);

	return n;
};

///////////////////////////////internal functions/////////////////////////////////////////
function foreachAsset (element, onAsset) {
	for(var key in element.images) {
		if(key != "display") {
			var src = element.images[key];

			if(src) {
				var newSrc = onAsset(src);
				element.images[key] = newSrc;
			}
		}
	}

	if(element.children) {
		for(var i = 0; i < element.children.length; i++) {
			foreachAsset(element.children[i], onAsset);
		}
	}

	return;
}

function toAbsoluteURL(url) {
    var absURL = url;

    if(!url) {
        return url;
    }

    if(url.indexOf("://") < 0) {
        if(url[0] === '/') {
            absURL = location.protocol + "//" + location.host + url;
        }
        else {
            var href = location.href;
            absURL = href.substr(0, href.lastIndexOf("/")) + "/" + url;
        }
    }

    return absURL;
}

function findWindowManager (element) {
	if(element.type === "ui-window-manager") {
		return element;
	}

	if(element.children) {
		for(var i = 0; i < element.children.length; i++) {
			var wm = findWindowManager(element.children[i]);
			if(wm) {
				return wm;
			}
		}
	}

	return null;
}

function lookUpWidget(rootWidget, windowName, widgetName) {
	var win = rootWidget.findChildByName(windowName, true);
	var widget = win;

	if(!win) {
		console.log("Fatal Error: not found " + windowName);
		return null;
	}

	if(widgetName) {
		widget = win.findChildByName(widgetName, true);
		if(!widget) {
			console.log("Fatal Error: not found " + widgetName);
			return null;
		}
	}
			
	return widget;
};


