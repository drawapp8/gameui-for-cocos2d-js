cc.game.onStart = function(){
    var designSize = cc.size(480, 800);
    var screenSize = cc.view.getFrameSize();

    if(!cc.sys.isNative && screenSize.height < 800){
        designSize = cc.size(320, 480);
        cc.loader.resPath = "res/Normal";
    }else{
        cc.loader.resPath = "res/HD";
    }

	if(screenSize.width > 1000) {
   	 	cc.loader.resPath = "res/HD";
    	designSize.height = screenSize.height;
   	 	designSize.width = designSize.height * 0.6;
    }
    cc.view.setDesignResolutionSize(designSize.width, designSize.height, cc.ResolutionPolicy.SHOW_ALL);

    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new MyScene());
    }, this);
};
cc.game.run();
