/*
*********************************************************************************************************************************************************************************
                                                                    로또ver 0.5.0
                                                                    랜덤6숫자 출력
                                                        유저가 뽑은 6숫자와 비교, 몇개당첨인지 출력
                                                            추첨숫자 6개가 중복이 안되게 수정
                                                        유저의 번호도 같이 보이게 추가, 등수출력
                                                                ☆보너스번호기능추가
*********************************************************************************************************************************************************************************                                                                    
*/
var Lotto = new Array(6);   //로또
var Player = [10, 20, 30, 40, 1, 11] //플레이어가 뽑은6숫자
var count = 0;
var bonus = 0;
dw("<div>******************</div>");
dw("로또 번호");
br();
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

while (true) {    //보너스숫자
    bonus = Math.floor(Math.random() * 45 + 1);
    if (bonus == Lotto[0]) {
        continue;
    } else {
        if (bonus == Lotto[1]) {
            continue;
        } else {
            if (bonus == Lotto[2]) {
                continue;
            } else {
                if (bonus == Lotto[3]) {
                    continue;
                } else {
                    if (bonus == Lotto[4]) {
                        continue;
                    } else {
                        if (bonus == Lotto[5]) {
                            continue;
                        } else {
                            dw("보너스숫자 : " + bonus);
                        } break;
                    }
                }
            }
        }
    }
}

for (var i = 0; i < Lotto.length; i++) {   //로또 랜덤6숫자

    for (var j = 0; j < Player.length; j++) {
        if (Lotto[i] == Player[j]) {    //유저랑 같은숫자 비교해서 체크
            count = count + 1;
        }
    }
}

dw("<div>******************</div>");
dw("유저 번호");
br();
dw(Player[0]);
br();
dw(Player[1]);
br();
dw(Player[2]);
br();
dw(Player[3]);
br();
dw(Player[4]);
br();
dw(Player[5]);
br();
dw("<div>******************</div>");
dw(count + "개 당첨");
dw("<div>******************</div>");
var rank = "";
switch (count) {
    case 3:
        rank = "☆5등입니다☆"
        break;
    case 4:
        rank = "☆4등입니다☆"
        break;
    case 5:
        rank = "☆3등입니다☆"
        for (i = 0; i < 6; i++) {
            if (Player[i] == bonus) {
                rank = "☆2등입니다☆"
            }
        }
        break;
    case 6:
        rank = "☆1등입니다☆"
        break;
}
dw(rank);
