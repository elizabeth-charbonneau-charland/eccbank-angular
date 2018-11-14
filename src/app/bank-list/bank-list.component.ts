import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { Observable } from 'rxjs';
import { Bank } from '../bank';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {
  banks: Observable<Bank[]>;

  constructor(private transferService: TransferService) {
    this.banks = this.transferService.getBanks();
  }

  ngOnInit() {
  }

}
