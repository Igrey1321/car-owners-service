import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {CarEntity} from '../../interfaces/CarEntity';
import {CarOwnersService} from '../../services/CarOwners.service';


@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  cars: object = this.CarOwnersService.activeOwner.aCars;
  form: FormGroup;

  constructor(private CarOwnersService: CarOwnersService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      aFirstName: new FormControl(''),
      aLastName: new FormControl(''),
      aMiddleName: new FormControl(''),
    });
  }

  submit() {
    console.log(this.form);
  }

  addCar() {
    // @ts-ignore
    this.cars.push(
      {
        aIdCar: 1,
        aNumber: '',
        aBrand: '',
        aModel: '',
        aYear: 1990,
      }
    );
  }

  removeCar(id: number) {
    // @ts-ignore
    this.cars.splice(id, 1);
  }
}
