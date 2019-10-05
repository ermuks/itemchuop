
var reqlev = 200;
var eqptype = 0;

var nochu = new Array(20); // 추옵배열 겹침 방지
var chustring = ["STR", "DEX", "INT", "LUK", "최대HP", "최대MP", "최대HP", "최대MP", "공격력", "마력", "방어력", "이동속도", "점프력", "보스 몬스터 공격 시 데미지", "몬스터 방어율 무시", "데미지", "올스탯", "착용 레벨 제한 감소"];
var opper = ["", "", "", "", "", "", "%", "%", "", "", "", "", "", "%", "%", "%", "%"];
var basic = [15, 15, 15, 15, 0, 0, 0, 0, 2, 2, 250, 0, 0, 0, 0, 0, 0, 0]; // 기본 옵션
var jak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 작된 옵션 (주문서 및 스타포스)
var chu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 추가 옵션

var ngh = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 놀긍혼 리턴 배열

var ucount = 0; // 강화된 횟수
var goldhm = false;
var maxupg = 7; // 최대 업그레이드 가능횟수
var elseup = 7; // 업그레이드 가능 횟수
var goldhm = false; // 황금망치 제련 적용
var maxstr = 25; // 최대 스타포스
var strfrc = 0; // 현재 스타포스

var itemname = "아케인셰이드 메이지 케이프";

var cosumcnt = new Array(23);
for (var i = 0; i < cosumcnt.length; i++) {
    cosumcnt[i] = 0;
}

function cosumcount(index) {
    cosumcnt[index]++;
    textrefresh();
}

function textrefresh() {
    for (var i = 0; i < cosumcnt.length; i++) {
        document.getElementsByName("usecount")[i].innerText = "사용 한 갯수 : " + cosumcnt[i] + "개";
    }
}

var isngh = false;
function cash(code) {
    switch (code) {
        case "리턴":
            for (var i = 0; i < ngh.length; i++) {
                jak[i] -= ngh[i];
            }

            if (isngh) {
                elseup++;
                ucount--;
                isngh = false;
            }

            for (var i = 0; i < ngh.length; i++) {
                ngh[i] = 0;
            }
            break;
        default:
            alert('잘못된 접근 코드 : ' + code);
    }
    refresh();
}

function upg(lv, itemtype, mns, code, price) {
    for (var i = 0; i < ngh.length; i++) {
        ngh[i] = 0;
    }
    if (mns == true) {
        if (elseup <= 0) {
            elseup = 0;
            return false;
        }
    }
    switch (code) {
        case "주흔70":
            elseup--;
            if (Math.random() * 100 < 70) {
                jak[2] += 4;
                ucount++;
            }
            break;
        case "주흔30":
            elseup--;
            if (Math.random() * 100 < 30) {
                jak[2] += 7;
                ucount++;
            }
            break;
        case "주흔15":
            elseup--;
            if (Math.random() * 100 < 15) {
                jak[2] += 15;
                ucount++;
            }
            break;
        case "놀긍혼":
            elseup--;
            isngh = true;
            if (Math.random() * 100 < 60) {
                ucount++;
                for (var b = 0; b < 13; b++) {
                    if (basic[b] + chu[b] + jak[b] > 0) {
                        var ranper = [25, 30, 20, 15, 5, 0, 5];
                        var t = Math.random() * 100;
                        var tp = 0;
                        for (var i = 0; i < ranper.length; i++) {
                            tp += ranper[i];
                            if (tp > t) {
                                if (b == 4 || b == 5) {
                                    jak[b] += i * 5;
                                } else {
                                    if (b == 6 || b == 7) {
                                        jak[b] += 0;
                                    } else {
                                        jak[b] += i;
                                    }
                                }
                                ngh[b] = i;
                                break;
                            }
                        }
                    }
                }
            }
            break;
        case "순백":
            if (elseup + ucount < maxupg) {
                if (Math.random() * 100 < 10) {
                    elseup++;
                }
            }
            break;
        case "황망":
            if (!goldhm) {
                maxupg++;
                goldhm = true;
                if (Math.random() * 100 < 50) {
                    elseup++;
                }
            }
            break;
        case "이노":
            if (Math.random() * 100 < 50) {
                if (goldhm) maxupg--;
                goldhm = false;
                elseup = maxupg;
                ucount = 0;
                for (var i = 0; i < jak.length; i++) {
                    jak[i] = 0;
                }
            }
            break;
        case "에잠":
            if (potlv < 2) {
                if (Math.random() * 100 < 50) {
                    potlv = 2;
                    cube("수큐");
                }
            }
            break;
        case "유잠":
            if (potlv < 3) {
                if (Math.random() * 100 < 30) {
                    potlv = 3;
                    cube("레큐");
                }
            }
            break;
        case "에디에잠":
            if (edipotlv < 2) {
                if (Math.random() * 100 < 30) {
                    edipotlv = 2;
                    cube("에큐");
                }
            }
            break;
        default:
            alert("잘못 표기되었습니다. code : " + code);
            break;
    }
    refresh();
}

