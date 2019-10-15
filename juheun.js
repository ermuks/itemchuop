var fever = false;
var addper = 4.5;

function jhjak(p) {
    // p : 주문의 흔적 강화 확률 (0 : 100%, 1 : 70%, 2 : 30%, 3 : 15%, 4 : 5%)
    var pr = [1000, 700, 300, 150, 50];
    var gm = [[1, 2, 3, 5], [2, 3, 5, 7], [3, 5, 7, 9]];
    var st = [[1, 2, 3], [2, 3, 5], [3, 4, 7]];
    var hp = [[50, 115, 180], [120, 190, 320], [180, 270, 470]];

    var bonushp = [[5, 15, 30], [20, 40, 70], [30, 70, 120]];
    var grd = [[1, 2, 4], [2, 4, 7], [3, 5, 10]];

    var suc = false;

    if (Math.random() * 1000 < pr[p]) {
        var cd = parseInt(item_code / 10000);
        var stats = [false, false, false, false, false, false];

        if (item_job[0] || item_job[1]) {
            stats[0] = true;
        }else if (item_job[2]) {
            stats[2] = true;
        } else if (item_job[3]) {
            stats[1] = true;
        } else if (item_job[4]) {
            stats[3] = true;
        } else if (item_job_special == "데몬어벤져") {
            stats[4] = true;
        }
        var l = 0;

        switch (parseInt(parseInt(item_code) / 1000)) {
            case 100: case 104: case 105: case 106: case 107: case 110:
                // 방어구
                if (reqlev <= 70) {
                    l = 0;
                } else if (reqlev <= 110) {
                    l = 1;
                } else if (reqlev <= 250) {
                    l = 2;
                }
                for (var i = 0; i < stats.length; i++) {
                    if (stats[i]) {
                        if (i < 4) {
                            jak[i] += st[p][l];
                        } else {
                            jak[i] += hp[p][l];
                        }
                        jak[10] += grd[p][l];
                        jak[4] += bonushp[p][l];
                    }
                }
                break;
            case 108:
                // 장갑
                if (reqlev <= 70) {
                    l = p;
                } else {
                    l = p + 1;
                }
                if (l > 0) {
                    if (stats[2]) {
                        jak[9] += l;
                    } else {
                        jak[8] += l;
                    }
                }
                break;
            case 101: case 102: case 103: case 109: case 111: case 112: case 113: case 115:
                // 장신구

                break;
        }
        suc = true;
    }
    return suc;
}
// 방패      0109