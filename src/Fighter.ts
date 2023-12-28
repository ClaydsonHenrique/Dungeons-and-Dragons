import { EnergyType } from './Energy';
import SimpleFighter from './Fighter/SimpleFighter';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energys?: EnergyType;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export { SimpleFighter };