function encode(encode1) {
    let palavra = encode1.replace(/a/gi, 1);
    palavra = palavra.replace(/e/gi, 2);
    palavra = palavra.replace(/i/gi, 3);
    palavra = palavra.replace(/o/gi, 4);
    palavra = palavra.replace(/u/gi, 5);
    return palavra;
  }

  function decode(decode1) {
    let palavra = decode1.replace(/1/gi, 'a');
    palavra = palavra.replace(/2/gi, 'e');
    palavra = palavra.replace(/3/gi, 'i');
    palavra = palavra.replace(/4/gi, 'o');
    palavra = palavra.replace(/5/gi, 'u');
    return palavra;
  }

module.exports = { encode, decode }