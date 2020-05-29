class Tierra extends Planeta{
  constructor(){
    super();
    this.x=2500;
    this.y=2500;
    this.trans=250;
    this.angulo=180;
    this.s=1/22;
    this.p=loadImage("tierra.png");
    this.cont=0;
  }
}
