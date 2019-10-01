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

//
var potlv = 1;
var pot = ["", "", ""];

function test() {
    alert(chustring);
}

function cube(item) {
    var lv = [0, 0, 0];
    var t = 0;
    var perc = 0;
    switch (item) {
        case "수큐":
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
            break;
        case "레큐":
            var sg = [0, 150, 50, 15];
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
            var sg = [0, 200, 120, 40];
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
        case "에큐":

            break;
        case "에큐":

            break;
        default:
            alert("잘못된 접근입니다.");
    }
    refresh();
}