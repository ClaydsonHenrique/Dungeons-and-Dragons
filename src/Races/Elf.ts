import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  private static elfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.elfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.elfInstances;
  }
}