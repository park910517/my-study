function Player(name,hp,attack,exp,money){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.exp = exp;
    this.money= money;
    this.attack = attack;
    this.info = function(){
        dw("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")(Exp : "+this.exp+"/300)]");
    } 
    this.endInfo = function(){
        dw("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")(Exp : "+this.exp+"/300)돈 : "+ this.money + "원]");
    } 
}