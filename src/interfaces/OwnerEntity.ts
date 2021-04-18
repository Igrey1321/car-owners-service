import {CarEntity} from './CarEntity';

export interface OwnerEntity {
  aOwnerId: number;
  aFirstName: string;
  aLastName: string;
  aMiddleName: string;
  aCars: CarEntity[];
}
