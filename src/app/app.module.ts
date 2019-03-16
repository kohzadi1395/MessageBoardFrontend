import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageComponentComponent} from './message-component/message-component.component';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebService} from "./web-service";
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {NewMessageComponent} from './new-message/new-message.component';
import {FormsModule} from "@angular/forms";
import {NavcomponentComponent} from './navcomponent/navcomponent.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponentComponent,
    NewMessageComponent,
    NavcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule

  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
