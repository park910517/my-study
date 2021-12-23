
        var elf = new Player("엘프", 100, 40);
        var orc = new Monster("오크", 200, 20);
        var elfA;
        var orcA;
        var turn = 0;
        dw("************************************************");
        br();br();
        orc.info();
        dw("VS");
        elf.info();
        br(); br();
        dw("************************************************");
        br();

        while(true){
            if(elf.nowHp <= 0 || orc.nowHp <= 0 ){
                break;
            }battle();
        }

function battle() {
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
        dw("Fight!!")
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
    
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
        dw(elf.name + "의 선빵!");
        elfA = getRandomAttackValue(elf.attack);
        orc.nowHp -= elfA;
        br();
        dw(elf.name + "가 " + orc.name + "에게 " + elfA + "만큼 데미지를 입혔다.")
        br();
        dw("------------------------------------------------");
        br();
        dw(orc.name + "의 반격!");
        orcA = getRandomAttackValue(orc.attack);
        elf.nowHp -= orcA
        br();
        dw(orc.name + "가 " + elf.name + "에게 " + orcA + "만큼 데미지를 입혔다.")
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
        br();
        turn += 1
        dw(turn + "턴 종료")
        br();
        dw("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
    
        br();
        dw("************************************************");
        br();br();
        orc.info();
        dw("VS");
        elf.info();
        br();br();
        dw("************************************************");
        br();hr();
}
//전투 무한 루프 처리 : 전투 시 플레이어나 적의 nowHp 가 0 이하로 될 때까지(죽을때 까지) 전투 반복 처리



function getRandomAttackValue(attack) {
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로					
    var random = Math.floor(Math.random() * attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴					
    return random;
}
