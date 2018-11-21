import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    email: string;
    password: string;
    submitted = false;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }
    onSubmit() {
        this.userService.signIn(this.email, this.password).subscribe();
        this.submitted = true;
    }
}
