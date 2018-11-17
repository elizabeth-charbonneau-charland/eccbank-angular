import { Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private httpClient: HttpClient) {
  }

    getProvidersList(): Observable<string[]> {
        return this.httpClient.get<any[]>(environment.url + 'get-providers.php', {withCredentials: true}).pipe(
            map(providers => providers.map(provider => provider.name))
        );
    }
}
