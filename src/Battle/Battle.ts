import Fighter from '../Fighter';

// iniciando projeto 

abstract class Battle {
  constructor(protected player: Fighter, protected player2:Fighter) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
    }
    if (this.player.lifePoints <= 0) {
      return 2;
    } 
    return 1;
  }
}

export default Battle;
