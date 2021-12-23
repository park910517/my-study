function Monster(name,hp,attack){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.attack = attack;
    this.info = function(){
        dw("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")]");
    }
}