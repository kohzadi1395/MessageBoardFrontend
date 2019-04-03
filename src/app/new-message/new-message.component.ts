import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WebService} from '../web-service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  owner = 'Test';
  Text = 'Hi';

  @Output() onPosted = new EventEmitter();
  message = {
    owner: this.owner,
    text: this.Text
  };

  constructor(private webService: WebService) {

  }

  async ngOnInit() {

  }

  post() {
    console.log('post function is called');
    this.webService.postMessage(this.message);
    this.onPosted.emit(this.message);
  }

}
