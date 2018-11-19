import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
})

export class AccountComponent implements OnInit {
    @Input() account: Account;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    navigateToTransfer() {
        this.router.navigate(['/', 'virer', {sourceAccount: this.account.id}]);
    }

    navigateToAccountInfo() {
        this.router.navigate(['/', 'informations', {sourceAccount: JSON.stringify(this.account)}]);
    }

    navigateToPayBills() {
        this.router.navigate(['/', 'payer', {sourceAccount: this.account.id}]);
    }
}
