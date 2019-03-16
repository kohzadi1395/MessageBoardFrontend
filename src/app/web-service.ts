import {Http} from '@angular/http';
// import "rxjs/add/operator/toPromise";
import {Injectable} from "@angular/core";

@Injectable()
export class WebService {
  Base_Url = 'http://localhost:58478/api'

  constructor(private http: Http) {
  }

  getMessage() {
    return this.http.get(this.Base_Url + '/Messages').toPromise();
  }

  postMessage(message) {
    return this.http.post(this.Base_Url + '/Messages', message).toPromise();
  }

}
