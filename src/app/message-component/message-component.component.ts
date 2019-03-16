import {Component, OnInit} from '@angular/core';
import {WebService} from "../web-service";

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {
  ws: WebService;

  constructor(private webService: WebService) {
    this.ws = webService;
  }

  async ngOnInit() {
  }

}
