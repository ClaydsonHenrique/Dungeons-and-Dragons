import { EnergyType } from './Energy';
import SimpleFighter from './Fighter/SimpleFighter';

export default interface Fighter extends SimpleFighter {

  defense: number;
  energys?: EnergyType;

  special?(enemy: Fighter): void;
  levelUp(): void;
}

export { SimpleFighter };