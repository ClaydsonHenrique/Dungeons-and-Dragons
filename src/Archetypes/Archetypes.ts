import { EnergyType } from '../Energy';

export default abstract class Archetype {
  protected _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name() {
    return this._name;
  }

  public get special() {
    return this._special;
  }
  
  public get cost() {
    return this._cost;
  }
  
  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}