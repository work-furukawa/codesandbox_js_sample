/**
 * const, let等の変数宣言
 */
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数の再宣言
var val1 = "varを再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可
// let val2 = "let変数を再宣言";

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// const変数は再宣言不可
// const val3 = "const変数再宣言";

const val4 = {
  name: "aaa",
  age: 30
};
console.log(val4);

// これは変更できる
val4.name = "bbb";
console.log(val4);

val4.address = "Japan";
console.log(val4);

const val5 = ["dog", "cat"];
console.log(val5);

// これも変更できる
val5[0] = "bird";
console.log(val5);

val5.push("monkey");
console.log(val5);