function setchu(icls) {
    for (var i = 0; i < chu.length; i++) {
        chu[i] = 0;
    }
    for (var i = 0; i < chu.length; i++) {
        nochu[i] = false;
    }
    var danchu = 0; // 받아온 아이템 베이스 추옵 (단일추옵)
    var yeechu = 0; // 받아온 아이템 이중추옵
    // itemtype = 장비 종류
    // icls = 환생의 불꽃 종류
    // -------------------------
    // 아이템 타입
    // 0 : 방어구
    // 1 : 무기
    // -------------------------
    // 환불 종류
    // 0 : 영환불    (1~4 추옵) ( 12.5 20 30 37.5 )
    // 1 : 강환불    (2~5 추옵) ( 12.5 20 30 37.5 )
    // 2 : 일반 환불 (2~5 추옵) ( 5 15 35 45 )
    danchu = parseInt(reqlev / 20) + 1;
    yeechu = parseInt(reqlev / 40) + 1;
    for (var i = 0; i < 4; i++) {
        if (Math.random() * 100 < 10) continue;
        var t = Math.floor(Math.random() * 1000);
        var clv = 0; // 추옵 단계
        if (icls == 0) {
            if (t < 125) clv = 7
            else if (t < 325) clv = 6
            else if (t < 625) clv = 5
            else if (t < 1000) clv = 4
        } else if (icls == 1) {
            if (t < 125) clv = 6
            else if (t < 325) clv = 5
            else if (t < 625) clv = 4
            else if (t < 1000) clv = 3
        } else if (icls == 2) {
            if (t < 50) clv = 6
            else if (t < 200) clv = 5
            else if (t < 550) clv = 4
            else if (t < 1000) clv = 3
        }
        t = Math.floor(Math.random() * 1000);
        if (eqptype == 0) {
            if (t < 50 && !nochu[0]) {
                chu[0] += danchu * clv;
                nochu[0] = true;
            } else if (t < 100 && !nochu[1]) {
                chu[1] += danchu * clv;
                nochu[1] = true;
            } else if (t < 150 && !nochu[2]) {
                chu[2] += danchu * clv;
                nochu[2] = true;
            } else if (t < 200 && !nochu[3]) {
                chu[3] += danchu * clv;
                nochu[3] = true;
            } else if (t < 250 && !nochu[4]) {
                chu[0] += yeechu * clv;
                chu[1] += yeechu * clv;
                nochu[4] = true;
            } else if (t < 300 && !nochu[5]) {
                chu[0] += yeechu * clv;
                chu[2] += yeechu * clv;
                nochu[5] = true;
            } else if (t < 350 && !nochu[6]) {
                chu[0] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[6] = true;
            } else if (t < 400 && !nochu[7]) {
                chu[1] += yeechu * clv;
                chu[2] += yeechu * clv;
                nochu[7] = true;
            } else if (t < 450 && !nochu[8]) {
                chu[1] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[8] = true;
            } else if (t < 500 && !nochu[9]) {
                chu[2] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[9] = true;
            } else if (t < 560 && !nochu[10]) {
                chu[4] += reqlev * 3 * clv;
                nochu[10] = true;
            } else if (t < 620 && !nochu[11]) {
                chu[5] += reqlev * 3 * clv;
                nochu[11] = true;
            } else if (t < 680 && !nochu[12]) {
                chu[8] += clv;
                nochu[12] = true;
            } else if (t < 730 && !nochu[13]) {
                chu[9] += clv;
                nochu[13] = true;
            } else if (t < 790 && !nochu[14]) {
                chu[10] += danchu * clv;
                nochu[14] = true;
            } else if (t < 870 && !nochu[15]) {
                chu[11] += clv;
                nochu[15] = true;
            } else if (t < 950 && !nochu[16]) {
                chu[12] += clv;
                nochu[16] = true;
            } else if (t < 1000 && !nochu[17]) {
                chu[16] += clv;
                nochu[17] = true;
            }
        } else if (eqptype == 1) {
            if (t < 50 && !nochu[0]) {
                chu[0] += danchu * clv;
                nochu[0] = true;
            } else if (t < 100 && !nochu[1]) {
                chu[1] += danchu * clv;
                nochu[1] = true;
            } else if (t < 150 && !nochu[2]) {
                chu[2] += danchu * clv;
                nochu[2] = true;
            } else if (t < 200 && !nochu[3]) {
                chu[3] += danchu * clv;
                nochu[3] = true;
            } else if (t < 250 && !nochu[4]) {
                chu[0] += yeechu * clv;
                chu[1] += yeechu * clv;
                nochu[4] = true;
            } else if (t < 300 && !nochu[5]) {
                chu[0] += yeechu * clv;
                chu[2] += yeechu * clv;
                nochu[5] = true;
            } else if (t < 350 && !nochu[6]) {
                chu[0] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[6] = true;
            } else if (t < 400 && !nochu[7]) {
                chu[1] += yeechu * clv;
                chu[2] += yeechu * clv;
                nochu[7] = true;
            } else if (t < 450 && !nochu[8]) {
                chu[1] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[8] = true;
            } else if (t < 500 && !nochu[9]) {
                chu[2] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[9] = true;
            } else if (t < 550 && !nochu[10]) {
                chu[4] += reqlev * 3 * clv;
                nochu[10] = true;
            } else if (t < 600 && !nochu[11]) {
                chu[5] += reqlev * 3 * clv;
                nochu[11] = true;
            } else if (t < 645 && !nochu[12]) {
                chu[8] += clv;
                nochu[12] = true;
            } else if (t < 690 && !nochu[13]) {
                chu[9] += clv;
                nochu[13] = true;
            } else if (t < 740 && !nochu[14]) {
                chu[10] += danchu * clv;
                nochu[14] = true;
            } else if (t < 790 && !nochu[15]) {
                chu[11] += clv;
                nochu[15] = true;
            } else if (t < 850 && !nochu[16]) {
                chu[12] += clv;
                nochu[16] = true;
            } else if (t < 910 && !nochu[17]) {
                chu[16] += clv;
                nochu[17] = true;
            } else if (t < 955 && !nochu[18]) {
                chu[13] += clv * 2;
                nochu[18] = true;
            } else if (t < 1000 && !nochu[19]) {
                chu[15] += clv;
                nochu[19] = true;
            }
        }
    }
    refresh();
}

