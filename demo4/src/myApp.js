
var MyLayer = cc.LayerColor.extend({
    helloLabel:null,
    sprite:null,

    init:function () {
        this._super();

        var size = cc.director.getWinSize();
	   
	   var bg = cc.Sprite.create(s_bg);
	   bg.setPositionX(size.width >> 1);
	   bg.setPositionY(size.height>> 1);
       this.addChild(bg);

		GameUI.init(cc, this, guiData, cc._canvas);
		loadScene("win-main");				
    }
});

var MyScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        var layer = new MyLayer();
        this.addChild(layer);
        layer.init("Red");
    }
});
