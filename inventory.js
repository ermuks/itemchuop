var nochu = new Array(25); // 추옵배열 겹침 방지
var chustring = ["STR : +", "DEX : +", "INT : +", "LUK : +", "최대 HP : +", "최대 MP : +", "최대 HP : +", "최대 MP : +", "공격력 : +", "마력 : +", "방어력 : +", "이동속도 : +", "점프력 : +", "보스 몬스터 공격 시 데미지 +", "몬스터 방어율 무시 : +", "데미지 : +", "올스탯: +", "착용 레벨 감소 : -"];
var opper = ["", "", "", "", "", "", "%", "%", "", "", "", "", "", "%", "%", "%", "%"];


var item_code = "01102941";
var itemname = "앱솔랩스 파이렛케이프";

var ucount = 0; // 강화된 횟수
var goldhm = false;
var maxupg = 7; // 최대 업그레이드 가능횟수
var elseup = 7; // 업그레이드 가능 횟수
var goldhm = false; // 황금망치 제련 적용

var jamjae = false; // 잠재가 있는가
var edjamj = false; // 에디가 있는가

var jamjul = 0;
var edijul = 0;

var item_job = [false, false, true, false, false, false]; // 0전체, 1전, 2법, 3궁, 4도, 5해
var item_job_special = "";
var reqlev = 200;
var eqptype = 0;
var basic = [35, 35, 35, 35, 0, 0, 0, 0, 6, 6, 450, 0, 0, 0, 0, 0, 0, 0, 0]; // 기본 옵션
var jak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 작된 옵션 (주문서 및 스타포스)
var chu = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 추가 옵션

var ngh = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 놀긍혼 리턴 배열

var mobile = false;

var meso = 0;

var cosumcnt = new Array(23);

function chogihwa() {
    setchu(0);
    upg(false, '잠재');
    upg(false, '에디잠');
}

for (var i = 0; i < cosumcnt.length; i++) {
    cosumcnt[i] = 0;
}

function addinfo(msg) {

}

function setmobile(b) {
    mobile = b;
}

