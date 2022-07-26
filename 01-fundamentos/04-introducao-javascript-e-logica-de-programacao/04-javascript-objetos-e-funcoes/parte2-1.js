let word1 = 'arara';
let word2 = 'natan';
let word3 = 'carteira';
let word4 = 'opadapo';
let word5 = 'xablau';

function verificaPalavra(word) {
    var re = /[^A-Za-z0-9]/g;
    str = word.toLowerCase().replace(re, '');
    var len = word.length;
    for (var i = 0; i < len/2; i++) {
      if (word[i] !== word[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

console.log(verificaPalavra(word1));
console.log(verificaPalavra(word2));
console.log(verificaPalavra(word3));
console.log(verificaPalavra(word4));
console.log(verificaPalavra(word5));