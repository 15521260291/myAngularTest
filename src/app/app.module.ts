import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewRefDirective } from './directives/view-ref.directive';
import { SelectOptionComponent } from './dynamicComponents/select-option/select-option.component';
import { TextComponent } from './dynamicComponents/text/text.component';
import { ViewModeComponent } from './view-mode/view-mode/view-mode.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import * as MOCKDATA from './mock';
import {DelonMockModule} from "@delon/mock";

@NgModule({
  declarations: [
    AppComponent,
    ViewRefDirective,
    SelectOptionComponent,
    TextComponent,
    ViewModeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    DelonMockModule.forRoot({ data: MOCKDATA })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
