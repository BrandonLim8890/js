function Pipe() {
  this.top = random(height - 100);
  this.bottom = height -this.top - 150;
  this.x = width;
  this.w = 20;
  this.speed = 3;

  this.hightlight = false;

  this.hits = function(bird) {
    if (bird.y - 13 < this.top || bird.y + 13 > height-this.bottom){
      if(bird.x + 13 > this.x && bird.x - 13< this.x + this.w) {
        this.hightlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;

  }

  this.show = function() {
    fill(255);
    if(this.hightlight == true) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offScreen = function() {
    return this.x < - this.w;
  }


}
