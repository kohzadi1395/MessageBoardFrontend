import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WebService} from "../web-service";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  messages = [];
  owner = "Test";
  Text = "Hi";

  @Output() onPosted = new EventEmitter();
  message = {
    owner: this.owner,
    text: this.Text
  }

  constructor(private webService: WebService) {

  }

  async ngOnInit() {
    let response = await this.webService.getMessage();
    // console.log(response.json());
    this.messages = response.json();
  }

  post() {
    // console.log(this.message);
    this.webService.postMessage(this.message);
    this.onPosted.emit(this.message);
  }
}
