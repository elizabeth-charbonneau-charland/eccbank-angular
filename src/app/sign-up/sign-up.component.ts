import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';


@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

    email: string;
    password: string;
    firstName: string;
    lastName: string;
    submitted = false;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.userService.signUp(this.email, this.password, this.firstName, this.lastName).subscribe();
         this.submitted = true;
    }
}
