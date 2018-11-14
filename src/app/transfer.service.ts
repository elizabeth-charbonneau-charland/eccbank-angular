import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank} from './bank';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  getBanks(): Observable<Bank[]> {
      return this.httpClient.get<any>(environment.url + 'bank.php').pipe(
          map(banks => banks.Banques)
      );
  }

  sendTransfer(transfer: Transfer): Observable<Object> {
      return this.httpClient.post<any>(environment.url + 'transfer.php', transfer);
  }
}
