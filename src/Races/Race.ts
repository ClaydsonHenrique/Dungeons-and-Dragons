export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  protected static createdInstances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
    Race.createdInstances += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
