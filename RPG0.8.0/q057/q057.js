
function getMoney(money){
    x = money + orc.money;
    return x;
}

function getExp(exp){
   y = exp + orc.exp;
    return y;
}

function battle() {
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
        dw("Fight!!")
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
    
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        elfA = getRandomAttackValue(elf.attack);
        orc.nowHp -= elfA;
        br();
        dw(elf.name + "가 " + orc.name + "에게" + elfA + "만큼 데미지를 입혔다.")
        br();
        dw("---------------------------------------------------");
        orcA = getRandomAttackValue(orc.attack);
        elf.nowHp -= orcA
        br();
        dw(orc.name + "가 " + elf.name + "에게" + orcA + "만큼 데미지를 입혔다.")
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
        turn += 1
        dw(turn + "턴 종료")
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
        dw("*************************************************");
        br();
        br();
        orc.info();
        dw("VS");
        elf.info();
        br();
        br();
        dw("*************************************************");
        hr();
}

function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
    return random;
}

        var elf = new Player("엘프", 100, 40, 0, 0);
        var orc = new Monster("오크", 200, 20, 100, 500);
        var elfA;
        var orcA;
        var getExpValue;
        var getMoneyValue;
        var turn = 0;
        dw("*************************************************");
        br();
        br();
        orc.info();
        dw("VS");
        elf.info();
        br();
        br();
        dw("*************************************************");
        br();
//전투 무한 루프 처리 : 전투 시 플레이어나 적의 nowHp 가 0 이하로 될 때까지(죽을때 까지) 전투 반복 처리
        while(true){
            battle();
            if(elf.nowHp <= 0 || orc.nowHp <= 0 ){
                break;
            }
        }
        
        if(orc.nowHp <= 0 && elf.nowHp > 0){
            dw("The End"); br();
            dw("☆"+orc.exp+"경험치 획득☆");br();
            getExpValue = getExp(elf.exp);
            elf.exp = getExpValue;
            dw("☆"+orc.money+"원 획득☆");
            getMoneyValue = getMoney(elf.money);
            elf.money = getMoneyValue;
        }else{
            dw("Game Over");
        }
        br();
        dw("*************************************************");
        br();
        elf.endInfo();
        br();
        dw("*************************************************");
        hr();

        		
        //보상 추가. 몬스터 사냥 시 돈도 획득하도록 변경되었습니다.				