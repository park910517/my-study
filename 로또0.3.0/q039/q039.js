/*
*********************************************************************************************************************************************************************************
                                                                    로또ver 0.3.0
                                                                    랜덤6숫자 출력
                                                        유저가 뽑은 6숫자와 비교, 몇개당첨인지 출력
                                                            ☆추첨숫자 6개가 중복이 안되게 수정
*********************************************************************************************************************************************************************************                                                                    
*/
var Lotto = new Array(6);   //로또
var Player = [10, 20, 30, 40, 1, 11] //플레이어가 뽑은6숫자
var count = 0;


Lotto[0] = Math.floor(Math.random() * 45 + 1);
dw(Lotto[0]);   //첫번째번호
br();
while (true) {      //두번째번호
    Lotto[1] = Math.floor(Math.random() * 45 + 1);
    if (Lotto[1] == Lotto[0]) {
        continue;
    } else {
        dw(Lotto[1]);
        br();
    } break;
}

while (true) {    //세번째번호
    Lotto[2] = Math.floor(Math.random() * 45 + 1);
    if (Lotto[2] == Lotto[0]) {
        continue;
    } else {
        if (Lotto[2] == Lotto[1]) {
            continue;
        } else {
            dw(Lotto[2]);
            br();
        } break;
    }
}

while (true) {    //네번째번호
    Lotto[3] = Math.floor(Math.random() * 45 + 1);
    if (Lotto[3] == Lotto[0]) {
        continue;
    } else {
        if (Lotto[3] == Lotto[1]) {
            continue;
        } else {
            if (Lotto[3] == Lotto[2]) {
                continue;
            } else {
                dw(Lotto[3]);
                br();
            } break;
        }
    }
}

while (true) {    //다섯번째번호
    Lotto[4] = Math.floor(Math.random() * 45 + 1);
    if (Lotto[4] == Lotto[0]) {
        continue;
    } else {
        if (Lotto[4] == Lotto[1]) {
            continue;
        } else {
            if (Lotto[4] == Lotto[2]) {
                continue;
            } else {
                if (Lotto[4] == Lotto[3]) {
                    continue;
                } else {
                    dw(Lotto[4]);
                    br();
                } break;
            }
        }
    }
}

while (true) {    //여섯번째번호
    Lotto[5] = Math.floor(Math.random() * 45 + 1);
    if (Lotto[5] == Lotto[0]) {
        continue;
    } else {
        if (Lotto[5] == Lotto[1]) {
            continue;
        } else {
            if (Lotto[5] == Lotto[2]) {
                continue;
            } else {
                if (Lotto[5] == Lotto[3]) {
                    continue;
                } else {
                    if (Lotto[5] == Lotto[4]) {
                        continue;
                    } else {
                        dw(Lotto[5]);
                        br();
                    } break;
                }
            }
        }
    }
}
for (var i = 0; i < Lotto.length; i++) {   //로또 랜덤6숫자
    Lotto[i] = Math.floor(Math.random() * 45 + 1);
    for (var j = 0; j < Player.length; j++) {
        if (Lotto[i] == Player[j]) {
            count = count + 1;
        }
    }
}
dw("<div>***********</div>")
dw(count + "개 당첨");

