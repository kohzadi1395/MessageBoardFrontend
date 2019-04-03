import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MessageComponent} from './message/message.component';
import {MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebService} from './web-service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {NewMessageComponent} from './new-message/new-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './navcomponent/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';


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
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
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
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatInputModule,


  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
