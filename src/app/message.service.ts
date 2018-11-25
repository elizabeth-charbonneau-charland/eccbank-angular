import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {

    private _messages = new Subject<Message>();
    get messages() {
        return this._messages.asObservable();
    }

    constructor() {
    }

    showMessage(type: MessageType, text: string) {
        this._messages.next({
            text, type,
        });
    }

    removeMessage() {
        this._messages.next();
    }
}

export class Message {
    text: string;
    type: MessageType;
}

export type MessageType = 'success' | 'error';
