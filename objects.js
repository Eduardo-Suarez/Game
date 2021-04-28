function Objects() {
};

Objects.prototype.spaceship = function (x, y, spaceship_image) {
	this.x = x;
	this.y = y;
	this.width = 34;
	this.height = 28;
	this.spaceship_image = spaceship_image;
	this.spaceship_image.src = "/images/fighter.png";
	return this;
};

Objects.prototype.bullet = function(x, y) {
    this.x = x;
    this.y = y;
	return this;
};

Objects.prototype.ufo = function(x, y, line, column, ufo_image) {
    this.x = x;
    this.y = y;
    this.line = line;
    this.column = column;
    this.width = 32;  
    this.height = 24;  
	this.ufo_image = ufo_image;  
	this.ufo_image.src = "/images/spaceship2.png"		 
	return this;	
};

Objects.prototype.bomb = function(x, y) {
    this.x = x;
    this.y = y;
	return this;
};
