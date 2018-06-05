function Apple() {

  this.x = floor(random(width - scl));
  this.y = floor(random(height - scl));

  this.piclocation = function() {

    this.x = floor(random(width - scl));
    this.y = floor(random(height - scl));
  }

  this.show = function() {
    fill(100, 0, 255);
    rect(this.x, this.y, scl, scl)
  }



}
