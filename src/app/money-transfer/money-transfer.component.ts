import { Component, OnInit } from '@angular/core';
import { Transfer} from '../transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
    transfer = new Transfer();

  constructor(private transferService: TransferService) { }

  ngOnInit() {
  }
  sendTransfer() {
    this.transferService.sendTransfer(this.transfer).subscribe(console.log);
  }

}
