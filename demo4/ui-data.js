var guiData= {
	"type": "ui-device",
	"name": "PC-Portrait",
	"w": 520,
	"h": 840,
	"x": 323,
	"y": 16,
	"text": "",
	"xAttr": 0,
	"yAttr": 0,
	"widthAttr": 0,
	"heightAttr": 0,
	"isUIDevice": true,
	"isUIElement": true,
	"hasChildren": true,
	"xParam": 1,
	"yParam": 1,
	"widthParam": 1,
	"heightParam": 1,
	"deviceConfig": "{\"name\":\"PC-Portrait\",\"bg\":\"/drawapp8/images/pc-460x740.png\",\"platform\":\"android\",\"version\":\"4\",\"lcdDensity\":\"hdpi\",\"width\":520,\"height\":840,\"screenX\":31,\"screenY\":68,\"screenW\":460,\"screenH\":740,\"hasMenuBar\":false}",
	"style": {
		"lineWidth": 2,
		"lineColor": "Green",
		"fillColor": "Black",
		"textColor": "White",
		"fontSize": 24,
		"fontFamily": "serif"
	},
	"events": {
		"onClick": "console.log(\"onClick was triggered\")"
	},
	"images": {
		"display": 2,
		"default_bg": "drawapp8/images/pc-460x740.png"
	},
	"config": {
		"name": "PC-Portrait",
		"bg": "/drawapp8/images/pc-460x740.png",
		"platform": "android",
		"version": "4",
		"lcdDensity": "hdpi",
		"width": 520,
		"height": 840,
		"screenX": 31,
		"screenY": 68,
		"screenW": 460,
		"screenH": 740,
		"hasMenuBar": false
	},
	"children": [
		{
			"type": "ui-screen",
			"name": "ui-screen",
			"w": 460,
			"h": 740,
			"x": 31,
			"y": 68,
			"text": "",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"hasStatusBar": true,
			"yStatusBar": 0,
			"hStatusBar": 40,
			"fixedX": 65,
			"fixedY": 238,
			"isUIScreen": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "white",
				"textColor": "Black",
				"fontSize": 24,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")"
			},
			"images": {
				"display": 2
			},
			"children": [
				{
					"type": "ui-window-manager",
					"name": "window-manager",
					"w": 460,
					"h": 740,
					"x": 0,
					"y": 0,
					"text": "",
					"xAttr": 0,
					"yAttr": 0,
					"widthAttr": 2,
					"heightAttr": 0,
					"current": 0,
					"showLoadingProgress": true,
					"progressBarBorderColor": "White",
					"progressBarFillColor": "Gold",
					"progressTextColor": "Green",
					"loadingTextColor": "White",
					"loadingBgColor": "Black",
					"xParam": 1,
					"yParam": 1,
					"widthParam": 1,
					"heightParam": 1,
					"isUIWindowManager": true,
					"isUIFrames": true,
					"isUIElement": true,
					"hasChildren": true,
					"showHignlight": true,
					"designWidth": 460,
					"designHeight": 740,
					"style": {
						"lineWidth": 2,
						"lineColor": "Green",
						"fillColor": "#7ecce9",
						"textColor": "Black",
						"fontSize": 24,
						"fontFamily": "serif"
					},
					"events": {
						"onClick": "console.log(\"onClick was triggered\")",
						"onChanged": null
					},
					"images": {
						"display": 2,
						"force-landscape-tips": "cantk-game/assets/images/force_landscape.png",
						"force-portrait-tips": "cantk-game/assets/images/force_portrait.png"
					},
					"children": [
						{
							"type": "ui-scene",
							"name": "win-main",
							"w": 460,
							"h": 740,
							"x": 0,
							"y": 0,
							"text": "",
							"xAttr": 0,
							"yAttr": 0,
							"widthAttr": 2,
							"heightAttr": 2,
							"animHint": "htranslate",
							"xOffset": 0,
							"yOffset": 0,
							"virtualWidth": 0,
							"virtualHeight": 0,
							"xParam": 1,
							"yParam": 1,
							"widthParam": 1,
							"heightParam": 1,
							"isUIScene": true,
							"isUINormalWindow": true,
							"isUIWindow": true,
							"isUIElement": true,
							"hasChildren": true,
							"gravityY": 10,
							"pixelsPerMeter": 100,
							"enablePhysics": true,
							"style": {
								"lineWidth": 2,
								"lineColor": "Orange",
								"fillColor": "White",
								"textColor": "Blue",
								"fontSize": 16,
								"fontFamily": "sans"
							},
							"events": {
								"onClick": null,
								"onLoad": null,
								"onUnload": null,
								"onOpen": null,
								"onBeforeOpen": null,
								"onClose": null,
								"onSwitchToBack": null,
								"onSwitchToFront": null,
								"onGesture": null,
								"onKeyDown": null,
								"onKeyUp": null,
								"onPointerDown": null,
								"onPointerMove": null,
								"onPointerUp": null,
								"onDoubleClick": null
							},
							"images": {
								"display": 2
							},
							"children": [
								{
									"type": "ui-box",
									"name": "ui-box",
									"w": 460,
									"h": 64,
									"x": 0,
									"y": 412,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 2,
									"heightAttr": 0,
									"density": 0,
									"friction": 0.5,
									"restitution": 0.5,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIBox": true,
									"isUIPhysicsShape": true,
									"isUIElement": true,
									"hasChildren": true,
									"runtimeVisible": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": null,
										"onBeginContact": null,
										"onEndContact": null,
										"onMoved": null
									},
									"images": {
										"display": 1,
										"default_bg": "cantk-game/assets/images/grass.png"
									}
								},
								{
									"type": "ui-frame-animation",
									"name": "ui-frame-animation",
									"w": 178,
									"h": 144,
									"x": 74,
									"y": 124,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"current": 0,
									"frameRate": 5,
									"startFrame": 0,
									"endFrame": 0,
									"playing": false,
									"autoPlay": true,
									"repeatTimes": 4294967295,
									"repeat": 4294967295,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIFrameAnimation": true,
									"isUIElement": true,
									"hasChildren": true,
									"value": "/cantk-game/assets/spritesheet/sample.json#image1.png\n/cantk-game/assets/spritesheet/sample.json#image2.png\n/cantk-game/assets/spritesheet/sample.json#image3.png\n/cantk-game/assets/spritesheet/sample.json#image4.png\n/cantk-game/assets/spritesheet/sample.json#image5.png",
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": "",
										"onChanged": null,
										"onOnUpdateTransform": null,
										"onBeginContact": null,
										"onEndContact": null,
										"onMoved": null,
										"onPointerDown": null,
										"onPointerMove": null,
										"onPointerUp": null,
										"onDoubleClick": null
									},
									"images": {
										"display": 0,
										"real-image": "cantk-game/assets/spritesheet/sample.png",
										"option_image_0": "cantk-game/assets/spritesheet/sample.json#image1.png",
										"option_image_1": "cantk-game/assets/spritesheet/sample.json#image2.png",
										"option_image_2": "cantk-game/assets/spritesheet/sample.json#image3.png",
										"option_image_3": "cantk-game/assets/spritesheet/sample.json#image4.png",
										"option_image_4": "cantk-game/assets/spritesheet/sample.json#image5.png"
									}
								},
								{
									"type": "ui-bitmap-font-text",
									"name": "ui-bitmap-font-text",
									"w": 244,
									"h": 71,
									"x": 122,
									"y": 285,
									"text": "1234m",
									"hMargin": 3,
									"vMargin": 3,
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"textAlignment": "center",
									"textureJsonURL": "cantk-game/assets/bitmapfonts/digits.json",
									"wMin": 50,
									"hMin": 50,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIBitmapFontText": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": null,
										"onOnUpdateTransform": null
									},
									"images": {
										"display": 3,
										"real-image": "cantk-game/assets/bitmapfonts/digits.png"
									}
								},
								{
									"type": "ui-sprite",
									"name": "ui-sprite",
									"w": 137,
									"h": 137,
									"x": 237,
									"y": 162,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUISprite": true,
									"isUIElement": true,
									"hasChildren": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "White",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": null,
										"onOnUpdateTransform": null,
										"onBeginContact": null,
										"onEndContact": null,
										"onMoved": null,
										"onPointerDown": null,
										"onPointerMove": null,
										"onPointerUp": null,
										"onDoubleClick": null
									},
									"images": {
										"display": -1,
										"default_bg": "cantk-game/assets/images/sprite.png"
									}
								},
								{
									"type": "ui-box",
									"name": "ui-box",
									"w": 34,
									"h": 370,
									"x": 9,
									"y": 62,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"density": 0,
									"friction": 0.5,
									"restitution": 0.5,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIBox": true,
									"isUIPhysicsShape": true,
									"isUIElement": true,
									"hasChildren": true,
									"runtimeVisible": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": null,
										"onBeginContact": null,
										"onEndContact": null,
										"onMoved": null
									},
									"images": {
										"display": 0
									}
								},
								{
									"type": "ui-box",
									"name": "ui-box",
									"w": 31,
									"h": 358,
									"x": 428,
									"y": 49,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"density": 0,
									"friction": 0.5,
									"restitution": 0.5,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUIBox": true,
									"isUIPhysicsShape": true,
									"isUIElement": true,
									"hasChildren": true,
									"runtimeVisible": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "Orange",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": null,
										"onBeginContact": null,
										"onEndContact": null,
										"onMoved": null
									},
									"images": {
										"display": 0
									}
								},
								{
									"type": "ui-circle",
									"name": "ui-circle",
									"w": 74,
									"h": 72,
									"x": 193,
									"y": 46,
									"text": "",
									"xAttr": 0,
									"yAttr": 0,
									"widthAttr": 0,
									"heightAttr": 0,
									"density": 1,
									"friction": 0.5,
									"restitution": 0.5,
									"xParam": 1,
									"yParam": 1,
									"widthParam": 1,
									"heightParam": 1,
									"isUICircle": true,
									"isUIPhysicsShape": true,
									"isUIElement": true,
									"hasChildren": true,
									"runtimeVisible": true,
									"style": {
										"lineWidth": 2,
										"lineColor": "rgba(0,0,0,0)",
										"fillColor": "rgba(0,0,0,0)",
										"textColor": "Blue",
										"fontSize": 16,
										"fontFamily": "sans"
									},
									"events": {
										"onClick": null,
										"onBeginContact": null,
										"onEndContact": null,
										"onMoved": null
									},
									"images": {
										"display": 4,
										"default_bg": "cantk-game/assets/images/ball.png"
									},
									"children": [
										{
											"type": "ui-mouse-joint",
											"name": "ui-mouse-joint",
											"w": 10,
											"h": 10,
											"x": 40,
											"y": 44,
											"text": "",
											"xAttr": 0,
											"yAttr": 0,
											"widthAttr": 0,
											"heightAttr": 0,
											"speedScale": 1,
											"enableTop": true,
											"enableLeft": true,
											"enableRight": true,
											"enableBottom": true,
											"isUIMouseJoint": true,
											"isUIJoint": true,
											"isUIOneJoint": true,
											"isUIElement": true,
											"hasChildren": true,
											"xParam": 1,
											"yParam": 1,
											"widthParam": 1,
											"heightParam": 1,
											"style": {
												"lineWidth": 2,
												"lineColor": "Orange",
												"fillColor": "#3eb000",
												"textColor": "Blue",
												"fontSize": 16,
												"fontFamily": "sans"
											},
											"events": {
												"onClick": null
											},
											"images": {
												"display": 0
											}
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"type": "ui-button",
			"name": "button-prev",
			"w": 115,
			"h": 54,
			"x": 31,
			"y": 9,
			"text": "前一窗口",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 65,
			"fixedY": 179,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		},
		{
			"type": "ui-button",
			"name": "button-next",
			"w": 115,
			"h": 54,
			"x": 146,
			"y": 9,
			"text": "下一窗口",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 278,
			"fixedY": 179,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		},
		{
			"type": "ui-button",
			"name": "button-direction",
			"w": 115,
			"h": 54,
			"x": 261,
			"y": 9,
			"text": "横屏",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 278,
			"fixedY": 179,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		},
		{
			"type": "ui-button",
			"name": "button-status",
			"w": 230,
			"h": 40,
			"x": 146,
			"y": -22,
			"text": "win-main(1/1)",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"fixedX": 225,
			"fixedY": 148,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Orange",
				"fontSize": 18,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2
			}
		},
		{
			"type": "ui-button",
			"name": "button-preview",
			"w": 115,
			"h": 54,
			"x": 376,
			"y": 9,
			"text": "预览",
			"vTextAlign": "middle",
			"hTextAlign": "center",
			"xAttr": 0,
			"yAttr": 0,
			"widthAttr": 0,
			"heightAttr": 0,
			"wMin": 50,
			"hMin": 50,
			"enableAutoScaleFontSize": true,
			"xParam": 1,
			"yParam": 1,
			"widthParam": 1,
			"heightParam": 1,
			"isPreview": false,
			"fixedX": 491.66666666666663,
			"fixedY": 179,
			"isUIButton": true,
			"isUIElement": true,
			"hasChildren": true,
			"style": {
				"lineWidth": 2,
				"lineColor": "Green",
				"fillColor": "",
				"textColor": "Black",
				"fontSize": 16,
				"fontFamily": "serif"
			},
			"events": {
				"onClick": "console.log(\"onClick was triggered\")",
				"onOnUpdateTransform": null
			},
			"images": {
				"display": 2,
				"focused_bg": "drawapp8/images/design_button_focused.9.png",
				"active_bg": "drawapp8/images/design_button_active.9.png",
				"normal_bg": "drawapp8/images/design_button_normal.9.png",
				"disable_bg": "drawapp8/images/design_button_normal.9.png"
			}
		}
	],
	"fileList": [
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/images/force_landscape.png",
			"fileurl": "cantk-game/assets/images/force_landscape.png"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/images/force_portrait.png",
			"fileurl": "cantk-game/assets/images/force_portrait.png"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/images/grass.png",
			"fileurl": "cantk-game/assets/images/grass.png"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/spritesheet/sample.png",
			"fileurl": "cantk-game/assets/spritesheet/sample.png"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/spritesheet/sample.json",
			"fileurl": "cantk-game/assets/spritesheet/sample.json"
		},
		{
			"weburl": "http://www.drawapp8.net//cantk-game/assets/bitmapfonts/digits.json",
			"fileurl": "cantk-game/assets/bitmapfonts/digits.json"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/bitmapfonts/digits.png",
			"fileurl": "cantk-game/assets/bitmapfonts/digits.png"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/images/sprite.png",
			"fileurl": "cantk-game/assets/images/sprite.png"
		},
		{
			"weburl": "http://www.drawapp8.net/cantk-game/assets/images/ball.png",
			"fileurl": "cantk-game/assets/images/ball.png"
		}
	]
};