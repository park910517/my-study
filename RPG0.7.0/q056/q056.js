
        
function getExp(exp){
   x = exp + orc.exp;
    return x;
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

var elf = new Player("엘프", 100, 40, 0);
        var orc = new Monster("오크", 200, 20, 100);
        var elfA;
        var orcA;
        var getExpValue;
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
            dw("The End ☆"+orc.exp+"경험치 획득☆");
            getExpValue = getExp(elf.exp);
            elf.exp = getExpValue;
        }else{
            dw("The End ☆0 경험치 획득☆");
        }
        br();
        dw("*************************************************");
        br();
        elf.info();
        br();
        dw("*************************************************");
        hr();

//플레이어 간략 정보 표시에 현재 경험치/다음 레벨업 필요 경험치 표시 추가 ex. [엠피스(70/100)](exp: 100/300)			
//(레벨업 경험치 기획은 현재 미정. 300값 하드코딩.)			
//전투 종료 처리(종료메세지 출력, 경험치 획득)
//전투 종료 후 얻은 경험치가 표시에 반영 되도록 케릭터 간략 정보 출력 처리 함수 위치 수정						
//적 전투력 높혀서 플레이어도 잘 죽는지 확인		