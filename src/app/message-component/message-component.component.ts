import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {
  messages = [{text: 'some text', owner: 'Tim'}, {text: 'other text', owner: 'Jane'},]
  constructor() {
  }

  ngOnInit() {
  }

}
