//가위바위보	영어로	Rock Paper Scissors	

var player = prompt("가위(1)! 바위(2)! 보(3)!")
var com = random=Math.floor(Math.random()*3)+1;


if( player == 1 ){
    dw("<img class='player' src='../images/가위.png'>")
}else{
    if( player == 2 ){
        dw("<img class='player' src='../images/바위.png'>")
    }else{
        if( player == 3 ){
        dw("<img class='player' src='../images/보.png'>")
        }
    }
}

//컴퓨터 이미지
if( com == 1 ){
    dw("<img class='computer' src='../images/가위.png'>")
}else{
    if( com == 2 ){
        dw("<img class='computer' src='../images/바위.png'>")
    }else{
        dw("<img class='computer' src='../images/보.png'>")
    }
}
// win : p   com
//       1    3
//       2    1
//       3    2
// lose: p   com
//       1    2
//       2    3
//       3    1


if( ( player == 1 && com == 3 ) || ( player == 2 && com == 1) || (player == 3 && com == 2) ){
    dw("<span class='result'>WIN!!</span>")
    }else{
        if( ( player == 1 && com == 2) || ( player == 2 && com == 3) || ( player == 3 && com == 1) ){
            dw("<span class='result'>LOSE..</span>")
            }else{
                dw("<span class='result'>DROW!!</span>")
        }
}
