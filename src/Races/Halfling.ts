import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  private static halflingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.halflingInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.halflingInstances;
  }
}