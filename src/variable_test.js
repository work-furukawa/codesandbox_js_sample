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

const name = "abc";
const age = 30;

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * arrow関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name1: "abc",
  age1: 30
};
const message3 = `私の名前は${myProfile.name1}です。年齢は${myProfile.age1}です。`;
console.log(message3);

const { name1, age1 } = myProfile;
const message4 = `私の名前は${name1}です。年齢は${age1}です。`;
console.log(message4);

const myProfile2 = ["ccc", 31];
const message5 = `私の名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message5);

const [name2, age2] = myProfile2;
const message6 = `私の名前は${name2}です。年齢は${age2}です。`;
console.log(message6);

/**
 * デフォルト値、引数
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
console.log(sayHello("eee"));
// 引数のデフォルト値がない場合はundefinedが渡ってしまう
console.log(sayHello());

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// こうやってコピーすると
const arr8 = arr4;
console.log(arr8);
// 値を変更すると元の変数の値も変わってしまう
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
