import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addArchetypeInstance();
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Ranger;