function techList(techArray, personName) {
    let object = [];
    let arraySort = techArray.sort();
    if (techArray.length === 0 || personName === undefined) {
      return 'Vazio!';
    }
    for (let index of arraySort) {
      object.push({ tech: index, name: personName });
    }
    return object;
  }

module.exports = techList