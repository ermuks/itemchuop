var mobile = false;

var meso = 0;

var cosumcnt = new Array(23);
for (var i = 0; i < cosumcnt.length; i++) {
    cosumcnt[i] = 0;
}

function setmobile(b) {
    mobile = b;
}

function cosumcount(index) {
    cosumcnt[index]++;
    if (mobile) mtextrefresh();
    if (!mobile) textrefresh();
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