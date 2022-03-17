const btnReverce = document.querySelector(".btnReverce");
const btnLotinKiril = document.querySelector(".btn--lotinKiril");
const btnKirilLotin = document.querySelector(".btn--kirilLotin");
const lotinText = document.querySelector(".lotinText");
const kirilText = document.querySelector(".kirilText");

function lotinKiril() {
  let lotin = new Map([
    ["A", "А"],
    ["B", "Б"],
    ["C", "С"],
    ["D", "Д"],
    ["E", "Е"],
    ["F", "Ф"],
    ["G", "Г"],
    ["H", "Х"],
    ["I", "И"],
    ["J", "Ж"],
    ["K", "К"],
    ["L", "Л"],
    ["M", "М"],
    ["N", "Н"],
    ["O", "О"],
    ["P", "П"],
    ["Q", "К"],
    ["R", "Р"],
    ["S", "С"],
    ["T", "Т"],
    ["U", "У"],
    ["V", "В"],
    ["X", "Х"],
    ["Y", "Й"],
    ["Z", "З"],
    ["Ya", "Я"],
    ["Yu", "Ю"],
    ["Sh", "Щ"],
    ["O'", "У"],
    ["Ch", "Ч"],
    ["Yo", "Ё"],
    ["a", "а"],
    ["b", "б"],
    ["c", "с"],
    ["d", "д"],
    ["e", "е"],
    ["f", "ф"],
    ["g", "г"],
    ["h", "х"],
    ["i", "и"],
    ["j", "ж"],
    ["k", "к"],
    ["l", "л"],
    ["m", "м"],
    ["n", "н"],
    ["o", "о"],
    ["o'", "у"],
    ["p", "п"],
    ["q", "к"],
    ["r", "p"],
    ["s", "с"],
    ["t", "т"],
    ["u", "у"],
    ["v", "в"],
    ["x", "x"],
    ["y", "й"],
    ["z", "з"],
    ["sh", "ш"],
    ["ch", "ч"],
    ["ya", "я"],
    ["yu", "ю"],
    ["yo", "ё"],
    [" ", " "],
    [".", "."],
    [",", ","],
    ["-", "-"],
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
  ]);

  let strLotin = [];
  let outputKiril = [];
  strLotin = lotinText.value;
  strLotin = strLotin.split("");
  for (let i = 0; i < strLotin.length; i++) {
    if (strLotin[i] == "s" && strLotin[i + 1] == "h") {
      strLotin[i] = "sh";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "S" && strLotin[i + 1] == "h") {
      strLotin[i] = "Sh";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "y" && strLotin[i + 1] == "a") {
      strLotin[i] = "ya";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "Y" && strLotin[i + 1] == "a") {
      strLotin[i] = "Ya";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "y" && strLotin[i + 1] == "u") {
      strLotin[i] = "yu";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "Y" && strLotin[i + 1] == "u") {
      strLotin[i] = "Yu";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "c" && strLotin[i + 1] == "h") {
      strLotin[i] = "ch";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "C" && strLotin[i + 1] == "h") {
      strLotin[i] = "Ch";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "y" && strLotin[i + 1] == "o") {
      strLotin[i] = "yo";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "Y" && strLotin[i + 1] == "o") {
      strLotin[i] = "Yo";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "o" && strLotin[i + 1] == "'") {
      strLotin[i] = "o'";
      strLotin[i + 1] = "";
    }
    if (strLotin[i] == "O" && strLotin[i + 1] == "'") {
      strLotin[i] = "O'";
      strLotin[i + 1] = "";
    }
    outputKiril.push(lotin.get(strLotin[i]));
  }

  kirilText.value = outputKiril.join("");
}

function kirilLotin() {
  let kiril = new Map([
    ["А", "A"],
    ["Б", "B"],
    ["С", "C"],
    ["Д", "D"],
    ["Е", "E"],
    ["Ф", "F"],
    ["Г", "G"],
    ["Х", "H"],
    ["И", "I"],
    ["Ж", "J"],
    ["К", "K"],
    ["Л", "L"],
    ["М", "M"],
    ["Н", "N"],
    ["О", "O"],
    ["П", "P"],
    ["К", "Q"],
    ["Р", "R"],
    ["С", "S"],
    ["Т", "T"],
    ["У", "U"],
    ["В", "V"],
    ["Х", "X"],
    ["Й", "Y"],
    ["Я", "Ya"],
    ["Ю", "Yu"],
    ["Щ", "Sh"],
    ["Ш", "Sh"],
    ["Ч", "Ch"],
    ["З", "Z"],
    ["а", "a"],
    ["б", "b"],
    ["с", "c"],
    ["д", "d"],
    ["е", "e"],
    ["ф", "f"],
    ["г", "g"],
    ["х", "h"],
    ["и", "i"],
    ["ж", "j"],
    ["к", "k"],
    ["л", "l"],
    ["м", "m"],
    ["н", "n"],
    ["о", "o"],
    ["п", "p"],
    ["к", "q"],
    ["p", "r"],
    ["с", "s"],
    ["т", "t"],
    ["у", "u"],
    ["в", "v"],
    ["x", "x"],
    ["й", "y"],
    ["з", "z"],
    ["щ", "sh"],
    ["ш", "sh"],
    ["ч", "ch"],
    ["ё", "yo"],
    [" ", " "],
    [".", "."],
    [",", ","],
    ["-", "-"],
    ["0", "0"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
  ]);
  let strKiril = [];
  let outputLotin = [];
  strKiril = kirilText.value;
  strKiril = strKiril.split("");
  for (let i = 0; i < strKiril.length; i++) {
    outputLotin.push(kiril.get(strKiril[i]));
  }
  lotinText.value = outputLotin.join("");
}

document.querySelector(".lotinText").addEventListener("input", function () {
  lotinKiril();
});
document.querySelector(".kirilText").addEventListener("input", function () {
  kirilLotin();
});
