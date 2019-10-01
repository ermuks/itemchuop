// 망토
var potenlist_cape = [
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v"],
    ["STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "피격 시 #p% 확률로 #v의 데미지 무시", "피격 시 #p% 확률로 #v의 데미지 무시", "피격 시 #p% 확률로 #v의 데미지 무시", "올스탯 : +#v"],
    ["STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "HP 회복 아이템 및 회복 스킬 효율 : +#v%", "피격 시 #p% 확률로 #v%의 데미지 무시", "피격 시 #p% 확률로 #v%의 데미지 무시"],
    ["STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "HP 회복 아이템 및 회복 스킬 효율 : +#v%", "피격 시 #p% 확률로 #v%의 데미지 무시", "피격 시 #p% 확률로 #v%의 데미지 무시"]
];
var potenlist_per = [
    [13, 13, 13, 13, 13, 13, 22],
    [8, 8, 8, 8, 8, 8, 10, 6, 6, 6, 6, 6, 6, 6],
    [9, 9, 9, 9, 10, 10, 8, 12, 12, 12],
    [9, 9, 9, 9, 10, 10, 8, 12, 12, 12],
    [9, 9, 9, 9, 10, 10, 8, 12, 12, 12]
];
var potenvalue_cape = [
    [6, 6, 6, 6, 60, 60, 60],
    [12, 12, 12, 12, 120, 120, 120, 3, 3, 3, 3, 3, 3, 5],
    [6, 6, 6, 6, 6, 6, 3, 25, 38, 51],
    [9, 9, 9, 9, 9, 9, 6, 30, 20, 40],
    [12, 12, 12, 12, 12, 12, 9, 40, 20, 40]
];
var potenper_cape = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 20, 20, 30],
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 10, 10]
];
var edipotenlist_cape = [
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v", "모든 속성 내성 : +#v%", "캐릭터 기준 10레벨당 INT +#v"],
    ["STR : +#v", "DEX : +#v", "INT : +#v", "LUK : +#v", "최대HP : +#v", "최대MP : +#v", "방어력 : +#v", "STR : +#v%", "DEX : +#v%", "INT : +#v%", "LUK : +#v%", "최대HP : +#v%", "최대MP : +#v%", "올스탯 : +#v%", "공격력 : +#v", "마력 : +#v", "이동속도 : +#v", "점프력 : +#v", "모든 속성 내성 : +#v%", "메소 획득량 : +#v%", "아이템 획득확률 : +#v%", "크리티컬 데미지 : +#v", "캐릭터 기준 10레벨당 INT +#v"],
];
var edipotenlist_per = [
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
    [16, 16, 16, 16, 240, 240, 240, 5, 5, 5, 5, 7, 7, 4, 12, 12, 4, 4, 4, 1],
    [18, 18, 18, 18, 300, 300, 300, 7, 7, 7, 7, 10, 10, 5, 14, 14, 14, 14, 5, 5, 5, 1, 2]
];
var edipotenper_cape = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//
var potlv = 1;
var pot = ["", "", ""];

var edipotlv = 1;
var edipot = ["", "", ""];

function test() {
    alert(chustring);
}

function cube(item) {
    var lv = [0, 0, 0];
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

                for (var i = 0; i < pot.length; i++) {
                    t = parseInt(Math.random() * 100);
                    perc = 0;
                    for (var j = 0; j < potenlist_per[lv[i]].length; j++) {
                        perc += potenlist_per[lv[i]][j];
                        if (perc > t) {
                            pot[i] = potenlist_cape[lv[i]][j];
                            pot[i] = pot[i].replace('#v', potenvalue_cape[lv[i]][j]);
                            pot[i] = pot[i].replace('#p', potenper_cape[lv[i]][j]);
                            break;
                        }
                    }
                }
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

            for (var i = 0; i < pot.length; i++) {
                t = parseInt(Math.random() * 100);
                perc = 0;
                for (var j = 0; j < potenlist_per[lv[i]].length; j++) {
                    perc += potenlist_per[lv[i]][j];
                    if (perc > t) {
                        pot[i] = potenlist_cape[lv[i]][j];
                        pot[i] = pot[i].replace('#v', potenvalue_cape[lv[i]][j]);
                        pot[i] = pot[i].replace('#p', potenper_cape[lv[i]][j]);
                        break;
                    }
                }
            }
            break;
        case "블큐":
            var sg = [0, 150, 35, 14];
            t = Math.random() * 1000;
            if (potlv < 4) {
                if (t < sg[potlv]) {
                    potlv++;
                }
            }
            lv = [potlv, potlv - 1, potlv - 1];
            if (Math.random() * 1000 < 210) {
                lv[1] = potlv;
            }
            if (Math.random() * 1000 < 210) {
                lv[2] = potlv;
            }

            for (var i = 0; i < pot.length; i++) {
                t = parseInt(Math.random() * 100);
                perc = 0;
                for (var j = 0; j < potenlist_per[lv[i]].length; j++) {
                    perc += potenlist_per[lv[i]][j];
                    if (perc > t) {
                        pot[i] = potenlist_cape[lv[i]][j];
                        pot[i] = pot[i].replace('#v', potenvalue_cape[lv[i]][j]);
                        pot[i] = pot[i].replace('#p', potenper_cape[lv[i]][j]);
                        break;
                    }
                }
            }
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

                for (var i = 0; i < edipot.length; i++) {
                    t = parseInt(Math.random() * 100);
                    perc = 0;
                    for (var j = 0; j < edipotenlist_per[lv[i]].length; j++) {
                        perc += edipotenlist_per[lv[i]][j];
                        if (perc > t) {
                            edipot[i] = edipotenlist_cape[lv[i]][j];
                            edipot[i] = edipot[i].replace('#v', edipotenvalue_cape[lv[i]][j]);
                            edipot[i] = edipot[i].replace('#p', edipotenper_cape[lv[i]][j]);
                            break;
                        }
                    }
                }
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
            lv = [edipotlv, edipotlv - 1, edipotlv - 1];
            if (Math.random() * 1000 < 10) {
                lv[1] = edipotlv;
            }
            if (Math.random() * 1000 < 10) {
                lv[2] = edipotlv;
            }

            for (var i = 0; i < edipot.length; i++) {
                t = parseInt(Math.random() * 100);
                perc = 0;
                for (var j = 0; j < edipotenlist_per[lv[i]].length; j++) {
                    perc += edipotenlist_per[lv[i]][j];
                    if (perc > t) {
                        edipot[i] = edipotenlist_cape[lv[i]][j];
                        edipot[i] = edipot[i].replace('#v', edipotenvalue_cape[lv[i]][j]);
                        edipot[i] = edipot[i].replace('#p', edipotenper_cape[lv[i]][j]);
                        break;
                    }
                }
            }
            break;
        default:
            alert("잘못된 접근입니다.");
    }
    refresh();
}