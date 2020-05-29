class Luna{
  constructor(){
    this.x=0;
    this.y=0;
    this.angulo=0;
    this.s=1/24;
    this.p=loadImage("luna.png");
  }
  mostrar(tierrax,tierray,tierrat){
    push();  
    translate(tierrax/7,tierray/7);
    rotate(tierra.angulo);
    scale(this.s,this.s);
    imageMode(CENTER);
    image(this.p,tierrax/7,tierray/7);
    pop();
  }
}
