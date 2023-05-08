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
import { SelectOptionMultipleComponent } from './dynamicComponents/select-option-multiple/select-option-multiple.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NzMessageModule } from 'ng-zorro-antd/message';
import { BooleanComponentComponent } from './dynamicComponents/boolean-component/boolean-component.component';
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import { ProgressComponentComponent } from './dynamicComponents/progress-component/progress-component.component';
import {NzProgressModule} from "ng-zorro-antd/progress";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

// 引入全部的图标，不推荐 ❌
import * as AllIcons from '@ant-design/icons-angular/icons';
import { DrawerComponentComponent } from './drawer-component/drawer-component.component';
import {NzInputModule} from "ng-zorro-antd/input";

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent,
    ViewRefDirective,
    SelectOptionComponent,
    TextComponent,
    ViewModeComponent,
    SelectOptionMultipleComponent,
    BooleanComponentComponent,
    ProgressComponentComponent,
    DrawerComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NzSelectModule,
    NzMessageModule,
    DelonMockModule.forRoot({data: MOCKDATA}),
    NzSwitchModule,
    NzBadgeModule,
    NzProgressModule,
    NzButtonModule,
    NzDrawerModule,
    NzIconModule.forRoot(icons),
    NzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
