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
import { SingleFieldComponent } from './single-field/single-field.component';
import { EditAddDirective } from './directives/edit-add.directive';
import { ViewAddDirective } from './directives/view-add.directive';
import { TextContentComponent } from './single-field/show-content/text-content/text-content.component';
import { SelectOption2Component } from './single-field/dynamicComponent2/select-option2/select-option2.component';
import { SelectOptionMultiple2Component } from './single-field/dynamicComponent2/select-option-multiple2/select-option-multiple2.component';
import { InputTextComponent } from './single-field/dynamicComponent2/input-text/input-text.component';
import { Boolean2Component } from './single-field/dynamicComponent2/boolean2/boolean2.component';
import { Progress2Component } from './single-field/dynamicComponent2/progress2/progress2.component';
import { BooleanContentComponent } from './single-field/show-content/boolean-content/boolean-content.component';
import { ProgressContentComponent } from './single-field/show-content/progress-content/progress-content.component';

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
    DrawerComponentComponent,
    SingleFieldComponent,
    EditAddDirective,
    ViewAddDirective,
    TextContentComponent,
    SelectOption2Component,
    SelectOptionMultiple2Component,
    InputTextComponent,
    Boolean2Component,
    Progress2Component,
    BooleanContentComponent,
    ProgressContentComponent
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
