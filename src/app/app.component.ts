import {Component, ViewChild} from '@angular/core';
import {MessageComponentComponent} from "./message-component/message-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  @ViewChild(MessageComponentComponent) message: MessageComponentComponent

  onPosted(message) {
    // console.log(message);
    this.message.messages.push(message);
  }
}
