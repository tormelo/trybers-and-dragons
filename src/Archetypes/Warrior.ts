import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addArchetypeInstance();
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Warrior;