function cosumcount(index) {
    cosumcnt[index]++;
    if (mobile) mtextrefresh();
    if (!mobile) textrefresh();
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

function textrefresh() {
    for (var i = 0; i < cosumcnt.length; i++) {
        document.getElementsByName("usecount")[i].innerText = "소모량 : " + cosumcnt[i] + "개";
    }
}

function mtextrefresh() {
    for (var i = 0; i < cosumcnt.length; i++) {
        document.getElementsByName("usecount")[i].innerText = "소모량 : " + cosumcnt[i] + "개";
    }
}

function onoff(n) {
    if (document.getElementsByName("c_list")[n].style.display == "block") {
        document.getElementsByName("c_list")[n].style.display = "none";
    } else {
        document.getElementsByName("c_list")[n].style.display = "block";
    }
}

function refresh() {

    /*basic = [15, 15, 15, 15, 0, 0, 0, 0, 2, 2, 250, 0, 0, 00, 0, 0, 0];
    chu = [45, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 5, 0];
    jak = [81, 25, 0, 0, 1090, 0, 0, 0, 1, 0, 295, 0, 0, 0, 0, 0, 0, 0];
    pot = ["STR : +6%", "STR : +3%", "LUK : +3%"];
    edipot = ["STR : +2%", "공격력 : +3", "공격력 : +3"];
    ucount = 8;
    elseup = 0;
    jamjae = true;
    edjamj = true;
    jamjul = 3;
    edijul = 3;
    potlv = 2;
    goldhm = true;*/


    if (mobile) mtextrefresh();
    if (!mobile) textrefresh();
    get_maxstf();
    for (var i = 0; i < basic.length - 1; i++) {
        if (chu[i] != 0) {
            if (jak[i] + addstat[i] != 0) {
                document.getElementsByName("ioption")[i + 2].innerHTML = "<font id=\"upop\">" + chustring[i] + (chu[i] + jak[i] + basic[i]) + opper[i] + "</font> (" + basic[i] + opper[i] + " <font id=\"addop\">+" + chu[i] + opper[i] + "</font> <font id=\"upop\">+" + (jak[i] + addstat[i]) + opper[i] + "</font>)";
            } else {
                document.getElementsByName("ioption")[i + 2].innerHTML = "<font id=\"upop\">" + chustring[i] + (chu[i] + basic[i]) + opper[i] + "</font> (" + basic[i] + opper[i] + " <font id=\"addop\">+" + chu[i] + opper[i] + "</font>)";
            }
        } else {
            if (jak[i] + addstat[i] != 0) {
                document.getElementsByName("ioption")[i + 2].innerHTML = "<font id=\"upop\">" + chustring[i] + (jak[i] + basic[i]) + opper[i] + "</font> (" + basic[i] + opper[i] + " <font id=\"upop\">+" + (jak[i] + addstat[i]) + opper[i] + "</font>)";
            } else {
                document.getElementsByName("ioption")[i + 2].innerHTML = chustring[i] + basic[i] + opper[i];
            }
        }
        if (chu[i] + basic[i] + jak[i] <= 0) {
            document.getElementsByName("ioption")[i + 2].style.display = "none";
        } else {
            document.getElementsByName("ioption")[i + 2].style.display = "block";
        }
    }
    if (chu[17] != 0) {
        document.getElementsByName("ioption")[19].innerHTML = "<font id=\"addop\">" + chustring[17] + chu[17] + "</font>";
        document.getElementsByName("ioption")[19].style.display = "block";
    } else {
        document.getElementsByName("ioption")[19].style.display = "none";
    }
    document.getElementsByName("ioption")[20].innerHTML = "업그레이드 가능 횟수 : " + elseup + " <font id=\"tooltip\">(복구 가능 횟수 : " + (maxupg - ucount - elseup) + ")";

    if (goldhm) {
        document.getElementsByName("ioption")[21].hidden = false;
    } else {
        document.getElementsByName("ioption")[21].hidden = true;
    }
    if (ucount > 0) {
        document.getElementById("itemname").innerText = itemname + "(+" + ucount + ")";
    } else {
        document.getElementById("itemname").innerText = itemname;
    }

    if (potlv != 0) {
        var potenclass = ["r", "e", "u", "l"];
        document.getElementById("itemclass").style.display = "block";
        document.getElementsByName("plevel")[0].className = potenclass[potlv - 1];
        for (var i = 0; i < jamjul; i++) {
            document.getElementsByName("uppoten")[i].innerText = pot[i];
        }

        document.getElementsByName("plevel")[1].className = potenclass[edipotlv - 1];
        for (var i = 0; i < edijul; i++) {
            document.getElementsByName("downpoten")[i].innerText = "+ " + edipot[i];
        }

        if (potlv < edipotlv) {
            document.getElementById("itemclassb").className = "p" + edipotlv;
        } else {
            document.getElementById("itemclassb").className = "p" + potlv;
        }
    } else {
        document.getElementById("itemclass").style.display = "none";
        document.getElementById("itemclassb").className = "p0";
    }

    if (jamjae) {
        if (document.getElementsByName("optionline")[0].style.display != "block") {
            document.getElementsByName("optionline")[0].style.display = "block";
        }
    } else {
        if (document.getElementsByName("optionline")[0].style.display != "none") {
            document.getElementsByName("optionline")[0].style.display = "none";
        }
    }
    if (edjamj) {
        if (document.getElementsByName("optionline")[1].style.display != "block") {
            document.getElementsByName("optionline")[1].style.display = "block";
        }
    } else {
        if (document.getElementsByName("optionline")[1].style.display != "none") {
            document.getElementsByName("optionline")[1].style.display = "none";
        }
    }


    if (jamjul == 2) {
        document.getElementsByName("uppoten")[2].style.display = "none";
    } else {
        document.getElementsByName("uppoten")[2].style.display = "block";
    }

    if (edijul == 2) {
        document.getElementsByName("downpoten")[2].style.display = "none";
    } else {
        document.getElementsByName("downpoten")[2].style.display = "block";
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

    document.getElementsByName("info")[0].innerText = "사용한 메소 : " + comma(meso);
}