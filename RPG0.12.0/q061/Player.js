function Player(name,hp,attack,exp,money){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.exp = exp;
    this.money= money;
    this.attack = attack;
    this.info = function(){
        tvPlayerInfo("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")(Exp : "+this.exp+"/300)]");
    } 
    this.endInfo = function(){
        tvPlayerInfo("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")(Exp : "+this.exp+"/300)돈 : "+ this.money + "원]\n");
    } 
}