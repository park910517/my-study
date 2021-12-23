var elf = new Player("엘프", 1500, 500);
var orc = new Monster("오크", 1000, 700);
var elfA = getRandomAttackValue(elf.attack);
var orcA = getRandomAttackValue(orc.attack);
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
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
dw("Fight!!")
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
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
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
br();
dw("1턴 종료")
br();
dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

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

function getRandomAttackValue(attack){						
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
    return random;
}
