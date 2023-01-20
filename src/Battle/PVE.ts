import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private enemies: SimpleFighter[]) { 
    super(player);
  }

  private updateBattleStatus(): void {
    if (this.player.lifePoints < 0) this.battleStatus = -1;
    const enemiesDefeated = this.enemies
      .every(({ lifePoints }) => lifePoints < 0);
    if (enemiesDefeated) this.battleStatus = 1;
  }

  private getPlayerTarget(): SimpleFighter {
    return this.enemies
      .filter(({ lifePoints }) => lifePoints > 0)
      .sort(
        ({ lifePoints: a }, { lifePoints: b }) => a - b,
      )[0];
  }

  private playerTurn(target: SimpleFighter): void {
    this.player.attack(target);
    this.updateBattleStatus();
  }

  private enemyTurn(enemyTurn: number): void {
    if (this.enemies[enemyTurn].lifePoints < 0) return;
    this.enemies[enemyTurn].attack(this.player);
    this.updateBattleStatus();
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    let isPlayerTurn = true;
    let enemyIndex = 0;

    while (this.battleStatus === 0) {
      if (isPlayerTurn) {
        this.playerTurn(this.getPlayerTarget());
        enemyIndex = 0;
        isPlayerTurn = false;
      } else {
        this.enemyTurn(enemyIndex);
        enemyIndex += 1;
        isPlayerTurn = enemyIndex > this.enemies.length - 1;
      }
    }

    return this.battleStatus;
  }
}

export default PVE;
