class Planeta{
  constructor(){
    this.x=0;
    this.y=0;
    this.trans=250;
    this.angulo=0;
    this.s=1/4;
    this.p=loadImage("sol.png");
    this.cont=0;
  }
  mostrar(slider){
  push();  
  translate(this.trans,this.trans);
  rotate(this.angulo);
  scale(this.s,this.s);
  imageMode(CENTER);
  image(this.p,this.x,this.y);
  this.angulo=this.angulo+slider;
  pop();
  }
  vuelta(varia){
    if(this.angulo>359){
      this.angulo=0;
      this.cont=this.cont+1;
      varia=this.cont;
      return varia;
    }
    if(this.angulo>=349){
       coin.play();
      }
  }
}