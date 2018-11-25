import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from './account';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Transaction } from './transaction';


@Injectable({
    providedIn: 'root',
})
export class AccountService {

    constructor(private httpClient: HttpClient) {
    }

    create(account: Account) {
        return this.httpClient.post(environment.url + 'create-account.php', {
            type: account.type,
            name: account.name,
            amount: account.money,
        }, {withCredentials: true});
    }

    getAll(): Observable<Account[]> {
        return this.httpClient.get<any[]>(environment.url + 'get-account.php', {withCredentials: true}).pipe(
            map(accounts => accounts.map(account => ({
                ...account,
                money: account.amount,
            }))),
        );
    }

    getTransaction(account: number): Observable<Transaction[]> {
        return this.httpClient.get<any[]>(`${environment.url}get-transaction.php?account=${account}`, {withCredentials: true});
    }
}
