
var poten_STR = [
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12]
];
var poten_DEX = [
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12]
];
var poten_INT = [
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12]
];
var poten_LUK = [
    [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    [2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12]
];
var potenlist_cape = [
    ["STR : +#v" , "DEX : +#v" , "INT : +#v" , "LUK : +#v" , "최대HP : +#v" , "최대MP : +#v" , "방어력 : +#v"],
    ["STR : +#v" , "DEX : +#v" , "INT : +#v" , "LUK : +#v" , "최대HP : +#v" , "최대MP : +#v" , "방어력 : +#v" , "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v"],
    ["STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "방어력 : +#v%", "올스탯 : +#v%"],
    ["STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "방어력 : +#v%", "올스탯 : +#v%", "HP 회복 아이템 및 회복 스킬 효율 : +#v%"],
    ["STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "방어력 : +#v%", "올스탯 : +#v%", "HP 회복 아이템 및 회복 스킬 효율 : +#v%", "아이템 획득 확률 : +#v%", "메소 획득량 : +#v%"]
];
var potenlist_per_cape = [
    [10, 10, 10, 10, 10, 10, 15],
    [10, 10, 10, 10, 10, 10, 15, 9, 9, 9, 9, 9, 9, 10],
    [10, 10, 10, 10, 10, 10, 15, 8],
    [14, 14, 14, 14, 14, 14, 19, 12, 24],
    [14, 14, 14, 14, 14, 14, 15, 12, 20, 13, 13]
];
var potenvalue_cape = [
    [6, 6, 6, 6, 60, 60, 60],
    [12, 12, 12, 12, 120, 120, 120, 3, 3, 3, 3, 3, 3, 5],
    [6, 6, 6, 6, 6, 6, 6, 3],
    [9, 9, 9, 9, 9, 9, 9, 6, 30],
    [12, 12, 12, 12, 12, 12, 12, 9, 40, 20, 20]
];
var potenper_cape = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
var edipotenlist_cape = [
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v", "모든 속성 내성 : +#v%", "캐릭터 기준 10레벨당 INT +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v", "모든 속성 내성 : +#v%", "메소 획득량 : +#v%", "아이템 획득확률 : +#v%", "크리티컬 데미지 : +#v%", "캐릭터 기준 10레벨당 INT +#v"],
];
var edipotenlist_per_cape = [
    [10, 10, 10, 10, 10, 10, 12, 6, 6, 8, 8],
    [8, 8, 8, 8, 8, 8, 10, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 10, 4, 4, 4, 4, 4, 4, 4, 3, 3, 10, 10],
    [5, 5, 5, 5, 5, 5, 10, 4, 4, 4, 4, 4, 4, 4, 2, 2, 9, 9, 6, 4],
    [4, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 4, 4, 3, 4]
];

var edipotenvalue_cape = [
    [6, 6, 6, 6, 60, 60, 60, 3, 3, 4, 4],
    [10, 10, 10, 10, 100, 100, 100, 2, 2, 2, 2, 2, 2, 3, 10, 10, 6, 6],
    [14, 14, 14, 14, 180, 180, 180, 4, 4, 4, 4, 5, 5, 2, 11, 11, 8, 8],
    [16, 16, 16, 16, 240, 240, 240, 5, 5, 5, 5, 7, 7, 4, 12, 12, 12, 12, 4, 1],
    [18, 18, 18, 18, 300, 300, 300, 7, 7, 7, 7, 10, 10, 5, 14, 14, 14, 14, 5, 5, 5, 1, 2]
];
var edipotenper_cape = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


// 망토
var op_potenlist;
var op_potenlist_per;
var op_potenvalue;
var op_potenper;

var op_edipotenlist;
var op_edipotenlist_per;
var op_edipotenvalue;
var op_edipotenper;
//
var potenstring = ["레어", "에픽", "유니크", "레전드리"];

var temppotlv = 0;
var temppot = ["", "", ""];
//
var potlv = 0;
var pot = ["", "", ""];

var edipotlv = 0;
var edipot = ["", "", ""];
var lv = [0, 0, 0];

function test() {
    alert(chustring);
}

function cube(item) {
    var t = 0;
    var perc = 0;
    switch (item) {
        case "수큐":
            if (potlv <= 2) {
                t = Math.random() * 1000;
                if (t < 30) {
                    if (potlv <= 1) {
                        potlv = 2;
                    }
                }
                lv = [potlv, potlv - 1, potlv - 1];
                if (Math.random() * 1000 < 30) {
                    lv[1] = potlv;
                }
                if (Math.random() * 1000 < 30) {
                    lv[2] = potlv;
                }
                jamsetting(10);
                refresh();
            }
            break;
        case "레큐":
            var sg = [0, 60, 20, 6];
            t = Math.random() * 1000;
            if (potlv < 4) {
                if (t < sg[potlv]) {
                    potlv++;
                }
            }
            lv = [potlv, potlv - 1, potlv - 1];
            if (Math.random() * 1000 < 90) {
                lv[1] = potlv;
            }
            if (Math.random() * 1000 < 90) {
                lv[2] = potlv;
            }
            jamsetting(80);
            refresh();
            break;
        case "블큐":
            temppotlv = potlv;
            if (jamjae && potlv > 0) {
                document.getElementById("maxpopup").style.display = "block";
                document.getElementById("blackcube_ui").style.display = "block";
                document.getElementsByName("cubeclass_before")[0].innerText = potenstring[potlv - 1];
                for (var i = 0; i < 3; i++) {
                    document.getElementsByName("cube_class_before")[i].innerText = document.getElementsByName("uppoten")[i].innerText;
                }
            }
            blackcube();
            break;
        case "수에큐":
            if (edipotlv <= 1) {
                lv = [edipotlv, edipotlv - 1, edipotlv - 1];
                if (Math.random() * 1000 < 6) {
                    lv[1] = edipotlv;
                }
                if (Math.random() * 1000 < 6) {
                    lv[2] = edipotlv;
                }
                edisetting(5);
            }
            break;
        case "에큐":
            var sg = [0, 80, 14, 6];
            t = Math.random() * 1000;
            if (edipotlv < 4) {
                if (t < sg[edipotlv]) {
                    edipotlv++;
                }
            }
            edisetting(10);
            break;
        default:
            alert("잘못된 접근입니다.");
    }
}

function blackcube() {
    var sg = [0, 150, 30, 12];
    t = Math.random() * 1000;
    if (potlv < 4) {
        if (t < sg[potlv]) {
            potlv++;
        }
    }
    jamsetting(150);
    cosumcount(21);
    document.getElementsByName("cubeclass_after")[0].innerText = potenstring[potlv - 1];
    for (var i = 0; i < 3; i++) {
        document.getElementsByName("cube_class_after")[i].innerText = "";
    }
    for (var i = 0; i < jamjul; i++) {
        document.getElementsByName("cube_class_after")[i].innerText = pot[i];
    }
}

function blackcube_before() {
    document.getElementById("maxpopup").style.display = "none";
    document.getElementById("blackcube_ui").style.display = "none";
    potlv = temppotlv;
    for (var i = 0; i < 3; i++) {
        pot[i] = document.getElementsByName("uppoten")[i].innerText;
    }
    refresh();
}

function blackcube_after() {
    document.getElementById("maxpopup").style.display = "none";
    document.getElementById("blackcube_ui").style.display = "none";
    refresh();
}

function jamsetting(ovr) {
    lv = [potlv, potlv - 1, potlv - 1];
    if (Math.random() * 1000 < ovr) {
        lv[1] = potlv;
    }
    if (Math.random() * 1000 < ovr / 2) {
        lv[2] = potlv;
    }
    var potenlist_per_sum = 0;
    for (var i = 0; i < pot.length; i++) {
        potenlist_per_sum = 0;
        for (var j = 0; j < op_potenlist_per[lv[i]].length; j++) {
            potenlist_per_sum += op_potenlist_per[lv[i]][j];
        }
        t = parseInt(Math.random() * potenlist_per_sum);
        perc = 0;
        for (var j = 0; j < op_potenlist_per[lv[i]].length; j++) {
            perc += op_potenlist_per[lv[i]][j];
            if (perc > t) {
                pot[i] = op_potenlist[lv[i]][j];
                pot[i] = pot[i].replace('#v', op_potenvalue[lv[i]][j]);
                pot[i] = pot[i].replace('#p', op_potenper[lv[i]][j]);
                break;
            }
        }
    }
    meso += reqlev * reqlev * 20; 
}

function edisetting(ovr) {
    lv = [edipotlv, edipotlv - 1, edipotlv - 1];
    if (Math.random() * 1000 < ovr) {
        lv[1] = edipotlv;
    }
    if (Math.random() * 1000 < ovr / 2) {
        lv[2] = edipotlv;
    }
    for (var i = 0; i < edipot.length; i++) {
        edipotenlist_per_sum = 0;
        for (var j = 0; j < op_edipotenlist_per[lv[i]].length; j++) {
            edipotenlist_per_sum += op_edipotenlist_per[lv[i]][j];
        }
        t = parseInt(Math.random() * edipotenlist_per_sum);
        perc = 0;
        for (var j = 0; j < op_edipotenlist_per[lv[i]].length; j++) {
            perc += op_edipotenlist_per[lv[i]][j];
            if (perc > t) {
                edipot[i] = op_edipotenlist[lv[i]][j];
                edipot[i] = edipot[i].replace('#v', op_edipotenvalue[lv[i]][j]);
                edipot[i] = edipot[i].replace('#p', op_edipotenper[lv[i]][j]);
                break;
            }
        }
    }
    refresh();
}
