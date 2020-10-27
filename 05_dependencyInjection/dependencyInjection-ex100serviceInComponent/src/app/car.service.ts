import{ Injectable } from '@angular/core';

@Injectable()
export class CarService {
    constructor(){
        console.log('CarService: constructor');
    }

    // dummy method
    isSupreCharged(car: string){
        return car === 'Ford GT' ? 'yes' : "no";
    }
}