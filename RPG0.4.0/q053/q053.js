/*
*********************************************************************************************************************************************************************
                                                                                RPG ver0.4.0
                                                                            캐릭터 객체,클래스생성
                                                                            몬스터 객체,클래스생성
                                                                        전투 시작 메시지 출력,한턴의 전투처리
                                                                  공격력을 0과 공격력사이의 랜덤값이 나오더록 수정
                                                                            ☆캐릭터 정보표시수정
*********************************************************************************************************************************************************************
*/                                   

function Monster(name,hp,attack){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.attack = attack;
    this.info = function(){
        dw("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")]");
    }
}

function Player(name,hp,attack){
    this.name = name;
    this.maxHp = hp;
    this.nowHp = hp;
    this.attack = attack;
    this.info = function(){
        dw("["+this.name+"(" + this.nowHp + "/" + this.maxHp + ")]");
    } 
}

dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
br();
var orc = new Monster("오크", 1000, 700);
orc.info();
dw("VS");
var elf = new Player("엘프", 1500, 500);
elf.info();
br();
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");


function getRandomAttackValue(attack){						
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
    return random;
}
var elfA = getRandomAttackValue(elf.attack);
var orcA = getRandomAttackValue(orc.attack);

br();
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
dw("Fight!!")
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
dw(elf.name+"의 선빵!");
orc.nowHp -= elfA
br();
dw(elf.name+"가 "+orc.name+"에게" + elfA+"만큼 데미지를 입혔다.")
br();
dw("------------------------------------------------");
br();
dw(orc.name+"의 반격!");
elf.nowHp -= orcA;
br();
dw(orc.name+"가 "+elf.name+"에게" + orcA+"만큼 데미지를 입혔다.")
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
br();
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
dw("턴 종료")
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
br();
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
br();
orc.info();
dw("VS");
elf.info();
br();
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
