import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Mage extends Archetype {
  private _energy: EnergyType;
  private static count = 0;
  constructor(_name: string) {
    super(_name);
    this._energy = 'mana';
    Mage.count += 1;
  }

  public get name() {
    return this._name;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    return Mage.count;
  }
}
