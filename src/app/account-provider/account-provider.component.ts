import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-account-provider',
  templateUrl: './account-provider.component.html',
  styleUrls: ['./account-provider.component.scss']
})
export class AccountProviderComponent implements OnInit {
    providers: Observable<string[]>;

    constructor(private providersService: BillService) {
        this.providers = this.providersService.getProvidersList();
    }
  ngOnInit() {
  }

}
