import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import {RoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule} from '@angular/forms';
import {SearchRequestService} from './search-request.service';
import { UpperCasePipe } from './upper-case.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';







@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UpperCasePipe
  ],
  imports: [
      BrowserModule,
      RoutingModule,
      RouterModule,
      FormsModule,
      NgProgressModule,
      NgProgressHttpModule,
      HttpClientModule,
      NgbModule
  ],
  providers: [SearchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }