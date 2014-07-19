cc.game.onStart = function(){
    var designSize = cc.size(480, 800);
    var screenSize = cc.view.getFrameSize();

   	cc.loader.resPath = "";
	if(screenSize.width > 1000) {
    	designSize.height = screenSize.height;
   	 	designSize.width = designSize.height * 0.6;
    }
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL);

    //load resources
    var images = GameUI.preloadAssetsInUIData(guiData);

	g_resources.concat(images);
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.run();
