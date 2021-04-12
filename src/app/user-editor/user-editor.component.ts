import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CarEntity} from '../../interfaces/CarEntity';
import {CarOwnersService} from '../../services/CarOwners.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  cars: CarEntity[];
  form: FormGroup;

  constructor(private CarOwnersService: CarOwnersService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      aFirstName: new FormControl(''),
      aLastName: new FormControl(''),
      aMiddleName: new FormControl(''),
    });

    this.initCars();

  }

  initCars(): void {
    this.cars.push(
      {
        aIdCar: 1,
        aNumber: 'AX6548GH',
        aBrand: 'KIA',
        aModel: 'Optima',
        aYear: 2009,
      }
    );
  }

  submit() {
    console.log(this.form);
  }

  addCar() {
    this.cars.push(
      {
        aIdCar: 1,
        aNumber: 'AX6548GH',
        aBrand: 'KIA',
        aModel: 'Optima',
        aYear: 2009,
      }
    );
    console.log(this.cars);
  }

  removeCar(id: number) {
    this.cars.splice(id, 1);
  }
}
