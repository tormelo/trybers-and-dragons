abstract class Race {
  protected static _createdRacesInstances = 0;
  protected _maxLifePoints = 0;
  constructor(private _name: string, private _dexterity: number) {}
  
  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  protected static addRaceInstance(): void {
    this._createdRacesInstances += 1;
  }
  
  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}

export default Race;