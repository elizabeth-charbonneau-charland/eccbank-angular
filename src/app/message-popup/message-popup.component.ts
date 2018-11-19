import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MessageService } from '../message.service';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit {
  messages: Observable<Message>;

  constructor(private  messageService: MessageService) {
    this.messages = this.messageService.messages;
  }

  ngOnInit() {
  }

  removeMessage() {
      this.messageService.removeMessage();
  }
}
