import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageComponentComponent} from "../message-component/message-component.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MessageComponentComponent) message: MessageComponentComponent;
  constructor() {
  }

  ngOnInit() {
  }

  onPosted(message) {
    console.log('app component ' + message);
  }
}
