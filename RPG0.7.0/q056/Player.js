function Player(name,hp,attack,exp){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.exp = exp;
    this.attack = attack;
    this.info = function(){
        dw("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")(Exp : "+this.exp+"/300)]");
    } 
}