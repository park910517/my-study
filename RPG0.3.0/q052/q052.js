/*
*********************************************************************************************************************************************************************
                                                                                RPG ver0.3.0
                                                                            캐릭터 객체,클래스생성
                                                                            몬스터 객체,클래스생성
                                                                        전투 시작 메시지 출력,한턴의 전투처리
                                                                ☆공격력을 0과 공격력사이의 랜덤값이 나오더록 수정
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
function getRandomAttackValue(attack){						
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
    return random;
}
var elfA = getRandomAttackValue(elf.attack);
var orcA = getRandomAttackValue(orc.attack);

br();
hr();
dw("Fight!!")
hr();
br();
hr();
dw("엘프의 선빵!");
orc.hp -= elfA
br();
dw(elf.name+"가 "+orc.name+"에게" + elfA+"만큼 데미지를 입혔다.")
hr();
dw("오크의 반격!");
elf.hp -= orcA;
br();
dw(orc.name+"가 "+elf.name+"에게" + orcA+"만큼 데미지를 입혔다.")
hr();
br();
hr();
dw("1턴 종료")
hr();
br();
orc.info();
elf.info();
