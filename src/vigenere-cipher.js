const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
constructor(bool = true) {
this.typeOfMachine = bool ? 'direct' : 'reverse';
}
encrypt(str, key) {
if (typeof str == 'undefined' || typeof key == 'undefined') {
throw Error('Invalid date!')
};

str = str.toUpperCase();
key = key.toUpperCase()
let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = '';

if (key.length < str.length) {
key = key.repeat(Math.ceil(str.length/key.length))
}

for (let i = 0, indexOfKey = 0; i < str.length; i++) {
if (a.includes(str[i])) {

let sumOfIndex = (a.indexOf(key[indexOfKey]) + a.indexOf(str[i]));
let resIndex = sumOfIndex > a.length ? sumOfIndex - 26 : sumOfIndex;

result += a[resIndex];
indexOfKey += 1;
} else {
result += str[i];
}
}
if (this.typeOfMachine === 'reverse') {
result = result.split('').reverse().join('');
}
return result
}

decrypt(str, key) {
if (typeof str == 'undefined' || typeof key == 'undefined') {
throw Error('Incorrect arguments!')
};

let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = '';
str = str.toUpperCase();
key = (key.length < str.length) ? key.repeat(Math.ceil(str.length/key.length)).toUpperCase() : key.toUpperCase();


for (let i = 0, indexOfKey = 0; i < str.length; i++) {
if (a.includes(str[i])) {

let ind = a.indexOf(str[i]) - a.indexOf(key[indexOfKey]);
if (ind < 0) {
ind = ind + 26;
}

result += a[ind];
indexOfKey += 1;
} else {
result += str[i];
}
}
if (this.typeOfMachine === 'reverse') {
result = result.split('').reverse().join('');
}
return result
}
}

module.exports = {
  VigenereCipheringMachine
};
