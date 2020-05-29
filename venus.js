class Venus extends Planeta{
  constructor(){
    super();
    this.x=2400;
    this.y=2400;
    this.trans=250;
    this.angulo=120;
    this.s=1/24;
    this.p=loadImage("venus.png");
    this.cont=0;
  }
}
