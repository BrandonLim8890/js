var snake;
var apple;
var scl = 20;

function setup() {
		createCanvas(800, 600);
		snake = new Snake();
		frameRate(10);
		apple = new Apple();
}

function draw() {
	background(0);
	snake.update();
	snake.show();
	apple.show();
	snake.death();
	if (snake.eat(apple)) {
		apple.piclocation();
	}
}

function keyPressed() {
	snake.move(key);
}
