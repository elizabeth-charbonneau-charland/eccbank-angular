import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    signUp(email: string, password: string) {
        this.httpClient.post(environment.url + 'signup.php', {
            email,
            password
        }).subscribe(
            () => alert("yay tu es connecté"),
            (error) => alert("LOL NON" + error));
    }
}
