import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
import { Observable } from 'rxjs';
import { Account } from '../../account';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {

    accounts: Observable<Account[]>;

    constructor(private accountService: AccountService) {
        this.accounts = this.accountService.getAll();
    }

    ngOnInit() {
    }

}
