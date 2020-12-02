import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class UserService {
    userNames: string[] =
    [
        'Dik',
        'Nik',
        'Mike',
        'Vik'
    ];

    getUserNames(name: string): Observable<string[]>{
        let names: string[] = []
        for(let _name of this.userNames){
            if(_name === name ){
                names.push(_name);
            }
        }
        return of(names);
    }
}
