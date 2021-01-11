import { DecimalPipe } from "@angular/common";

export class Firework {
    id: number;
    longitude: DecimalPipe;
    latitude: DecimalPipe;
    adress: string;
    data: string;
    price: Int16Array;
    handicapAccess: boolean;
    duration: string;
    crowded: string;
}