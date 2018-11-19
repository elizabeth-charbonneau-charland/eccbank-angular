import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from '../bill.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-account-provider',
    templateUrl: './account-provider.component.html',
    styleUrls: ['./account-provider.component.scss'],
})
export class AccountProviderComponent implements OnInit {
    providers: Observable<string[]>;
    amount: number;
    selectedProvider: string;

    constructor(private providersService: BillService, private activedRoute: ActivatedRoute, private messageService: MessageService) {
        this.providers = this.providersService.getProvidersList();
    }

    ngOnInit() {
        this.activedRoute.snapshot.paramMap.get('sourceAccount');
    }

    payBills() {
        const account  = Number(this.activedRoute.snapshot.paramMap.get('sourceAccount'));
        this.providersService.payBills(account, this.selectedProvider, this.amount).subscribe(
            response => this.messageService.showMessage('success', 'Votre transfert a été effectué avec succes !'),
            error => this.messageService.showMessage('error', 'Oups, une erreur cest produite, veuillez reesayer de nouveau !')
        );
    }

}
