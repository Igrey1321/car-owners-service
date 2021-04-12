import { Component, OnInit } from '@angular/core';

import { OwnerEntity } from '../../interfaces/OwnerEntity'
import { CarOwnersService } from '../../services/CarOwners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  owners: OwnerEntity[];
  selectedOwner: OwnerEntity;
  selectId: number;

  constructor(private CarOwnersService: CarOwnersService) { }

  ngOnInit() {
    this.getOwners();
  }

  getOwners(): void {
    this.CarOwnersService.getOwners()
    .subscribe(owners => {
      this.owners = owners
    });
  }

  onSelect(owner: OwnerEntity): void{
    this.selectId = owner.aId;
    this.selectedOwner = owner;
  }

  deleteOwner(id: number): void {
    this.CarOwnersService.deleteOwner(id)
    
  }
}
