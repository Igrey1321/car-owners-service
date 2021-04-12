import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {OwnerEntity} from '../interfaces/OwnerEntity';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entity: OwnerEntity[] = [
      {
        aOwnerId: 0,
        aFirstName: 'Windstorm',
        aLastName: 'Bombasto',
        aMiddleName: 'Tornado',
        aCars: [{
          aCarId: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        },
          {
            aCarId: 2,
            aNumber: 'AX3648DH',
            aBrand: 'Mazda',
            aModel: 'Optima',
            aYear: 2013,
          }]
      },
      {
        aOwnerId: 1,
        aFirstName: 'Bombasto',
        aLastName: 'Tolkin',
        aMiddleName: 'Tornado',
        aCars: [{
          aCarId: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        }]
      },
      {
        aOwnerId: 2,
        aFirstName: 'Magneta',
        aLastName: 'Fargo',
        aMiddleName: 'Tornado',
        aCars: [{
          aCarId: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        }]
      },
      {
        aOwnerId: 3,
        aFirstName: 'Tornado',
        aLastName: 'Monstore',
        aMiddleName: 'Tornado',
        aCars: [{
          aCarId: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        }]
      }
    ];
    return {entity};
  }

  genId(entity: OwnerEntity[]): number {
    return entity.length > 0 ? Math.max(...entity.map(hero => hero.aOwnerId)) + 1 : 11;
  }
}
