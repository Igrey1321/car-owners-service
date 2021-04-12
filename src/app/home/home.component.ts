import {Component, OnInit} from '@angular/core';

import {OwnerEntity} from '../../interfaces/OwnerEntity';
import {CarOwnersService} from '../../services/CarOwners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  owners: OwnerEntity[];
  selectedOwner: OwnerEntity;

  constructor(private CarOwnersService: CarOwnersService) {
  }

  ngOnInit() {
    this.getOwners();
  }

  onSelect(owner: OwnerEntity): void {
    this.selectedOwner = owner;
  }


  getOwners(): void {
    this.CarOwnersService.getOwners()
      .subscribe(owners => {
        this.owners = owners;
      });
  }

  deleteOwner(selectedOwner: OwnerEntity): void {
    this.owners = this.owners.filter(h => h !== selectedOwner);
    this.CarOwnersService.deleteOwner(selectedOwner.aOwnerId).subscribe();
  }

}
