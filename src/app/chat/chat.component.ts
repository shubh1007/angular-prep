import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() chat = "Hello";
  chats = ["Parent To Child"];
  @Output() newChatEvent = new EventEmitter<string>();

  // childToParent(chat: string){
  //   this.newEvent.emit(chat);
  // }

  addChildChat(chat: string){
    this.newChatEvent.emit(chat);
  }
}
