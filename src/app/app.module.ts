import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HmscomponentComponent } from './hmscomponent/hmscomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatAutocompleteModule,MatFormFieldModule,MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HmsserviceService } from './hmsservice.service';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { CancelComponent } from './cancel/cancel.component';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HmscomponentComponent,
    BookComponent,
    CancelComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [HmsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
