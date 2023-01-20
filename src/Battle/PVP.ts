// import Fighter from '../Fighter';

import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(player: Fighter, private enemy: Fighter) { 
    super(player);
  }

  private updateBattleStatus(): void {
    if (this.player.lifePoints < 0) this.battleStatus = -1;
    if (this.enemy.lifePoints < 0) this.battleStatus = 1;
  }

  private turn(character: Fighter, target: Fighter): void {
    character.attack(target);
    this.updateBattleStatus();
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    const actors = [this.player, this.enemy];
    let character = 0;
    let target = 1;
    while (this.battleStatus === 0) {
      this.turn(actors[character], actors[target]);
      target = character;
      character = character === 0 ? 1 : 0;
    }

    return this.battleStatus;
  }
}

export default PVP;
