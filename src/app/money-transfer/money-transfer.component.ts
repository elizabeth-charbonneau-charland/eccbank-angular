import { Component, OnInit } from '@angular/core';
import { Transfer} from '../transfer';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
    transfer = new Transfer();

  constructor() { }

  ngOnInit() {
  }

}
