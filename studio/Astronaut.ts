import { Payload } from './Payload';

export class Astronaut {
    massKg: number;
    name: string;

    constructor(astronautMass: number, astronautName: string) {
        this.massKg = astronautMass;
        this.name = astronautName;
    }
}