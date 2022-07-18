function hydrate(beer) {
    let reg = /\d+/g;
    let result = beer.match(reg);
    let hydrate1 = 0;
    for (let index of result) {
      hydrate1 += Number(index);
    }
  
    if (hydrate1 === 1) {
      return hydrate1 + ' ' + 'copo de água';
    }
  
    return hydrate1 + ' ' + 'copos de água';
  }

module.exports = hydrate