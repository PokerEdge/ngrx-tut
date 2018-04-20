import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { tutReducer } from './reducers/tutorial.reducers';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: tutReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
