import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket implements Payload{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

    constructor(rocketName: string, rocketCapacity: number) {
        this.name = rocketName;
        this.totalCapacityKg = rocketCapacity;
    }

    sumMass( items: Payload[] ): number {
        let sumItems: number = 0;
        for (let i=0; i < items.length; i++) {
            sumItems += items[i].massKg;
        }
        return sumItems;
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}

console.log()