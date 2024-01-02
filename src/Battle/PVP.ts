import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, player2: Fighter) {
    super(player1, player2);
    this.player2 = player2;
  }
  
  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    if (this.player.lifePoints <= 0) {
      return -1;
    }
    return 1;
  }
}
