import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    menuIsOpen: boolean;

    get loggedIn() {
        return this.userService.loggedIn;
    }
    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

     logout() {
       this.userService.logout().subscribe();
    }
}
