import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    menuIsOpen: boolean;
    isHomePage: Observable<boolean>;

    get loggedIn() {
        return this.userService.loggedIn;
    }

    constructor(private userService: UserService, router: Router, private messageService: MessageService) {
        this.isHomePage = router.events.pipe(map(() => router.isActive('/accueil', false)));
    }

    ngOnInit() {
    }

    logout() {
        this.userService.logout().subscribe(
            response => this.messageService.showMessage('success', 'Votre avez bien été déconnecté!')
        );
    }
}
