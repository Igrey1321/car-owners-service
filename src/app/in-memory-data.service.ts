import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OwnerEntity } from '../interfaces/OwnerEntity';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entity = [
      {
        aId: 0,
        aFirstName: 'Windstorm',
        aLastName: 'Bombasto',
        aMiddleName: 'Tornado',
        aCars: [{
          aIdCar: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        },
        {
          aIdCar: 2,
          aNumber: 'AX3648DH',
          aBrand: 'Mazda',
          aModel: 'Optima',
          aYear: 2013,
        }]
      },
      {
        aId: 1,
        aFirstName: 'Bombasto',
        aLastName: 'Tolkin',
        aMiddleName: 'Tornado',
        aCars: [{
          aIdCar: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        }]
      },
      {
        aId: 2,
        aFirstName: 'Magneta',
        aLastName: 'Fargo',
        aMiddleName: 'Tornado',
        aCars: [{
          aIdCar: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        }]
      },
      {
        aId: 3,
        aFirstName: 'Tornado',
        aLastName: 'Monstore',
        aMiddleName: 'Tornado',
        aCars: [{
          aIdCar: 1,
          aNumber: 'AX6548GH',
          aBrand: 'KIA',
          aModel: 'Optima',
          aYear: 2009,
        }]
      }
    ];
    return { entity };
  }

  genId(entity: OwnerEntity[]): number {
    return entity.length > 0 ? Math.max(...entity.map(hero => hero.aId)) + 1 : 11;
  }
}