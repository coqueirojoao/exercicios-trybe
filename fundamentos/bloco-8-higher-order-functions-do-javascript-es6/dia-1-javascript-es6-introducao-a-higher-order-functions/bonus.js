// --------------------------- Parte I - Game Actions Simulator ---------------------------

// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.
const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDmg = () => {
    const damage = Math.floor(Math.random() * (dragon.strength - 15)) + 15;
    return damage;
}

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDmg = () => {
  const damage = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength + 1;
  return damage
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const objGenerator = () => {
  const damage = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) + mage.intelligence + 1;
  const manaGasta = 15 

  const myObj = {
    dano: damage,
    mana: mage.mana - 15
  }

  return myObj
}

// --------------------------- Parte II - Game Actions Simulator ---------------------------

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  warriorTurn: (dmgFunc) => {
    const warriorDamage = dmgFunc()
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
    return `A vida do Dragão está em: ${dragon.healthPoints}
O dano do Warrior foi de ${warriorDamage} o warrior tem ${warrior.damage} de dano`
  },
  mageTurn: (dmgFunc) => {
    const mageObj = dmgFunc()
    const mageDamage = mageObj.dano
    const manaMage = mageObj.mana
    if (manaMage >= 15) {
      mage.damage = mageDamage
      mage.mana = mageObj.mana
      dragon.healthPoints -= mageDamage
      return `O dano do mage foi de ${mage.damage} e a mana total é de ${mage.mana}
A vida do dragão está em: ${dragon.healthPoints}`
    } else {
      return "Não possui mana suficiente"
    }

  },
  dragonTurn: (dmgFunc) => {
    const dragonDamage = dmgFunc()
    dragon.damage = dragonDamage
    warrior.healthPoints -= dragonDamage
    mage.healthPoints -= dragonDamage

    return `O dano do dragão foi de ${dragon.damage}
A vida do mago está em ${mage.healthPoints} e a vida do warrior está em ${warrior.healthPoints}`
  },
  battleTurn: () => {
    gameActions.warriorTurn(warriorDmg)
    gameActions.mageTurn(objGenerator)
    gameActions.dragonTurn(dragonDmg)

    return battleMembers
  }
};

console.log(gameActions.battleTurn());
console.log(gameActions.battleTurn());