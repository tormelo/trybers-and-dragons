// import Race, { Dwarf, Orc } from './Races';

import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// const orc1 = new Orc('olog', 12);
// const orc2 = new Orc('balog', 14);

// const dw1 = new Dwarf('Oin', 12);
// const dw2 = new Dwarf('Boin', 14);
// const dw3 = new Dwarf('Jgoin', 14);

// console.log(orc1.name);
// console.log(orc2.name);
// console.log(Orc.createdRacesInstances());
// console.log(Dwarf.createdRacesInstances());
// // Race.createdRacesInstances();

const player1 = new Character('Dwalin');
player1.levelUp();
player1.levelUp();
player1.levelUp();

const player2 = new Character('Bombur');
const player3 = new Character('Bifur');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export {
  player1,
  player2,
  player3,
  monster1, 
  monster2,
  pvp,
  pve,
  runBattles,
};
