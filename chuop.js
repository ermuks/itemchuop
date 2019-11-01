var isngh = false;

function cash(code) {
    switch (code) {
        case "리턴":
            alert("오류로 인해 초기화 후 새로 작업중입니다.");
            /*for (var i = 0; i < ngh.length; i++) {
                jak[i] -= ngh[i];
            }

            if (isngh) {
                elseup++;
                ucount--;
                isngh = false;
            }

            for (var i = 0; i < ngh.length; i++) {
                ngh[i] = 0;
            }*/
            
            break;
        case "프텍":
            alert("현재 미구현 상태입니다. 놀장강 가즈아");
            break;
        case "리커":
            alert("현재 미구현 상태입니다. 솔직히 이거 없어도될듯싶음;");
            break;
        default:
            alert('잘못된 접근 코드 : ' + code);
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
    // 0 : 영환불    (1~4 추옵) ( 8 16 32 44 )
    // 1 : 강환불    (2~5 추옵) ( 8 16 32 44 )
    // 2 : 일반 환불 (2~5 추옵) ( 2 6 36 58 )
    danchu = parseInt(reqlev / 20) + 1;
    yeechu = parseInt(reqlev / 40) + 1;
    for (var i = 0; i < 4; i++) {
        if (Math.random() * 100 < 10) continue;
        var t = Math.floor(Math.random() * 1000);
        var clv = 0; // 추옵 단계
        if (icls == 0) {
            if (t < 80) clv = 7
            else if (t < 240) clv = 6
            else if (t < 560) clv = 5
            else if (t < 1000) clv = 4
        } else if (icls == 1) {
            if (t < 80) clv = 6
            else if (t < 240) clv = 5
            else if (t < 560) clv = 4
            else if (t < 1000) clv = 3
        } else if (icls == 2) {
            if (t < 20) clv = 6
            else if (t < 80) clv = 5
            else if (t < 420) clv = 4
            else if (t < 1000) clv = 3
        }
        t = Math.floor(Math.random() * 1000);
        if (eqptype == 0) {
            if (t < 50 && !nochu[0]) {
                chu[0] += danchu * clv;
                nochu[0] = true;
            } else if (t < 95 && !nochu[1]) {
                chu[1] += danchu * clv;
                nochu[1] = true;
            } else if (t < 140 && !nochu[2]) {
                chu[2] += danchu * clv;
                nochu[2] = true;
            } else if (t < 185 && !nochu[3]) {
                chu[3] += danchu * clv;
                nochu[3] = true;
            } else if (t < 230 && !nochu[4]) {
                chu[0] += yeechu * clv;
                chu[1] += yeechu * clv;
                nochu[4] = true;
            } else if (t < 275 && !nochu[5]) {
                chu[0] += yeechu * clv;
                chu[2] += yeechu * clv;
                nochu[5] = true;
            } else if (t < 320 && !nochu[6]) {
                chu[0] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[6] = true;
            } else if (t < 365 && !nochu[7]) {
                chu[1] += yeechu * clv;
                chu[2] += yeechu * clv;
                nochu[7] = true;
            } else if (t < 410 && !nochu[8]) {
                chu[1] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[8] = true;
            } else if (t < 450 && !nochu[9]) {
                chu[2] += yeechu * clv;
                chu[3] += yeechu * clv;
                nochu[9] = true;
            } else if (t < 510 && !nochu[10]) {
                chu[4] += reqlev * 3 * clv;
                nochu[10] = true;
            } else if (t < 565 && !nochu[11]) {
                chu[5] += reqlev * 3 * clv;
                nochu[11] = true;
            } else if (t < 620 && !nochu[12]) {
                chu[8] += clv;
                nochu[12] = true;
            } else if (t < 665 && !nochu[13]) {
                chu[9] += clv;
                nochu[13] = true;
            } else if (t < 720 && !nochu[14]) {
                chu[10] += danchu * clv;
                nochu[14] = true;
            } else if (t < 795 && !nochu[15]) {
                chu[11] += clv;
                nochu[15] = true;
            } else if (t < 870 && !nochu[16]) {
                chu[12] += clv;
                nochu[16] = true;
            } else if (t < 915 && !nochu[17]) {
                chu[16] += clv;
                nochu[17] = true;
            } else if (t < 1000 && !nochu[18]) {
                chu[17] += clv * 5;
                nochu[18] = true;
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
                if (basic[8] > basic[9])
                    chu[8] += parseInt(basic[8] * 0.085 * clv);
                else
                    chu[8] += parseInt(basic[9] * 0.085 * clv);
                nochu[12] = true;
            } else if (t < 720 && !nochu[13]) {
                if (basic[8] > basic[9])
                    chu[8] += parseInt(basic[8] * 0.085 * clv);
                else
                    chu[8] += parseInt(basic[9] * 0.085 * clv);
                nochu[13] = true;
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