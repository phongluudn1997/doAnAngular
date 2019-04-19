import { Injectable } from '@angular/core';
import { Message } from '../models/message'
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[] = [];

  add(message: Message) {
    this.messages.push(message);
  }

  clear() {
    this.messages.pop();
  }

}
