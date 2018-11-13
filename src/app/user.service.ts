import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    loggedIn: boolean;

    constructor(private httpClient: HttpClient, private router: Router) {
        this.httpClient.get(environment.url + 'login.php', {withCredentials: true})
            .subscribe(() => this.loggedIn = true);
    }

    signUp(email: string, password: string, firstName: string, lastName: string): Observable<Object> {
        return this.httpClient.post(environment.url + 'signup.php', {
            email,
            password,
            firstName,
            lastName,
        }, {withCredentials: true}).pipe(
            tap(() => this.loggedIn = true),
            tap(() => this.navigateToAccount()),
        );
    }

    signIn(email: string, password: string): Observable<Object> {
        return this.httpClient.post(environment.url + 'login.php', {
            email,
            password,
        }, {withCredentials: true}).pipe(
            tap(() => this.loggedIn = true),
            tap(() => this.navigateToAccount()),
        );
    }

    logout() {
        this.loggedIn = false;
        this.navigateToHome();
        return this.httpClient.get(environment.url + 'logout.php', {withCredentials: true});
    }

    navigateToAccount() {
        this.router.navigate(['/', 'compte']);
    }

    navigateToHome() {
        this.router.navigate(['/', 'accueil']);
    }
}
