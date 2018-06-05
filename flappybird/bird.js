function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 1;
  this.velocity = 0;
  this.lift = -12;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 26, 26);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y > height-14) {
        this.y = height-14;
        this.velocity = 0;
    }
    if(this.y < 14) {
      this.y = 14;
      this.velocity = this.gravity;
    }
  }

  this.up = function() {
    this.velocity = this.lift;

  }

}
