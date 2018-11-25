import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';
import { Transfer } from './transfer';

@Injectable({
    providedIn: 'root',
})
export class BillService {

    constructor(private httpClient: HttpClient) {
    }

    getProvidersList(): Observable<string[]> {
        return this.httpClient.get<any[]>(environment.url + 'get-providers.php', {withCredentials: true}).pipe(
            map(providers => providers.map(provider => provider.name)),
        );
    }

    payBills(compte: number, fournisseur: string, montant: number  ): Observable<Object> {
        return this.httpClient.post<any>(environment.url + 'providers.php', { compte, fournisseur, montant});
    }
}
