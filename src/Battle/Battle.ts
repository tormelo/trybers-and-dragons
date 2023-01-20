import Fighter from '../Fighter';

abstract class Battle {
  // 0: battling, -1: player lost, 1: player won
  private _battleStatus = 0;

  constructor(protected player: Fighter) { }

  get battleStatus(): number {
    return this._battleStatus;
  }

  set battleStatus(status: number) {
    this._battleStatus = status;
  }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
