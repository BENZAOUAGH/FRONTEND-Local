import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LocalCreateComponent } from './view/locals/local-create/local-create.component';
import { LocalListComponent } from './view/locals/local-list/local-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    LocalCreateComponent,
    LocalListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        Ng2SearchPipeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
