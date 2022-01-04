function Monster(name,hp,attack,exp,money){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.exp = exp;
    this.money= money
    this.attack = attack;
    this.info = function(){
        tv("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")]");
    }
}