function get_maxstf() {
    if (reqlev < 98) {
        maxstf = 5;
    } else if (reqlev < 108) {
        maxstf = 8;
    } else if (reqlev < 118) {
        maxstf = 10;
    } else if (reqlev < 128) {
        maxstf = 15;
    } else if (reqlev < 138) {
        maxstf = 20;
    } else {
        maxstf = 25;
    }
}

function refresh() {
    get_maxstf();
    for (var i = 0; i < 17; i++) {
        if (chu[i] != 0) {
            if (jak[i] != 0) {
                document.getElementsByName("ioption")[i + 2].innerHTML = "<font id=\"upop\">" + chustring[i] + " : +" + (chu[i] + jak[i] + basic[i]) + opper[i] + "</font> (" + basic[i] + " <font id=\"addop\">+" + chu[i] + opper[i] + "</font> <font id=\"upop\">+" + jak[i] + "</font>)";
            } else {
                document.getElementsByName("ioption")[i + 2].innerHTML = "<font id=\"upop\">" + chustring[i] + " : +" + (chu[i] + basic[i]) + opper[i] + "</font> (" + basic[i] + " <font id=\"addop\">+" + chu[i] + opper[i] + "</font>)";
            }
        } else {
            if (jak[i] != 0) {
                document.getElementsByName("ioption")[i + 2].innerHTML = "<font id=\"upop\">" + chustring[i] + " : +" + (jak[i] + basic[i]) + opper[i] + "</font> (" + basic[i] + " <font id=\"upop\">+" + jak[i] + opper[i] + "</font>)";
            } else {
                document.getElementsByName("ioption")[i + 2].innerHTML = chustring[i] + " : +" + basic[i] + opper[i];
            }
        }
        if (chu[i] + basic[i] + jak[i] <= 0) {
            document.getElementsByName("ioption")[i + 2].style.display = "none";
        } else {
            document.getElementsByName("ioption")[i + 2].style.display = "block";
        }
    }
    document.getElementsByName("ioption")[20].innerText = "업그레이드 가능 횟수 : " + elseup;

    if (goldhm) {
        document.getElementsByName("ioption")[22].hidden = false;
    } else {
        document.getElementsByName("ioption")[22].hidden = true;
    }
    if (ucount > 0) {
        document.getElementById("itemname").innerText = itemname + "(+" + ucount + ")";
    } else {
        document.getElementById("itemname").innerText = itemname;
    }

    var potenclass = ["r", "e", "u", "l"];
    document.getElementsByName("plevel")[0].className = potenclass[potlv - 1];
    for (var i = 0; i < 3; i++) {
        document.getElementsByName("uppoten")[i].innerText = pot[i];
    }

    document.getElementsByName("plevel")[1].className = potenclass[edipotlv - 1];
    for (var i = 0; i < 3; i++) {
        document.getElementsByName("downpoten")[i].innerText = "+ " + edipot[i];
    }
    document.getElementById("itemclass").innerText = "(" + potenstring[potlv - 1] + " 아이템)";

    for (var i = 0; i < maxstf; i++) {
        if (i < star_cnt) {
            if (document.getElementsByName("stf")[i].id != "stary") {
                document.getElementsByName("stf")[i].id = "stary";
            }
        } else {
            if (document.getElementsByName("stf")[i].id != "star") {
                document.getElementsByName("stf")[i].id = "star";
            }
        }
    }

    document.getElementsByName("info")[0].innerText = "사용한 메소 : " +  comma(meso) ;
}

