import {Http} from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class WebService {
  Base_Url = 'http://localhost:58478/api';
  private messageStore = [];
  private messageSubject = new Subject();
  messages = this.messageSubject.asObservable();

  constructor(private http: Http) {//, private snackBar:MatSnackBar) {
    this.getMessage(null);
  }

  // async getMessage(user) {
  //   try {
  //     user = (user) ? '/' + user : '';
  //     let response = await this.http.get(this.Base_Url + '/Messages' + user).toPromise();
  //     this.messages = response.json()
  //   }
  //   catch (e) {
  //     this.handleError('Unable to get message');
  //   }
  //
  // }
  getMessage(user) {
    user = (user) ? '/' + user : '';
    this.http.get(this.Base_Url + '/Messages' + user).subscribe(response => {
      this.messageStore = response.json();
      this.messageSubject.next(this.messageStore);
    }, error => {
      this.handleError('Unable to get message');
    });
  }

  async postMessage(message) {
    try {
      await this.http.post(this.Base_Url + '/Messages', message).toPromise();
      // this.messages.push(message)
      this.getMessage(null);
    }
    catch (e) {
      this.handleError('Unable to post message');
    }
  }

  private handleError(error) {
    console.log(error);
    // this.snackBar.open(error, 'Close', { duration: 3500, verticalPosition: 'top', panelClass: 'snack-error'});

  }
}
