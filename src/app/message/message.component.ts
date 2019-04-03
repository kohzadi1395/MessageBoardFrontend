import {Component, OnInit} from '@angular/core';
import {WebService} from '../web-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-message-component',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private webService: WebService, private router: ActivatedRoute) {
  }

  async ngOnInit() {
    const name = this.router.snapshot.params.name;
    this.webService.getMessage(name);
  }

}
