"use strict";
exports.__esModule = true;
// com
var readlineSync = require("readline-sync");
// これの使い方がわからない
//type treeDigitNumber = readonly [number, number, number]
// comの手
function random() {
    var com = [];
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (com.length < 3) {
        var n = Math.floor(Math.random() * array.length);
        if (com.indexOf(n) === -1) {
            com.push(n);
        }
    }
    return com;
}
// 入力した数字を配列にする
function bunkatu(n) {
    var input_array = [];
    var i = 3;
    while (i > 0) {
        input_array.push(n % 10);
        n = Math.floor(n / 10);
        i -= 1;
    }
    return input_array.reverse();
}
function judge(com, player) {
    var eat = 0;
    var bite = 0;
    for (var i = 0; i < 3; i++) {
        if (com[i] === player[i]) {
            eat += 1;
        }
        else if (com.indexOf(player[i]) >= 0) {
            bite += 1;
        }
    }
    console.log(eat + "eat-" + bite + "bite");
    if (eat === 3) {
        return 1;
    }
    return 0;
}
var com = random();
console.log(com);
while (true) {
    var n = readlineSync.question('number ');
    var player = bunkatu(n);
    var handan = judge(com, player);
    if (handan === 1) {
        break;
    }
}
