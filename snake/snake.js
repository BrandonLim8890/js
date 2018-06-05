function Snake() {

  this.speed = 1 * scl ;
  this.xspeed = this.speed;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.x = width / 2;
  this.y = height / 2;


    this.move = function(k) {
      if (k == 'A') {
        this.yspeed = 0;
        this.xspeed = -this.speed;
      }
      if (k == 'D') {
        this.xspeed = this.speed;
        this.yspeed = 0;
      }
      if (k == 'S') {
        this.xspeed = 0;
        this.yspeed = this.speed;
      }
      if (k == 'W') {
        this.xspeed = 0;
        this.yspeed = -this.speed;
      }

    }


    this.eat = function(apple) {
      var d = dist(this.x, this.y, apple.x, apple.y);
      if(d < 15){
        this.total++;
        console.log(this.total);
        return true;
      }else{
        return false;
      }
    }

    this.death = function() {

        for (var i = 1; i < this.tail.length; i++) {
          var pos = this.tail[i];
          if (this.x == pos.x && this.y == pos.y) {
            this.tail = [];
            this.total=0;
            console.log('dead');
          }
        }
      }


  this.show = function() {
    fill(255);
    rect(this.x, this.y, scl, scl);
    for(var i = 0; i < this.tail.length; i++) {
       rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
  }

  this.update = function() {

    this.x += this.xspeed;
    this.y += this.yspeed;

    for(var i = 0; i < this.tail.length-1; i++) {
       this.tail[i] = this.tail[i+1];
    }

    this.tail[this.total] = createVector(this.x,this.y);


    if(this.x < 0) {
      this.x = 800;
    }
    if(this.x > 800) {
      this.x = 0;
    }
    if(this.y < 0) {
      this.y = 600;
    }
    if(this.y > 600) {
      this.y = 0;
    }

  }
}
