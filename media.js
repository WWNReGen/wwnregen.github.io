'use strict';

let Media = (function() {
	let Media = {};
	
	let loadCount = 0;
	let loadCallback = null;
	
	Media.onLoad = function(callback) {
		console.log(loadCount);
		if (loadCount == 0) {
			console.log("huh");
			callback();
		} else {
			loadCallback = callback;
		}
	}
	
	function loadImage(src) {
		
		let img = new Image();
		img.src = src;
		img.addEventListener('load', onLoad);
		
		loadCount++;
		
		console.log('loading image #', loadCount);
		
		return img;
	}
	
	function onLoad() {
		loadCount--;
		
		console.log('image loaded!', loadCount, 'left!');
		
		if (loadCount == 0) {
			processImages();
			if (loadCallback != null) {
				loadCallback();
				loadCallback = null;
			}
		}
	}
	
	// ==========================================================================
	
	console.log("beginning image loads");
	
	Media.imgTiles = loadImage('media/tiles.png');
	
	// -----
	
	function processImages() {
		let TileCutter = new GridCutter(Media.imgTiles, 4, 22, 71, 61, 34, 0);
		
		Media.imgTileNone = TileCutter.cut(3,0);
		Media.imgTileFarmland = TileCutter.cut(0,2);
		Media.imgTileArratu = TileCutter.cut(1,1);
		Media.imgTileBlasted = TileCutter.cut(0,11);
		Media.imgTileCanyons = TileCutter.cut(1,3);
		Media.imgTileDenseForest = TileCutter.cut(1,2);
		Media.imgTileGrasslands = TileCutter.cut(0,0);
		Media.imgTileWater = TileCutter.cut(1,5);
		Media.imgTileIsland = TileCutter.cut(2,0);
		Media.imgTileJaggedMountains = TileCutter.cut(0,8);
		Media.imgTileJungle = TileCutter.cut(1,7);
		Media.imgTileLightForest = TileCutter.cut(0,1);
		Media.imgTileMegaplex = TileCutter.cut(0,10);
		Media.imgTilePit = TileCutter.cut(1,0);
		Media.imgTileRainForest = TileCutter.cut(1,6);
		Media.imgTileRockyHills = TileCutter.cut(0,4);
		Media.imgTileRollingHills = TileCutter.cut(0,5);
		Media.imgTileSandDesert = TileCutter.cut(0,6);
		Media.imgTileScrubDesert = TileCutter.cut(0,7);
		Media.imgTileSwamp = TileCutter.cut(0,3);
		Media.imgTileVolcano = TileCutter.cut(1,4);
		Media.imgTileWeatheredMountains = TileCutter.cut(0,9);
		
		Media.imgTileCity = TileCutter.cut(1,8);
		Media.imgTileCapital = TileCutter.cut(1,9);
	}
	
	// ==========================================================================

	function cutImage(imgSource, x, y, w, h) {
		let imgResult = document.createElement('canvas');
		imgResult.width = w;
		imgResult.height = h;
		
		let ctx = imgResult.getContext('2d');
		ctx.drawImage(imgSource, x, y, w, h, 0, 0, w, h);
		
		return imgResult;
	}
	
	// ==========================================================================
	
	function GridCutter(imgSource, x, y, w, h, dx, dy) {
		this.imgSource = imgSource;
		
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.dx = dx;
		this.dy = dy;
	}
	
	GridCutter.prototype.cut = function(ix, iy) {
		let x = this.x + ix*(this.w+this.dx);
		let y = this.y + iy*(this.h+this.dy);
		
		return cutImage(this.imgSource, x, y, this.w, this.h);
	}
	
	// =========================================================================
	
	Media.drawColorized = function(ctx, img, color, x, y) {
		ctx.save();
			if (!img.____colorVariants) {
				img.____colorVariants = {};
				
			}
			let canvas = img.____colorVariants[color];
			if (!canvas) {
				canvas = document.createElement('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				let ctx2 = canvas.getContext('2d');
				ctx2.drawImage(img, 0, 0);
				ctx2.globalCompositeOperation = 'source-in';
				ctx2.fillStyle = color;
				ctx2.fillRect(0,0,img.width,img.height);
				
				img.____colorVariants[color] = canvas;
				if (img.____colorVariants.length > 100) {
					img.____colorVariants = null;
				}
			}
			
			ctx.drawImage(canvas, x, y);
		ctx.restore();
	}
	
	return Media;
}) ();