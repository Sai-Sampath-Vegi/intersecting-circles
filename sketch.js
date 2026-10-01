const r = require("raylib");

const window = {
	width: 800,
	height: 600,
	title: "Intersecting Circles",
};

const FPS = 60;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.SetTraceLogLevel(r.LOG_NONE);
	r.InitWindow(window.width, window.height, window.title);
	r.SetTargetFPS(FPS);
}

const circleOne = {
	x: 300,
	y: 100,
	radius: 30,
};

const circleTwo = {
	x: 200,
	y: 350,
	radius: 50,
};

function drawCircleObject(object, color) {
	r.DrawCircleV(object, object.radius, color);
}

function drawCircles(color) {
	drawCircleObject(circleOne, color);
	drawCircleObject(circleTwo, color);
}

function getSumOfRadii() {
	return circleOne.radius + circleTwo.radius;
}

function areCirclesIntersecting() {
	return getSumOfRadii() > r.Vector2Distance(circleOne, circleTwo);
}

function getColorBasedOnIntersection(areCirclesIntersecting) {
	return areCirclesIntersecting ? r.RED : r.BLACK;
}

function update() { }

function draw() {
	r.BeginDrawing();

	r.ClearBackground(r.WHITE);

	const circlesColor = getColorBasedOnIntersection(areCirclesIntersecting());
	drawCircles(circlesColor);

	r.EndDrawing();
}

function teardown() { r.CloseWindow(); }

module.exports = {
	running,
	setup,
	update,
	draw,
	teardown,
}