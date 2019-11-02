var star_cnt = 0;
var starcatch = 4.5;
var fail = 0;
var maxstf = 0;

var nobreak = 40;

var star_stats = [false, false, false, false];

var addstat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var star_per =
    [
        950, 900, 850, 850, 800,
        750, 700, 650, 600, 550,
        500, 450, 400, 350, 300,
        300, 300, 300, 300, 300,
        300, 300, 30, 20, 10
    ];
var star_maintain =
    [
        50, 100, 150, 150, 200,
        250, 300, 350, 400, 450,
        500, 550, 593, 636, 686,
        679, 679, 679, 672, 672,
        630, 630, 776, 686, 594
    ];

var star_destroy =
    [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 7, 14, 14,
        21, 21, 21, 28, 28,
        70, 70, 194, 294, 396
    ];

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

function starforce() {
    var cost = 0;

    for (var i = 0; i < addstat.length; i++) {
        addstat[i] = 0;
    }

    if (star_cnt <= maxstf) {
        if (star_cnt < maxstf) {
            if (star_cnt < 10) {
                cost = Math.round(1000 + Math.pow(reqlev, 3) * (star_cnt + 1) / 2500) * 100;
            } else if (star_cnt < 15) {
                cost = Math.round(1000 + Math.pow(reqlev, 3) * Math.pow(star_cnt + 1, 2.7) / 40000) * 100;
            } else if (star_cnt < 25) {
                cost = Math.round(1000 + Math.pow(reqlev, 3) * Math.pow(star_cnt + 1, 2.7) / 20000) * 100;
            }

            var hr = Math.random() * 1000;
            if (fail >= 2) {
                fail = 0;
                hr = 0;
            }
            if (hr < star_per[star_cnt]) {
                star_cnt++;
                meso += cost;
            } else if (hr < star_per[star_cnt] + star_maintain[star_cnt]) {
                fail++;
                meso += cost;
                if (star_cnt < 11 || star_cnt == 15 || star_cnt == 20) {

                } else {
                    star_cnt--;
                }
            } else {
                if (Math.random() * 1000 < nobreak) {
                    addinfo("[파괴는 남의 일] 스킬 효과에 의하여 파괴되지 않았습니다.");
                }
                star_cnt = 12;
                addinfo("장비가 파괴 되었습니다. (12성 자동복구)");
            }
        }

        if (eqptype == 0) {
            if (item_job[0] || item_job[1] || item_job[3] || item_job[5]) {
                star_stats[0] = true;
                star_stats[1] = true;
            }
            if (item_job[2]) {
                star_stats[2] = true;
                star_stats[3] = true;
            }
            if (item_job[4]) {
                star_stats[1] = true;
                star_stats[3] = true;
            }
            var tmp_grd = basic[10];
            for (var i = 1; i < star_cnt + 1; i++) {
                if (i <= 5) {
                    for (var j = 0; j < star_stats.length; j++) {
                        if (star_stats[j]) {
                            addstat[j] += 2;
                        }
                    }
                    tmp_grd += parseInt(tmp_grd * 0.05);
                } else if (i <= 15) {
                    for (var j = 0; j < star_stats.length; j++) {
                        if (star_stats[j]) {
                            addstat[j] += 3;
                        }
                    }
                    tmp_grd += parseInt(tmp_grd * 0.05);
                } else if (i <= 22) {
                    for (var j = 0; j < star_stats.length; j++) {
                        if (star_stats[j]) {
                            if (reqlev == 200) {
                                addstat[j] += 15;
                            } else {
                                addstat[j] += (reqlev / 10 - 10) * 2 + 1;
                            }
                        }
                    }
                    tmp_grd += parseInt(tmp_grd * 0.05);
                }

                if (i <= 15) {

                } else if (i <= 22) {
                    if (reqlev == 200) {
                        addstat[8] += i - 4;
                        addstat[9] += i - 4;
                    } else {
                        addstat[8] += reqlev / 10 - 22 + i;
                        addstat[9] += reqlev / 10 - 22 + i;
                    }
                } else if (i <= 25) {
                    if (reqlev == 200) {
                        addstat[8] += i * 3 - 32;
                        addstat[9] += i * 3 - 32;
                    } else {
                        addstat[8] += i * 3 - 24;
                        addstat[9] += i * 3 - 24;
                    }
                }
            }
            addstat[10] = tmp_grd;
        }
    }
    refresh();
}