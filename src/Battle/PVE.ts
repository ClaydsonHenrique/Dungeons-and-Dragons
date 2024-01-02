import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private player1: Fighter;
  private monsters: SimpleFighter[];
  constructor(player1: Fighter, monsters: SimpleFighter[]) {
    super(player1);
    this.player1 = player1;
    this.monsters = monsters;
  }

  fight(): number {
    while (
      this.player1.lifePoints > 0 
      && this.monsters.some((monster) => monster.lifePoints > 0)
    ) {
      this.monsters
        .filter((monster) => monster.lifePoints > 0)
        .forEach((monster) => {
          this.player.receiveDamage(monster.strength);
          this.player1.attack(monster);
        });
    }
    return this.player1.lifePoints > 0 ? 1 : -1;
  }
}