function comma(num) {
    var len, point, str;

    num = num + "";
    point = num.length % 3;
    len = num.length;

    str = num.substring(0, point);
    while (point < len) {
        if (str != "") str += ",";
        str += num.substring(point, point + 3);
        point += 3;
    }

    return str;

}


출처: https://fruitdev.tistory.com/160 [과일가게 개발자]

function nodata() {
    // 0  STR
    // 1  DEX
    // 2  INT
    // 3  LUK
    // 4  최대HP
    // 5  최대MP
    // 6  최대HP%
    // 7  최대MP%
    // 8  공격력
    // 9  마력
    // 10 방어력
    // 11 이동속도
    // 12 점프력
    // 13 보공
    // 14 방무
    // 15 데미지
    // 16 올스탯

    // 방어구 추옵 종류
    // 0 STR        5%  5
    // 1 DEX        5%  10
    // 2 INT        5%  15
    // 3 LUK        5%  20
    // 4 STR DEX    5%  25
    // 5 STR INT    5%  30
    // 6 STR LUK    5%  35
    // 7 DEX INT    5%  40
    // 8 DEX LUK    5%  45
    // 9 INT LUK    5%  50
    // 10 최대HP    6%  56
    // 11 최대MP    6%  62
    // 12 공격력     5%  68
    // 13 마력       5%  73
    // 14 방어력     6%  79
    // 15 이동속도   8%  87
    // 16 점프력     8%  95
    // 17 올스탯     5%  100

    // 무기 추옵 종류
    // 0 STR
    // 1 DEX
    // 2 INT
    // 3 LUK
    // 4 STR DEX
    // 5 STR INT
    // 6 STR LUK
    // 7 DEX INT
    // 8 DEX LUK
    // 9 INT LUK
    // 10 최대HP
    // 11 최대MP
    // 12 공격력
    // 13 마력
    // 14 방어력
    // 15 이동속도
    // 16 점프력
    // 17 보공
    // 18 데미지
    // 19 올스탯
}