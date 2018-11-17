import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  sendTransfer(transfer: Transfer): Observable<Object> {
      return this.httpClient.post<any>(environment.url + 'transfer.php', transfer);
  }
}
