
function getMoney(money) {
    x = money + orc.money;
    return x;
}

function getExp(exp) {
    y = exp + orc.exp;
    return y;
}

function turnStart(){
    cTurn++;
    console.log("현재 : " + cTurn + "턴");
    itTurn.value=cTurn;
}

function battleStart() {
    tv("-------------------------------------------------\n");
    tv("Enemy!\n");
    orc.info();
    tv("\n")
    tv("-------------------------------------------------\n");
    tv("\n");
    
}

function battle() {
    tv("-------------------------------------------------\n");
    tv("Fight!!\n")
    tv("-------------------------------------------------\n\n");
    tv("-------------------------------------------------\n");
    elfA = getRandomAttackValue(elf.attack);
    orc.nowHp -= elfA;
    
    tv(elf.name + "가 " + orc.name + "에게" + elfA + "만큼 데미지를 입혔다.\n")
    tv("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ\n");
    // dw("-------------------------------------------------\n");
    orcA = getRandomAttackValue(orc.attack);
    elf.nowHp -= orcA
    
    tv(orc.name + "가 " + elf.name + "에게" + orcA + "만큼 데미지를 입혔다.\n")
    
    tv("-------------------------------------------------\n\n");

    
    tv("-------------------------------------------------\n");
    
    turn += 1
    tv(turn + "턴 종료\n")
    
    tv("-------------------------------------------------\n\n");
    
    tv("-------------------------------------------------\n");
    tv("Enemy!\n");
    orc.info();
    tv("\n")
    tv("-------------------------------------------------\n");
    tv("\n");
}

function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
    return random;
}

window.onload = function () {
    screenMessageBox = document.getElementById("screen_Message_Box");
    screenPlayerInfo = document.getElementById("screen_Player_Info");
    screenObject = document.getElementById("screen_Object");
    itTurn = document.getElementById("turn_Text");
    battleStart();
    while (true) {
        battle();
        if (elf.nowHp <= 0 || orc.nowHp <= 0) {
            break;
        }
    }

    if (orc.nowHp <= 0 && elf.nowHp > 0) {
        tv("-------------------------------------------------\n");
        tv("The End\n");
        tv("☆" + orc.exp + "경험치 획득☆\n");
        getExpValue = getExp(elf.exp);
        elf.exp = getExpValue;
        tv("☆" + orc.money + "원 획득☆\n");
        tv("-------------------------------------------------\n");
        getMoneyValue = getMoney(elf.money);
        elf.money = getMoneyValue;
    } else {
        tv("Game Over\n");
    }
   
    elf.endInfo();
    tv("\n\n");
}

var elf = new Player("엘프", 100, 40, 0, 0);
var orc = new Monster("오크", 200, 20, 100, 500);
var elfA;
var orcA;
var getExpValue;
var getMoneyValue;
var turn = 0;
var cTurn = 0;
var screenMessageBox;
var screenPlayerInfo;
var screenObject;
var itTurn;


// 턴 진행 버튼 추가			
// 테스트로 턴 진행 버튼에 console.log 적용 ( ex. console.log("로그찍기"); )			
// 턴 진행 버튼 왼쪽에 턴수 표시 input text 추가