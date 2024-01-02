import Character from './Character';
import Monster from './Monster';

const cr = new Character('onx');
const moster1 = new Monster();

console.log(moster1);

cr.attack(moster1);

console.log(moster1, 'atacado');