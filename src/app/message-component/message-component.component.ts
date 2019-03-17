import {Component, OnInit} from '@angular/core';
import {WebService} from "../web-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {

  // messages;
  sw: WebService;

  constructor(private webService: WebService, private router: ActivatedRoute) {
    this.sw = this.webService
  }

  async ngOnInit() {
    let name = this.router.snapshot.params.name;
    this.webService.getMessage(name)

  }

}
