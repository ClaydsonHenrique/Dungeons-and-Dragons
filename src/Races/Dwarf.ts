import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  private static dwarfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.dwarfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.dwarfInstances;
  }
}