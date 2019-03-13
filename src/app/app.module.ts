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

@NgModule({
  declarations: [
    AppComponent,
    MessageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
