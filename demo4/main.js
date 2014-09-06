cc.game.onStart = function(){
    var designSize = cc.size(480, 800);
    var screenSize = cc.view.getFrameSize();

   	cc.loader.resPath = "";
	if(cc.sys.isMobile) {
    	designSize.width = screenSize.width;
    	designSize.height = screenSize.height;
    }
    else {
    	designSize.height = screenSize.height;
   	 	designSize.width = designSize.height * 0.6;
    }
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL);

    //load resources
    var images = GameUI.preloadAssetsInUIData(guiData);

	for(var i = 0; i < images.length; i++) {
		g_resources.push(images[i]);
	}

    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.run();
