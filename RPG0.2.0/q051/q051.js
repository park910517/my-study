/*
*********************************************************************************************************************************************************************
                                                                                RPG ver0.2.0
                                                                            캐릭터 객체,클래스생성
                                                                            몬스터 객체,클래스생성
                                                                    ☆전투 시작 메시지 출력,한턴의 전투처리
*********************************************************************************************************************************************************************
*/                                   
function Monster(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        hr();
        dw("몬스터 이름 : "+ this.name);
        br();
        dw("몬스터 체력 : " + this.hp);
        br();
        dw("몬스터 공격력 : " + this.attack);
        hr();
    }
}


function Character(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        dw("캐릭터 이름 : "+ this.name);
        br();
        dw("캐릭터 체력 : " + this.hp);
        br();
        dw("캐릭터 공격력 : " + this.attack);
        hr();
    } 
}

var orc = new Monster("오크", 1000, 700);
orc.info();

var elf = new Character("엘프", 1500, 500);
elf.info();
br();
hr();
dw("Fight!!")
hr();
br();
hr();
dw("엘프의 선빵!");
orc.hp -= elf.attack;
br();
dw("오크는 500데미지를 입었다.");
hr();
dw("오크의 반격!");
elf.hp -= orc.attack;
br();
dw("엘프는 700데미지를 입었다.");
hr();
br();
hr();
dw("1턴 종료")
hr();
br();
orc.info();
elf.info();





