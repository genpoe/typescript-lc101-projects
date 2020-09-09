import { Payload } from './Payload';

class Cargo {
    massKg: number;
    material: string;

    constructor(cargoMass: number, cargoMaterial: string) {
        this.massKg = cargoMass;
        this.material = cargoMaterial;
    }
}