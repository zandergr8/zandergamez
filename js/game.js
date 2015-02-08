/**
 * 
 */

"use strict";

var fps,
	lastAnimationFrameTime = 0,
	lastFpsUpdateTime = 0,
	fpsElement = document.getElementById('doodlebug-fps'),
	
	background = new Image(),
	doodleBugImage = new Image();

function calculateFps( now ) {
	
	var fps = 1 / ( now - lastAnimationFrameTime ) * 1000;
	
	if ( now - lastFpsUpdateTime > 1000 ) {
		
		lastFpsUpdateTime = now;
		fpsElement.innerHTML = fps.toFixed( 0 ) + ' fps';
	}
	
	lastAnimationFrameTime = now;
	
	return fps;
};

function draw( now ) {
	
	drawBackground();
	drawDoodleBug();
};

function drawBackground() {
	
};

function drawDoodleBug() {
	
};

function animate( now ) {
	
	fps = calculateFps( now );
	draw( now );
	requestAnimationFrame( animate );
};

function startGame() {
	
	requestAnimationFrame( animate );
};

function initializeImages() {
	
	background.src = 'images/background.png';
	doodleBugImage.src = 'images/doodleBug.png';
	
	background.onload = function ( e ) {
		
		startGame();
	};
}

initializeImages();