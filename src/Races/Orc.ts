import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  private static orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.orcInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.orcInstances;
  }
}