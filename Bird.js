class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //console.log(this.trajectory[0])
    if(this.body.speed>10&&this.body.position.x>250){
      var pos = [this.body.position.x,this.body.position.y]
    this.trajectory.push(pos);
    }
    for(var i=0;i<this.trajectory.length;i++){
      
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
    }
    super.display();
  }
}
