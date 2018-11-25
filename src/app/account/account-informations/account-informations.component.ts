import { Component, OnInit } from '@angular/core';
import { Account } from '../../account';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../account.service';
import { Observable } from 'rxjs';
import { Transaction } from '../../transaction';


@Component({
  selector: 'app-account-informations',
  templateUrl: './account-informations.component.html',
  styleUrls: ['./account-informations.component.scss']
})
export class AccountInformationsComponent implements OnInit {
  account: Account = new Account();
  transactions: Observable<Transaction[]>;

  constructor(private activedRoute: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit() {
      this.account = JSON.parse(this.activedRoute.snapshot.paramMap.get('sourceAccount'));
      this.transactions = this.accountService.getTransaction(this.account.id);
  }
}
