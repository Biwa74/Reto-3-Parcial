class Mercurio extends Planeta{
  constructor(){
    super();
    this.x=2000;
    this.y=2000;
    this.trans=250;
    this.angulo=75;
    this.s=1/32;
    this.p=loadImage("mercurio.png");
    this.cont=0;
  }
}
