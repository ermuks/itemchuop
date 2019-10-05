var star_cnt = 0;
var starcatch = 4.5;
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

function starforce() {
    var cost = 0;
    if (star_cnt < maxstr) {
        if (star_cnt < 10) {
            cost = Math.round(1000 + Math.pow(reqlev, 3) * (star_cnt + 1) / 25, -2);
        } else if (star_cnt < 15) {
            cost = Math.round(1000 + Math.pow(reqlev, 3) * Math.pow(star_cnt + 1, 2.7) / 400, -2);
        } else if (star_cnt < 25) {
            cost = Math.round(1000 + Math.pow(reqlev, 3) * Math.pow(star_cnt + 1, 2.7) / 200, -2);
        }
        var hr = Math.random() * 1000;
        if (hr < star_per[star_cnt]) {
            star_cnt++;
            meso += cost;
        } else if (hr < star_per[star_cnt] + star_maintain[star_cnt]) {
            meso += cost;
            if (star_cnt < 11 || star_cnt == 15 || star_cnt == 20) {

            } else {
                star_cnt--;
            }
        } else {
            star_cnt = 12;
            alert("파괴 ㅋㅋㅋㅋㅋㅋㅋㅋ");
        }
    }
    refresh();
}