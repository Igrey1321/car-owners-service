import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {OwnerEntity} from '../../interfaces/OwnerEntity';
import {CarEntity} from '../../interfaces/CarEntity';
import {CarOwnersService} from '../../services/CarOwners.service';


@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  owner: OwnerEntity;
  cars: CarEntity[];
  selectedCar: CarEntity;
  form: FormGroup;

  constructor(private carOwnersService: CarOwnersService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      aFirstName: new FormControl(''),
      aLastName: new FormControl(''),
      aMiddleName: new FormControl(''),
    });
    this.getOwner();
    this.getCars();
  }

  getOwner(): void {
    this.owner = this.carOwnersService.activeOwner;
    this.form.patchValue({
      aFirstName: this.owner.aFirstName,
      aLastName: this.owner.aLastName,
      aMiddleName: this.owner.aMiddleName,
    });
  }

  getCars(): void {
    this.cars = this.carOwnersService.activeOwner.aCars;
  }

  onSelect(car: CarEntity): void {
    this.selectedCar = car;
  }

  submit(): void {
    console.log(this.form);
  }

  addCar(): void {
    this.cars.push(
      {
        aCarId: 1,
        aNumber: '',
        aBrand: '',
        aModel: '',
        aYear: 1990,
      }
    );
  }

  removeCar(selectedCar: CarEntity): void {
    this.cars = this.cars.filter(h => h !== selectedCar);
    this.carOwnersService.deleteOwner(selectedCar.aCarId).subscribe();
  }
}
