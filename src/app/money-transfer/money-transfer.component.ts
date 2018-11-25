import { Component, OnInit } from '@angular/core';
import { Transfer} from '../transfer';
import { TransferService } from '../transfer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {
    transfer = new Transfer();

  constructor(private transferService: TransferService, private messageService: MessageService, private activedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activedRoute.snapshot.paramMap.get('sourceAccount');
  }
  sendTransfer() {
    this.transfer.compte = Number(this.activedRoute.snapshot.paramMap.get('sourceAccount'));
    this.transferService.sendTransfer(this.transfer).subscribe(
        response => this.messageService.showMessage('success', 'Votre transfert a été effectué avec succes !'),
        error => this.messageService.showMessage('error', 'Oups, une erreur cest produite, veuillez reesayer de nouveau !'),
        () => this.router.navigate(['/compte'])
    );
  }
}
