import {Component, OnInit} from '@angular/core';
import {WebService} from "../web-service";

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {
  messages = [];

  constructor(private webService: WebService) {

  }

  async ngOnInit() {
    let response = await this.webService.getMessage();
    // console.log(response.json());
    this.messages = response.json();
  }

}
