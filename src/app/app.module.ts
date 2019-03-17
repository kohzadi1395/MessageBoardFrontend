import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageComponent} from './message/message.component';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebService} from "./web-service";
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {NewMessageComponent} from './new-message/new-message.component';
import {FormsModule} from "@angular/forms";
import {NavComponent} from './navcomponent/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';


const routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'messages',
    component: MessageComponent
  },
  {
    path: 'messages/:name',
    component: MessageComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,


  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
