const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 800;
const windowHeight = 600;
const windowTitle = "Intersecting Circles";

const FPS = 60;

function running() { return !r.WindowShouldClose(); }

function setup() {
	r.InitWindow(windowWidth, windowHeight, windowTitle);
	r.SetTargetFPS(FPS);
}

const X1 = 300;
const Y1 = 100;
const R1 = 30;

const X2 = 200;
const Y2 = 350;
const R2 = 50;

function drawCircles(circlesColor) {
	r.DrawCircle(X1, Y1, R1, circlesColor);
	r.DrawCircle(X2, Y2, R2, circlesColor);
}

function getSumOfRadii() {
	return R1 + R2;
}

function areCirclesIntersecting() {
	return getSumOfRadii() > geometry.getDistance(X1, Y1, X2, Y2);
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