import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageComponent} from "../message/message.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MessageComponent) message: MessageComponent;
  constructor() {
  }

  ngOnInit() {
  }

  onPosted(message) {
    console.log('app component ' + message);
  }
}
