import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
    type: 'savings' | 'checking';
    name: string;
    money: string;

    constructor(private accountService: AccountService, private router: Router) {
    }

    ngOnInit() {
    }

    create() {
        const account = new Account();
        account.type = this.type;
        account.name = this.name;
        account.money =  Number(this.money);
        this.accountService.create(account).subscribe({
            complete: () => {
                this.router.navigate(['/compte']);
            }
        });
    }
}
