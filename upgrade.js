function upg(mns, code) {
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
        case "주흔100":
            elseup--;
            if (jhjak(0)) {
                ucount++;
            }
            break;
        case "주흔70":
            elseup--;
            if (jhjak(1)) {
                ucount++;
            }
            break;
        case "주흔30":
            elseup--;
            if (jhjak(2)) {
                ucount++;
            }
            break;
        case "주흔15":
            elseup--;
            if (jhjak(3)) {
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
                star_cnt = 0;
                for (var i = 0; i < jak.length; i++) {
                    jak[i] = 0;
                }
            }
            break;
        case "잠재":
            if (!jamjae) {
                if (Math.random() * 100 < 70) {
                    if (jamjul == 0) {
                        jamjul = parseInt(Math.random() * 2) + 2;
                        jamjae = true;
                        var rnd = Math.random() * 1000;

                        if (rnd < 950) {
                            potlv = 1;
                        } else if (rnd < 994) {
                            potlv = 2;
                        } else {
                            potlv = 3;
                        }
                        jamsetting(5);
                    }
                }
            }
            break;
        case "에잠":
            if (potlv < 2) {
                if (Math.random() * 100 < 50) {
                    if (jamjul == 0) {
                        jamjul = parseInt(Math.random() * 2) + 2;
                        jamjae = true;
                    }
                    potlv = 2;
                    jamsetting(10);
                }
            }
            break;
        case "유잠":
            if (potlv < 3) {
                if (Math.random() * 100 < 30) {
                    if (jamjul == 0) {
                        jamjul = parseInt(Math.random() * 2) + 2;
                        jamjae = true;
                    }
                    potlv = 3;
                    jamsetting(50);
                }
            }
            break;
        case "에디잠":
            if (jamjae) {
                if (!edjamj) {
                    if (Math.random() * 100 < 50) {
                        if (edijul == 0) {
                            edijul = parseInt(Math.random() * 2) + 2;
                            edjamj = true;
                            var rnd = Math.random() * 1000;

                            if (rnd < 950) {
                                edipotlv = 1;
                            } else if (rnd < 994) {
                                edipotlv = 2;
                            } else {
                                edipotlv = 3;
                            }
                            edisetting(5);
                        }
                    }
                }
            }
            break;
        case "에디에잠":
            if (jamjae) {
                if (edipotlv < 2) {
                    if (Math.random() * 100 < 30) {
                        if (edijul == 0) {
                            edijul = parseInt(Math.random() * 2) + 2;
                            edjamj = true;
                        }
                        edipotlv = 2;
                        edisetting(10);
                    }
                }
            }
            break;
        case "금각":
            if (jamjae) {
                if (jamjul == 2) {
                    if (Math.random() * 100 < 80) {
                        jamjul = 3;
                    }
                }
            }
            break;
        case "에디금각":
            if (edjamj) {
                if (edijul == 2) {
                    if (Math.random() * 100 < 80) {
                        edijul = 3;
                    }
                }
            }
            break;
        default:
            alert("잘못 표기되었습니다. code : " + code);
            break;
    }
    refresh();
}