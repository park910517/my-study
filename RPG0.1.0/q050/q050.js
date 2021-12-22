/*
*********************************************************************************************************************************************************************
                                                                                RPG ver0.1.0
                                                                            캐릭터 객체,클래스생성
                                                                            몬스터 객체,클래스생성
*********************************************************************************************************************************************************************
*/                                   
function Monster(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("몬스터 이름 : "+ name);
        br();
        dw("몬스터 체력 : " + hp);
        br();
        dw("몬스터 공격력 : " + attack);
        hr();
        hr();
    }
}


function Character(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        dw("캐릭터 이름 : "+ name);
        br();
        dw("캐릭터 체력 : " + hp);
        br();
        dw("캐릭터 공격력 : " + attack);
        hr();
    } 
}



var orc = new Monster("오크", 1000, 700);
orc.info();

var elf = new Character("엘프", 1500, 500);
elf.info();


