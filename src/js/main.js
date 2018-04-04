$(function() {
	initPixi();
});

var wid = window.innerWidth;
var hei = window.innerHeight;

var app, stage, container;
var pixiControl;

function initPixi() {
	app = new PIXI.CanvasRenderer(640, 640 / (wid / hei), {
		backgroundColor: 0x000000,
		forceCanvas: true,
		transparent: true
	});
	document.getElementById('pixiStage').appendChild(app.view);

	stage = new PIXI.Container();

	container = new PIXI.Container();

	stage.addChild(container);

	var bg = new PIXI.Graphics();
	bg.beginFill(0xe37372, 1);
	bg.drawRect(0, 0, app.view.width, app.view.height);
	container.addChild(bg);

	loadingIn(); //正经加载进
	//zhuanIn();

	animate();
}

var loading;

function loadingIn() {
	var loading_file = [];
	loading_file.push('images/0.jpg');
	loading_file.push('images/1.jpg');
	loading_file.push('images/2.jpg');
	loading_file.push('images/3.jpg');
	loading_file.push('images/4.jpg');
	loading_file.push('images/5.jpg');

	var loadingArr = [loading_file];
	loading = new Loading(null, {
		loadFileArr: loadingArr,
		progress: progress,
		complete: complete,
		easing: 1
	});
	loading.start();
}

function progress(__pro) {
	console.log(__pro);
}

function complete() {
	console.log('加载完成');
	loading = null;

	zhuanIn();
}

var centerX = 0;
var centerY = 0;

var radiusX = 200; //转的x轴半径
var radiusY = 100; //转的y轴半径

var scaleRange = [0.8, 0.3]; //前后深度的范围，最小0.8，最大0.8+0.3
var angleArr = [0, 120, 240]; //初始时各个对象的位置

var eggRSpeed = 1; //转动的速度

var eggArr = [];
var eggBox;

function zhuanIn() {
	eggBox = new PIXI.Container();
	container.addChild(eggBox);

	centerX = app.view.width / 2;
	centerY = app.view.height / 2;

	for(var i = 0; i < angleArr.length; i++) {
		var egg = PIXI.Sprite.fromImage('images/egg.png');
		egg.anchor.set(0.5);
		eggBox.addChild(egg);
		egg.angle = angleArr[i];
		egg.x = centerX + Math.cos(egg.angle * Math.PI / 180) * radiusX;
		egg.y = centerY + Math.sin(egg.angle * Math.PI / 180) * radiusY;
		egg.scale.x = egg.scale.y = scaleRange[0] + Math.sin(egg.angle * Math.PI / 180) * scaleRange[1];
		eggArr.push(egg);
	}

	sortIndex();
}

function sortIndex() {
	eggArr = eggArr.sort(sortNumber);
	for(var i = 0; i < eggArr.length; i++) {
		eggBox.setChildIndex(eggArr[i], i);
	}
}

function sortNumber(a, b) {
	return a.y - b.y;
}

//渲染
function animate() {
	requestAnimationFrame(animate);
	pixiUpdate();
	app.render(stage);
}

function pixiUpdate() {
	if(loading) {
		loading.update();
	}
	eggUpdate();
}

function eggUpdate() {
	for(var i = 0; i < eggArr.length; i++) {
		var egg = eggArr[i];
		egg.angle += eggRSpeed;
		egg.x = centerX + Math.cos(egg.angle * Math.PI / 180) * radiusX;
		egg.y = centerY + Math.sin(egg.angle * Math.PI / 180) * radiusY;
		egg.scale.x = egg.scale.y = scaleRange[0] + Math.sin(egg.angle * Math.PI / 180) * scaleRange[1];
	}

	sortIndex();
}