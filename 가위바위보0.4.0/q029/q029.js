/*
**************************************************************************************************************************************************
    가위바위보 게임 ver.0.1.0           가위바위보 게임 ver.0.2.0              가위바위보 게임 ver.0.3.0                              가위바위보 게임 ver.0.4.0
    가위바위보 이미지                   잘못입력했을때 문구 추가               팝업대신에 텍스트입력&버튼으로 바꿈                       가위바위보테두리를 둥그렇게 표현
    팝업으로 가위바위보 실행                                                  F5안누르고 텍스트 재입력으로 다시 가위바위보가능           결과글씨 좀더 가운데로 수정   
                                                                
                                                                 
**************************************************************************************************************************************************
*/

var player;
var com;
var InputText;

var divRpcImgUser;
var divRpcImgCom;
var effect;

// win : p   com
//       1    3
//       2    1
//       3    2
// lose: p   com
//       1    2
//       2    3
//       3    1


window.onload = function () {     //연결함수

    InputText = document.getElementById("input_text");
    divRpcImgUser = document.getElementById("rpc_user");
    divRpcImgCom = document.getElementById("rpc_com");
    effect = document.getElementById("effect_1");
}
function ButtonClick() {     //텍스트입력, 버튼, 잘못입력했을때
    while (true) {
        player = InputText.value;
        if (player == 1 || player == 2 || player == 3) {
            break;
        } else {
            alert("Game Over")
        }
    }
    //유저이미지
    switch (player) {
        case "1":
            divRpcImgUser.innerHTML = "<img class='UserImg' src='../images/Scissors.png'>"
            break;
        case "2":
            divRpcImgUser.innerHTML = "<img class='UserImg' src='../images/Rock.png'>"
            break;
        case "3":
            divRpcImgUser.innerHTML = "<img class='UserImg' src='../images/Paper.png'>"
            break;
    }
    var com = random = Math.floor(Math.random() * 3) + 1;     //컴퓨터랜덤값
    //컴퓨터이미지
    switch (com) {
        case 1:
            divRpcImgCom.innerHTML = "<img class='ComImg' src='../images/Scissors.png'>"
            break;
        case 2:
            divRpcImgCom.innerHTML = "<img class='ComImg' src='../images/Rock.png'>"
            break;
        case 3:
            divRpcImgCom.innerHTML = "<img class='ComImg' src='../images/Paper.png'>"
            break;
    }


   

    if ((player == 1 && com == 3) || (player == 2 && com == 1) || (player == 3 && com == 2)) {   //이겼을때
        effect.innerHTML= "<span class='result'>W I N !!</span>";
    } else {
        if ((player == 1 && com == 2) || (player == 2 && com == 3) || (player == 3 && com == 1)) {   //졌을때
            effect.innerHTML="<span class='result'>L O S E..</span>";
        } else {
            if (player == com) { //비겼을때 
                effect.innerHTML="<span class='result'>DROW!!</span>";
            }
        }
    }
}






