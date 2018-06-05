var bird;
var pipes = [];
var score = 0;

function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	background(0);
	bird.update();
	bird.show();

	if (frameCount % 70 == 0) {
		pipes.push(new Pipe());
		score++;
	}


	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].offScreen()) {
			pipes.splice(i,1);

		}

		if (pipes[i].hits(bird)) {
			console.log('HIT');
			abort();
		}
	}

}

function keyPressed() {
	if(key == ' ') {
			bird.up();
	}
}
